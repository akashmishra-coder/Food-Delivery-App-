import { useContext } from "react";
import { Imgsrc} from "../utils/constanst"
import UserContext from "../utils/UserContext";
// import CartButton from "./CartButton";

const Menucard = (props) => {
  const { resdata } = props;
  const { name, cuisines, avgRating, cloudinaryImageId, costForTwo} = resdata;

  const data = useContext(UserContext);
  // console.log(data);
  
  return (
    <div className="bg-[#0C3B2E] w-76 flex flex-col gap-3 pb-4 mx-2 mb-5 rounded-3xl box-border hover:scale-105 hover:transition-all hover:duration-100">      
      <img
        src={Imgsrc.concat(cloudinaryImageId)}
        alt="food-logo"
        className=" rounded-3xl w-auto h-50 "

      />
          <h3 className=" text-xl pl-4 font-bold text-white">{name}</h3>
        <div className=" pl-4 text-md text-white">
          <span className=" mr-2 ">{avgRating} star</span>
          <span>30 Minutes</span>
        </div >
        <p className=" pl-4 text-gray-300 font-bold">{costForTwo}</p>
        <p className=" pl-4 text-gray-300  mb-4 font-bold">{cuisines.join(", ")}</p>
    </div>
  );
};

//higher order component funtion
export const PromotedComponents = (Menucard) => {
  return (props) => {
    return (
      <div className=" hover:scale-105 hover:transition-all hover:duration-100">
        <label className=" absolute bg-black text-white p-2 rounded-lg z-10">Promoted</label>
        <Menucard {...props} /> 
      </div>
    )
  }
}

export default Menucard;
