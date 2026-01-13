import { useContext } from "react";
import { Imgsrc, AltImg} from "../utils/constanst"
import UserContext from "../utils/UserContext";

const Menucard = (props) => {
  const { resdata } = props;
  const { name, cuisines, avgRating, cloudinaryImageId, costForTwo} = resdata;

  // Show the card even if the image id is missing — use AltImg as a fallback and handle broken image loads.
  const imageSrc = cloudinaryImageId ? Imgsrc.concat(cloudinaryImageId) : AltImg;
  return (
    <div className="bg-(--c2) w-65 flex flex-col gap-3 pb-4 mx-2 mb-5 rounded-3xl box-border active:scale-95 transition">      
      <img
        src={imageSrc}
        alt={name || "food-logo"}
        onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = AltImg; }}
        className=" rounded-t-2xl w-auto h-50 "

      />
          <h3 className=" text-2xl pl-4 font-bold text-(--w) ">{name}</h3>
        <div className=" pl-4 text-md text-(--w)">
          <span className=" mr-2 ">{avgRating} star</span>
          <span>30 Minutes</span>
        </div >
        <p className=" pl-4 text-(--c1) font-medium">{costForTwo}</p>
        <p className=" pl-4 text-gray-400  mb-4 font-medium">{cuisines.join(", ")}</p>
    </div>
  );
};

//higher order component funtion
export const PromotedComponents = (Menucard) => {
  return (props) => {
    return (
      <div className=" active:scale-95 transition ">
        <label className=" absolute bg-black text-white p-2 rounded-lg z-10">Promoted</label>
        <Menucard {...props} /> 
      </div>
    )
  }
}

export default Menucard;
