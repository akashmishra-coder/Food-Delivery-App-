import CartButton from "./CartButton";
import { Imgsrc } from "../utils/constanst";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList= ({ cardData }) => {

  // console.log(cardData);
  const dispatch = useDispatch();

  const handlerAddItem = (item) =>{
    dispatch(addItem(item));
  }
  
  return (
    <div>
      {cardData.map((item) => {
        return (
          <div 
            key={item.card?.info?.id}
            className=" grid grid-cols-3 gap-3 border-b-2 border-zinc-300 px-6  mx-6 my-4 pb-7 items-center font-sans"
          >
            <div className=" flex  gap-3 flex-col col-span-2">
              <h2 className=" text-xl font-medium" >{item.card?.info.name}</h2>
              <p className=" text-md">
                ₹ <b>{item.card?.info.price || item.card?.info.defaultPrice}</b> 50% OFF USE SWIGGY
              </p>
              <p className=" text-zinc-500 font-medium">{item.card?.info.description}</p>
            </div>
            <div className=" p-2 box-border relative flex justify-center ">
              <img
              className=" w-10/12 rounded-2xl "
               src={Imgsrc.concat(item.card?.info.imageId)} 
               alt="" />
              <button className=" text-2xl cursor-pointer w-4/12 mx -10 rounded-xl absolute bottom-2 bg-white px-3 py-2 shadow-md shadow-black text-[#008000] hover:scale-105 hover:transition-all" onClick={() => handlerAddItem(item)}>ADD</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ItemList;

