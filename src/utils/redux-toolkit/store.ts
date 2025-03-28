import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import windowReducer from "./windowSlice";


const store = configureStore({
	reducer: {
		cart: cartReducer,
        window: windowReducer
	},
});


// [for useSelector] => 
export type RootState = ReturnType<typeof store.getState>;

// [for useDispatch] => 
export type AppDispatch = typeof store.dispatch;

export default store;
