import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartitems: [],
    tourdetailid : null,
    booking : null,
};

export const cartslice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        additem: (state, action) => {
            state.cartitems.push(action.payload);
        },
        multiplequantity: (state, action) => {
            const { id, person } = action.payload;
            const index = state.cartitems.findIndex(item => item.id === id);
            if (index !== -1) {
                state.cartitems[index].person = person; 
                state.cartitems[index].total = person * state.cartitems[index].price;
            }
        },
        deleteitem: (state, action) => {
            const index = state.cartitems.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.cartitems.splice(index, 1);
            }
        },
        clearcart: (state) => {
            state.cartitems = [];
        },
        tourdetail : (state,action) => {
            state.tourdetailid = action.payload;
        },
        cleartourdetail : (state) => {
            state.tourdetailid = null;
        },
        bookingcart : (state,action) => {
            state.booking = action.payload
        }
    }
});

export default cartslice.reducer;
export const {additem,multiplequantity,deleteitem,clearcart,tourdetail,cleartourdetail,bookingcart} = cartslice.actions;



