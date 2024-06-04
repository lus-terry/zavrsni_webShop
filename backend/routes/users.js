const {User} = require("../models/user");
const {auth, isUser, isAdmin} = require("../middleware/auth");
const moment = require("moment");
const router = require("express").Router();

//GET USER STATS

router.get("/stats", async(req, res) => {
    const previousMonth = moment()
    .month(moment().month()-1)
    .set("date", 1)
    .format("YYYY-MM-DD HH:mm:ss");

    try{
        const users = await User.aggregate([
            {   
                //since last month (last month and this month)
                $match: {createdAt: {$gte: new Date(previousMonth)} },
            },
            {
                $project: {
                    month: {$month: "$createdAt"}
                }
            },
            {
                $group: {
                    _id: "$month",
                    total: {$sum: 1}
                }
            },
        ]);
        res.status(200).send(users);
    }catch(err){
        console.log(err);
        res.status(500).send(err);
    }
 });


// GET ALL USERS

router.get("/", isAdmin, async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

    


module.exports = router;