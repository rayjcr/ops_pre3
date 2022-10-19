import { configureStore } from "@reduxjs/toolkit";
import appReducer from './appSlice';
import merchantReducer from './merchantSlice';

export default configureStore({
    reducer: {
        app: appReducer,
        merchant: merchantReducer,
    }
})




