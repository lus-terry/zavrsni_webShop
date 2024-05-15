import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

const initialState = {
    items: [],
    status: null,
    error: null
};

export const productsFetch = createAsyncThunk(
    "products/productsFetch",
        async(id=null, {rejectWithValue}) => {
            try{ 
                const response = await axios.get("http://localhost:5000/products")
                return response?.data //ovaj upitnik znaci da ako data ne postoji vrati error
            }catch(error) {
                return rejectWithValue("an error occured");
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
            });
    },
});

export default productsSlice.reducer;