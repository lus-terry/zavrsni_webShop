import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );
            
            //ako već imamo taj item samo povećavamo njegov quantity
            if(itemIndex >= 0) {
                state.cartItems[itemIndex].cartTotalQuantity += 1
                
            } else {
            //ako jos nemamo taj item, dodajemo ga
                const tempProduct = {...action.payload, cartTotalQuantity: 1}
                state.cartItems.push(tempProduct);   
            } 

            /*//funkcionira kao key-value
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        
            */
            
        },
        removeFromCart(state, action) {
            const nextCartItems = state.cartItems.filter(
                cartItem => cartItem._id !== action.payload._id
            )
            state.cartItems = nextCartItems;
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

            
        },
        decreaseCart(state, action) {
            const itemIndex = state.cartItems.findIndex(
                cartItem => cartItem._id === action.payload._id
            );

            if(state.cartItems[itemIndex].cartTotalQuantity > 1) {
                state.cartItems[itemIndex].cartTotalQuantity -= 1;
                
                
            } else if(state.cartItems[itemIndex].cartTotalQuantity === 1) {
                
                //remove from cart
                

                const nextCartItems = state.cartItems.filter(
                    cartItem => cartItem._id !== action.payload._id
                )
                state.cartItems = nextCartItems;
    
               
            }

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },

        clearCart(state, action) {
            state.cartItems = [];
           
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

        },

        getTotals(state, action) {
           let {total, quantity} = state.cartItems.reduce(
            (cartTotal, cartItem) => {
                const {price, cartTotalQuantity} = cartItem;
                const itemTotal = price * cartTotalQuantity;

                cartTotal.total += itemTotal
                cartTotal.quantity += cartTotalQuantity

                return cartTotal;
            },
            //initial state
            {
                total: 0,
                quantity: 0,
            }
           );  

           state.cartTotalQuantity = quantity;
           state.cartTotalAmount = total;
        }
    },
});

export const { addToCart, removeFromCart, decreaseCart, clearCart, getTotals } = cartSlice.actions;

export default cartSlice.reducer;