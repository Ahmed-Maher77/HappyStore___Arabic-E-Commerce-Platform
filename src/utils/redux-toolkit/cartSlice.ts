import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialStateType = { count: number };

const initialState: InitialStateType = { count: 0 };

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state) => {
            state.count++;
        },
        removeFromCart: (state) => {
            state.count--;
        },
        addToCart_WithValue: (state, action: PayloadAction<number>) => {
            state.count += action.payload;
        },
    },
});

export const { addToCart, removeFromCart, addToCart_WithValue } = cartSlice.actions;
export default cartSlice.reducer;
