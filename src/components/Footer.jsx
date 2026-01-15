import { LOGO_URL } from "../utils/constanst";
import foodlogo from '../Public/foodlogo.png'


const Footer = () =>{
    return(
        <div>
            <div className=" w-full h-20 box-border flex justify-around bg-(--c2) text-(--c1)">
                <div className=" flex items-center">
                <img src={LOGO_URL} alt="logo" />
                <h2 className="text-xl sm:text-2xl capitalize font-bold font-serif text-shadow-lg/30 ml-4 text-green-600 ">food diet</h2>
                </div>
                <p className=" text-sm md:text-xl mt-7">© 2025 Aloo Pvt Limited</p>
            </div>
        </div>
    )
}

export default Footer;
