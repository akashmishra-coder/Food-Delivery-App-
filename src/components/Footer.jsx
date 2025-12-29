import { LOGO_URL } from "../utils/constanst";
import foodlogo from '../Public/foodlogo.png'


const Footer = () =>{
    return(
        <div>
            <div className=" w-full h-20 box-border flex justify-around bg-[#221c23] text-white">
                <div className=" flex items-center">
                <img src={LOGO_URL} alt="logo" />
                <h2 className="text-center font-serif text-2xl ml-4 text-red-300">FOOD DIET</h2>
                </div>
                <p className=" mt-7">© 2025 Aloo Pvt Limited</p>
            </div>
        </div>
    )
}

export default Footer;
