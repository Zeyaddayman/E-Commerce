import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { ICartItem } from '@/app/_interfaces'

interface ICartState {
    cartItems: ICartItem[]
}

// const localStorageCart = localStorage.getItem("cart");

// const products = localStorageCart ? JSON.parse(localStorageCart) : [];

const initialState: ICartState = {
    // cartItems: products
    cartItems: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCartItems: (state, action: PayloadAction<ICartItem[]>) => {
            state.cartItems = action.payload;
            // localStorage.setItem("cart", JSON.stringify(state.cartItems));
        }
    }
})

export const { setCartItems } = cartSlice.actions

export const selectCart = (state: RootState) => state.cart;

export default cartSlice.reducer;