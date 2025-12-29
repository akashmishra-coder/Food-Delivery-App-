import { LOGO_URL, Ofline, Online } from "../utils/constanst";
import { useContext, useState } from "react";
import { NavLink  } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Header = ()=>{
    const [buttonname, setbutton] = useState('Login');

    const {Username, SetAdminName} = useContext(UserContext);

    //subscribe to the store  to get the cart items
    const cartItems = useSelector((store) => store.cart.items);
    
    const onlineStatus = useOnlineStatus();
    return(
        <div className=" flex w-screen h-20 sticky top-0 z-50 text-white bg-[#221c23]">
            <div className="flex items-center p-2 pl-15 m-2 w-[50%] box-border">
                <img src={LOGO_URL} alt="logo" className=" w-auto h-15" />
                <h2 className=" text-2xl font-bold font-serif text-shadow-lg/30 ml-4 text-green-600">Food Diet</h2>
            </div>
            <div className="w-6/12 justify-center flex ">
                <ul className=" flex items-center gap-10 p-4 list-none "> 
                    
                    <li> <NavLink className={(e) => {return e.isActive ? "navbg" : "" } } to="/" >Home</NavLink></li>
                    <li> <NavLink className={(e) => {return e.isActive ? "navbg" : "" } } to="/about" >About Us</NavLink></li>
                    <li> <NavLink className={(e) => {return e.isActive ? "navbg" : "" } } to="/contact" >Contact Us</NavLink></li>
                    <li> <NavLink className={(e) => {return e.isActive ? "navbg" : "" } } to="/cart" >Cart({cartItems.length})</NavLink></li>
                    <button className="p-2 text-white h-10 bg-gray-600 cursor-pointer rounded-lg shadow-2xl" onClick={()=>{
                        buttonname === 'Login' ?setbutton('Logout'):setbutton('Login');
                    }}>{buttonname} </button>
                    <li>{onlineStatus ? <img src={Online} alt="" className="netwrokstatus"/> : <img src={Ofline} alt=""  />}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;