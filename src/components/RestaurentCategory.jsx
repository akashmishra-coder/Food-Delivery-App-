import { useState } from "react";
import ItemList from "./ItemList";

const RestaurentCategory = ({ data , showItem, setShowItem }) => {
 

    const handleAccordion = () => {      
        setShowItem()
      };

  return (
    <>
      {/* //header */}
      <div className="w-full my-4 bg-zinc-100 shadow-md ">
        <div
          className=" bg-white flex justify-between text-3xl pr-10 pl-3 cursor-pointer shadow-md  py-4 "
          onClick={handleAccordion} 
        >
          <span className=" font-bold text-2xl">
            {data.title} ({data.itemCards.length})
          </span>
          <span>{"⬇️"}</span>
        </div>

        {/* //acordiaun sections */} 
        {showItem && <ItemList cardData={data.itemCards} />}
      </div>
     </>
  );
};

export default RestaurentCategory;

