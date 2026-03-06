import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [], // Initialize items as an empty array
  },
  reducers: {
  
    addItem(state, action) {
        const existingItem = state.cartItems.find(item => item.id === action.payload);
        if (existingItem) {
        existingItem.quantity += 1;
        } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
        }
    },

    removeItem: (state, action) => {
        state.cartItems = state.cartItems.filter(item => item.name !== action.payload);
    },

    updateQuantity: (state, action) => {
        const { name, quantity } = action.payload;
        const itemToUpdate = state.cartItems.find( item => item.name === name);
        if (itemToUpdate) {
            itemToUpdate.quantity = quantity;
        }

    
    },

    }

});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
