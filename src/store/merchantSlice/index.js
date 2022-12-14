import { createSlice } from '@reduxjs/toolkit';

export const merchantSlice = createSlice({
    name: 'merchant',
    initialState: {
        merchantInfo: {},
    },
    reducers: {
        setState: (state, action) => {
            // console.log('εηε¨δΊ',{...state, ...action.payload})
            return {...state, ...action.payload}
        }
    }
})

export const { setState } = merchantSlice.actions;
export default merchantSlice.reducer;