import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


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
            stats.items = stats.items.filter((item) => {
               return item?.card?.info?.id !== action.payload?.card?.info?.id;
            })
        },
        clearItem:(stats, action )=>{
            stats.items.length = 0;
        },
        addTost:() =>{
        toast.success("Added to cart!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        // transition: Bounce,
    });
        
        },
        removeTost:() =>{
        toast.success("Removed!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        // transition: Bounce,
    });
        }
    }
    
});

export const {addItem, removeItem, clearItem, removeTost, addTost} = cartSlice.actions;

export default cartSlice.reducer;