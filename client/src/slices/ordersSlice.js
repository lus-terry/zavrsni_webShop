import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
import {setHeaders, url} from "./api"

const initialState = {
    list: [], 
    status: null,
    error: null,
};

export const ordersFetch = createAsyncThunk(
    "orders/ordersFetch",
        async() => {
            try{ 
                const response = await axios.get(`${url}/orders`, setHeaders)
    
                return response?.data //ovaj upitnik znaci da ako data ne postoji vrati error
            }catch(error) {
                console.error(error)
            }
        }  
);

export const ordersEdit = createAsyncThunk(
    "orders/ordersEdit",
    async (values, {getState}) => {
        const state = getState();

        let currentOrder = state.orders.list.filter(
            (order) => order._id === values.id
        );

        const newOrder = {
            ...currentOrder[0],
            delivery_status: values.delivery_status,
        };

        try {
            const response = await axios.put(`${url}/orders/${values.id}`, newOrder, setHeaders());

            return response.data;
        } catch(error) {
            console.log(error);
        }
    }
)

const ordersSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(ordersFetch.pending, (state, action) => {
                state.status = "pending";
                state.error = null;
            })
            .addCase(ordersFetch.fulfilled, (state, action) => {
                state.status = "success";
                state.list = action.payload;
      
                state.error = null;
            })
            .addCase(ordersFetch.rejected, (state, action) => {
                state.status = "rejected";
                state.error = action.payload;
            })
            .addCase(ordersEdit.pending, (state, action) => {
                state.status = "pending";
                state.error = null;
            })
            .addCase(ordersEdit.fulfilled, (state, action) => {
                const updatedOrders = state.list.map((order) => 
                order._id === action.payload._id ? action.payload : order);
                state.list = updatedOrders
                state.status = "success";
                state.error = null;
            })
            .addCase(ordersEdit.rejected, (state, action) => {
                state.status = "rejected";
                state.error = action.payload;
            })
        },
    });
    
    export default ordersSlice.reducer;

