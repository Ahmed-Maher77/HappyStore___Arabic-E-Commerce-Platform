import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateType = { isMobile: boolean };

const initialState: initialStateType = {
	isMobile: window.innerWidth < 992,
};

const counterSlice = createSlice({
	name: "window",
	initialState: initialState,
	reducers: {
		setIsMobile: (state, action: PayloadAction<boolean>) => {
			state.isMobile = action.payload;
		},
	},
});
export const { setIsMobile } = counterSlice.actions;
export default counterSlice.reducer;
