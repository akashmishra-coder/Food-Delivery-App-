import ItemList from "./ItemList";

const RestaurentCategory = ({ data , showItem, setShowItem }) => {
 
    const handleAccordion = () => {      
        setShowItem()
      };

  return (
    <>
      {/* //header */}
      <div className="w-full my-4 bg-zinc-700 text-(--c1) shadow-md ">
        <div
          className=" bg-gray-100 flex justify-between text-3xl pr-10 pl-3 cursor-pointer shadow-md  py-4 "
          onClick={handleAccordion} 
        >
          <span className=" font-bold text-xl text-black ">
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

