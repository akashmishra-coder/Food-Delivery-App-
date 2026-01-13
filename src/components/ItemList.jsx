import { Imgsrc } from "../utils/constanst";
import { useDispatch } from "react-redux";
import { addItem, addTost, removeItem, removeTost } from "../utils/cartSlice";
import {  ToastContainer } from "react-toastify";
import {Trash2} from "lucide-react"

const ItemList = ({ cardData }) => {

  const dispatch = useDispatch();

  const handlerAddItem = (item) => {
    dispatch(addItem(item));
   dispatch(addTost())
  };

  return (
    <div>
      {cardData.map((item) => {
        console.log(item?.card?.info?.id);
        
        return (
          <div
            key={item.card?.info?.id}
            className=" grid grid-cols-3 gap-3 border-b-2 border-zinc-300 px-6 transition mx-6 my-4 pb-7 items-center font-sans"
          >
            <div className=" flex  gap-3 flex-col col-span-2">
              <h2 className=" text-xl font-medium">{item.card?.info.name}</h2>
              <p className=" text-md">
                ₹ <b>{item.card?.info.price || item.card?.info.defaultPrice}</b>{" "}
                50% OFF USE SWIGGY
              </p>
              <p className=" text-zinc-500 font-medium">
                {item.card?.info.description}
              </p>
            </div>
            <div className=" p-2 box-border relative flex justify-center ">
              <img
                className=" w-10/12 rounded-2xl "
                src={Imgsrc.concat(item.card?.info.imageId)}
                alt=""
              />
              <button
                className=" text-2xl cursor-pointer w-4/12 mx -10 rounded-xl absolute bottom-2 bg-(--c3) text-(--c1) px-3 py-2 shadow-md shadow-black active:scale-95 transition"
                onClick={() => handlerAddItem(item)}
              >
                ADD
              </button>
            </div>
          </div>
        );
      })}
      <ToastContainer />
    </div>
  );
};

export default ItemList;


export const CartItemList = ({cardData}) => {
  

  const dispatch = useDispatch();

  const handlerAddItem = (item) => {
    dispatch(addItem(item));
    dispatch(addTost());
    };

  const dltItem = (item)=>{
  dispatch(removeItem(item))
  dispatch(removeTost());

}
  return (
    <div>
      {cardData.map((item) => {
        return (
          <div
            key={item.card?.info?.id}
            className=" grid grid-cols-3 gap-3 border-b-2 border-zinc-300 px-6 transition mx-6 my-4 pb-7 items-center font-sans"
          >
            <button onClick={()=> dltItem(item)} className=" absolute cursor-pointer active:scale-95 transition right-7 my-[50%] "><Trash2 /></button>

            <div className=" flex  gap-3 flex-col col-span-2">
              <h2 className=" text-xl font-medium">{item.card?.info.name}</h2>
              <p className=" text-md">
                ₹ <b>{item.card?.info.price || item.card?.info.defaultPrice}</b>{" "}
                50% OFF USE SWIGGY
              </p>
              <p className=" text-zinc-500 font-medium">
                {item.card?.info.description}
              </p>
            </div>
            <div className=" p-2 box-border relative flex justify-center ">
              <img
                className=" w-10/12 rounded-2xl "
                src={Imgsrc.concat(item.card?.info.imageId)}
                alt=""
              />
              <button
                className=" text-2xl cursor-pointer w-4/12 mx -10 rounded-xl absolute bottom-2 bg-(--c3) text-(--c1) px-3 py-2 shadow-md shadow-black active:scale-95 transition"
                onClick={() => handlerAddItem(item)}
              >
                ADD
              </button>
            </div>
          </div>
        );
      })}
      <ToastContainer />
    </div>
  ) 
}

