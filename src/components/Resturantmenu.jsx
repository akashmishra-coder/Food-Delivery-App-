import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useRestaurentInfo from "../utils/useRestaurentInfo";
import RestaurentCategory from "./RestaurentCategory";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, addTost } from "../utils/cartSlice";


function Resturantmenu() {
  const { resId } = useParams();
  const resInfo = useRestaurentInfo(resId);
  const [showItem, setShowItem] = useState(null);
  const dispatch = useDispatch();
  
  if (resInfo === null) return <Shimmer />;  


  const {
    name,
    cuisines,
    avgRatingString,
    cloudinaryImageId,
    costForTwo,
    totalRatingsString,
    locality,
  } = resInfo?.cards[2]?.card?.card?.info;


  const category =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    const handlerAddItem = (item) => {
        dispatch(addItem(item));
       dispatch(addTost())
      };

  return (
    <>
      <div className=" flex w-screen justify-center md:px-10">
        <div className=" w-full md:w-7/12 my-10 hover:shadow-xl rounded-md transition bg-zinc-100 p-4">
          <div className=" flex justify-between">
            <h1 className=" text-2xl md:text-4xl font-serif font-semibold">{name}</h1>
            <button className="  text-2xl cursor-pointer text-center  mx-10 rounded-xl  bg-(--c3) text-(--c1) px-3 py-2 shadow-md shadow-black active:scale-95 transition" onClick={() => handlerAddItem(resInfo?.cards[2]?.card?.card?.info)}>Add</button>
          </div>
          <div className=" bg-linear-to-t from-gray-400 my-5 rounded-4xl p-4">
            <div className=" flex w-full p-2 text-xl gap-2 flex-col rounded-2xl font-sans bg-gray-100">
            <p>
              {avgRatingString}({totalRatingsString}) - {costForTwo}
            </p>
            <p className=" opacity-50">{cuisines.join(", ")}</p>
            <p className=" opacity-50">{locality}</p>
            </div>
          </div>

          {/* //acordiaun sections */}
          <div className=" mb-25 ">
          {category?.map((categoryitem, idx) => {
            return (

              // controlled component
              <RestaurentCategory 
              key={idx} 
              data={categoryitem?.card?.card} 
              showItem={idx === showItem && true}
              setShowItem={ () => setShowItem(showItem === idx? null : idx ) }
              />
            );
          })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Resturantmenu;
