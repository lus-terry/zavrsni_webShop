import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios"
import { url } from "./api";
import { jwtDecode } from "jwt-decode";



const initialState = {
    token: localStorage.getItem("token"),
    name: "",
    email: "",
    _id: "",
    registerStatus: "",
    registerError: "",
    loginStatus: "",
    loginError: "",
    userLoaded: false,

}


export const registerUser = createAsyncThunk(
    "auth/registerUser",
    async (user, {rejectWithValue}) => {
        try{
            const token = await axios.post(`${url}/register`, {
                name: user.name,
                email: user.email,
                password: user.password
            });

            localStorage.setItem("token", token.data)

            return token.data

        }catch(err) {
            console.log(err.response.data);
            return rejectWithValue(err.response.data);

        }
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState,
    //Reducers define how the state will change in response to actions within the slice.
    reducers: {

    },
    //ExtraReducers allow reacting to actions that are defined outside of the slice or asynchronous actions.
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state, action) => {
                return {...state, registerStatus: "pending"}
        });
        builder.addCase(registerUser.fulfilled, (state, action) => {
            if(action.payload) {

                const user = jwtDecode(action.payload)

                return {
                    ...state, 
                    token: action.payload,
                    name: user.name,
                    email: user.email,
                    _id: user._id,
                    registerStatus: "success"
                }
            } else return state

        });
        builder.addCase(registerUser.rejected, (state, action) => {
            return{
                ...state, registerStatus: "rejected",
                registerError: action.payload,

            }
        });

    },
});

export default authSlice.reducer;