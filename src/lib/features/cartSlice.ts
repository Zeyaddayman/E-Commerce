import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface ICartState {
    amount: number;
}

const initialState: ICartState = {
    amount: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
    }
})

// export const {  } = cartSlice.actions

export const selectCart = (state: RootState) => state.cart;

export default cartSlice.reducer;