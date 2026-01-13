import { useParams } from "react-router";
import CartButton from "./CartButton";
import Shimmer from "./Shimmer";
import useRestaurentInfo from "../utils/useRestaurentInfo";
import RestaurentCategory from "./RestaurentCategory";
import { useState } from "react";
import { ToastContainer } from 'react-toastify';


function Resturantmenu() {
  const { resId } = useParams();
  const resInfo = useRestaurentInfo(resId);
  const [showItem, setShowItem] = useState(null);
  
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

  return (
    <>
      <div className="menu">
        <div className="menu-name">
          <div className="name-item">
            <h1 className="name">{name}</h1>
            <CartButton />
          </div>
          <div className="menu-box">
            <p>
              {avgRatingString}({totalRatingsString}) - {costForTwo}
            </p>
            <p>{cuisines.join(", ")}</p>
            <p>{locality}</p>
          </div>

          {/* //acordiaun sections */}
          <div className=" mb-25 ">
          {category.map((categoryitem, idx) => {
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
