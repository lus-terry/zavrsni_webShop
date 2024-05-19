import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../features/authSlice";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";


const Register = () => {
    const dispatch = useDispatch()
    const auth = useSelector((state) => state.auth);

    console.log(auth);

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    })

    const { email, password, name } = user;

    const handleSubmit = (e) => {
        //handling submit  without reloading the page
        e.preventDefault();

        dispatch(registerUser(user));
    }

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    return ( 
        <div className="content_container_forest">
        
        <div className="form_container ">

            <div className="text-2xl mb-4 text-center">Signup Account</div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
            
                <div>
                <label htmlFor="email" className="block font-medium text-gray-700">
                    Email
                    </label>
                    <input
                    type="email"
                    name="email"
                    value={email}
                    placeholder="Enter your email"
                    onChange={handleOnChange}
                    className="custom-input"
                    />
                </div>
                <div>
                <label htmlFor="username" className="block font-medium text-gray-700">
                    Username
                    </label>
                    <input
                    type="text"
                    name="name"
                    value={name}
                    placeholder="Enter your username"
                    onChange={handleOnChange}
                    className="custom-input"
                    />
                </div>
                <div>
                <label htmlFor="password" className="block font-medium text-gray-700">
                    Password
                    </label>
                    <input
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Enter your password"
                    onChange={handleOnChange}
                    className="custom-input"
                    />
                </div>
                <div className="text-center text-red-700">
                    {auth.registerStatus === "rejected" ? (
                        <p>{auth.registerError}</p>
                    ) : null}
                </div>
               
                <div className="items-center">
                    <Button
                    type="submit"
                    className="button"
                    >
                    Submit
                    </Button>
                </div>
                <span className="flex text-center">
                    <div className="w-3/4 ">Already have an account?</div>
                    <div className="w-1/4 text-left"><Link to="/login" className="custom-details-color hover:font-bold">Login</Link></div> 
                </span>
                
                </form>
                </div>
        </div>
     );
}
 
export default Register;


/*
/*
            <form onSubmit={handleSubmit}>
                <h2>Register</h2>
                <input type="text" placeholder="name" onChange={handleOnChange}/>
                <input type="email" placeholder="email" onChange={handleOnChange}/>
                <input type="password" placeholder="password" onChange={handleOnChange}/>

                <button>
                    {auth.registerStatus === "pending" ? "Submitting" : "Register" }
                </button>

                {auth.registerStatus === "rejected" ? (
                    <p>{auth.registerError}</p>
                ) : null}

            </form>
            */