import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
import {setHeaders, url} from "./api"
import {toast} from "react-toastify"

const initialState = {
    items: [],
    status: null,
    error: null,
    createStatus: null,
};

export const productsFetch = createAsyncThunk(
    "products/productsFetch",
        async(id=null, {rejectWithValue}) => {
            try{ 
                const response = await axios.get(`${url}/products`)
                return response?.data //ovaj upitnik znaci da ako data ne postoji vrati error
            }catch(error) {
                return rejectWithValue("an error occured");
            }
        }  
);

export const productsCreate = createAsyncThunk(
    "products/productsCreate",
    //accepting from create product form
    async(values) => {
        try{ 
            const response = await axios.post(`${url}/products`, values, setHeaders())
            return response.data 
        }catch(error) {
            console.log(error);
            toast.error("an error occured");
        }

    }
);

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(productsFetch.pending, (state, action) => {
                state.status = "pending";
                state.error = null;
            })
            .addCase(productsFetch.fulfilled, (state, action) => {
                state.status = "success";
                state.items = action.payload;
                state.error = null;
            })
            .addCase(productsFetch.rejected, (state, action) => {
                state.status = "rejected";
                state.error = action.error.message;
            })
            .addCase(productsCreate.pending, (state, action) => {
                state.createStatus = "pending";
                state.error = null;
            })
            .addCase(productsCreate.fulfilled, (state, action) => {
                state.createStatus = "success";
                state.items.push(action.payload);
                state.error = null;
                toast.success("Product Created")
            })
            .addCase(productsCreate.rejected, (state, action) => {
                state.createStatus = "rejected";
                state.error = action.error.message;
                toast.error("An error occured")
            });
    },
});

export default productsSlice.reducer;