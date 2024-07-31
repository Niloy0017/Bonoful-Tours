import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orderitems : []
};

export const orderslice = createSlice({
    name: "orde",
    initialState,
    reducers: {
        addorder: (state, action) => {
            console.log('Adding order:', action.payload);
            state.orderitems.push(action.payload);
        },
        clearorder: (state) => {
            state.orderitems = [];
        }

    }
});

export default orderslice.reducer;
export const {addorder,clearorder} = orderslice.actions;