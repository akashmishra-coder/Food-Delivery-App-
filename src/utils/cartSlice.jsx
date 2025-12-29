import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers:{
        addItem:(stats, action) =>{
            // mutating the state of cart
                stats.items.push(action.payload);
        },
        removeItem:(stats, action) =>{
            stats.items.pop();
        },
        clearItem:(stats, action )=>{
            stats.items.length = 0;
        }
    }
    
});

export const {addItem, removeItem, clearItem} = cartSlice.actions;

export default cartSlice.reducer;