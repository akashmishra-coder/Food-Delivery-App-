import { useDispatch, useSelector } from "react-redux";
import ItemList, { CartItemList } from "./ItemList";
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
       
        <button className=" absolute right-6 bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer active:scale-95 transition " onClick={handlerClearitem}>ClearAll</button>
        <h2 className=" text-5xl font-medium font-serif">Cart Items</h2>
        <hr className=" bg-gray-200 mt-5  w-full"/>
        {cart.length === 0 ? <Emptycartbody /> : <CartItemList cardData={cart} /> }
        
    </div>
)}

export default Cart;

const Emptycartbody = () => {
    return (
        <div className=" flex flex-col mt-10 gap-3 text-2xl">
            <h3 className="">Your cart is empty </h3>
            <Link to="/" className=" text-center underline bg-black text-white px-4 py-2 rounded-md active:scale-95 transition  active:text-blue-600 ">Go to Home</Link>
        </div>
    )
}
