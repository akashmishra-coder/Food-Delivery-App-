import { use } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItem } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {

    const cart = useSelector((store) => store.cart.items)
    console.log(cart);

    const dispatch = useDispatch();

    const handlerClearitem = () =>{
        dispatch(clearItem());
    };


    return (
    <div className=" md:w-6/12 sm:w-full m-auto my-5 pt-10 flex-col items-center gap-2 flex min-h-screen shadow-lg shadow-black bg-zinc-100 rounded-xl pb-10 relative"> 
       
        <button className=" absolute right-6 bg-red-500 text-white px-4 py-2 rounded-md hover:scale-105 hover:transition-all hover:duration-100 " onClick={handlerClearitem}>ClearAll</button>
        <h2 className=" text-5xl font-medium font-serif">Cart</h2>
        {cart.length === 0 && <Emptycartbody />}
        <ItemList cardData={cart}></ItemList>
    </div>
)}

export default Cart;

const Emptycartbody = () => {
    return (
        <div className=" flex flex-col mt-10 gap-3 text-2xl">
            <h3 className="">Your cart is empty </h3>
            <Link to="/" className=" text-center underline bg-black text-white px-4 py-2 rounded-md hover:scale-105 hover:transition-all hover:duration-100 hover:text-blue-600 ">Go to Home</Link>
        </div>
    )
}
