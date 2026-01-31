import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import Menucard, { PromotedComponents } from "./Menucard";
import { ArrowUp } from "lucide-react";

//state variable in react
export const Body = () => {
  const [restro, setrestro] = useState([]); //this will hold all cards and will update
  const [filterRestro, filtersetrestro] = useState([]); //this variable will display the cards on UI and it will use to update UI through restro varible.


  const RestauretCardPromoted = PromotedComponents(Menucard);
  const [isVisible, setisVisible] = useState(false);

  const [searchtext, setsearchtext] = useState("");

  //whenever a state variable is updated, react trigger reconciliation cycle(re-rendered the component)
    function handleScroll() {
        window.addEventListener("scroll", () => {
            console.log(window.scrollY);
            
            if(window.scrollY > 200){
                setisVisible(true)
            }else{
                setisVisible(false)
            }
        })
    }
     function scrollToTop() {
    // Implement smooth scroll to top
    window.scrollTo({
      top: 0,
      behavior:"smooth",
    })
  }
   

  useEffect(() => {
    handleScroll();
    fetchdata();
  }, []);

  //async function to calling API
  async function fetchdata() {
    try {
      let data = await fetch(
        "https://corsproxy.io/https://namastedev.com/api/v1/listRestaurants"
      );
      let json = await data.json();
      console.log(json.message);
      // optional chaining
      setrestro(
        json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      filtersetrestro(
        json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.log(error);
    }
  }

  // conditonal rendering
  if (restro.length === 0) {
    return <Shimmer />;
  }

  return restro.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body bg-(--c2) ">
      <div className=" w-full border-2 bg-white rounded-400 pt-5 pb-15 box-border">
        <div className=" w-full flex justify-center gap-6 md:gap-20 box-border text-xl font-medium font-serif mb-5">
          <p>Dinner</p>
          <p>|</p>
          <p> Restaurents </p>
          <p>|</p>
          <p> Food News </p>
        </div>
        <div className=" w-full  flex flex-col items-center gap-7 md:gap-10 text-lg">
          <img
            src={
              "https://t3.ftcdn.net/jpg/06/32/69/10/240_F_632691099_lF6Vsz0DsO4KE4azO1WIXiOtRClw7QPk.jpg"
            }
            alt=""
          />
          <p className=" text-6xl md:w-130 text-center font-bold font-serif text-shadow-lg/30  ">
            Chess and Spiece on every Slice
          </p>
          <p className=" text-2xl font-serif text-center">
            Why bother when you can easy mix up a batch at home
          </p>
          <button className=" px-4 py-3 text-white cursor-pointer bg-black rounded-2xl shadow-md shadow-gray-600 hover:scale-105 hover:transition-all hover:duration-100">
            Read More
          </button>
        </div>
      </div>
      <div className=" w-full h-20 mb-3 flex justify-center gap-5 items-center box-border ">
        <input
          type="text"
          className=" border-2 py-3 px-4 pr-10 text-white rounded-lg placeholder:text-white  placeholder:border-white bg-gray-700"
          placeholder="Enter restraunt name"
          value={searchtext}
          onChange={(e) => {
            console.log(e.target.value);

            setsearchtext(e.target.value);
          }}
        />
          
        <button
          className=" bg-[#008000] cursor-pointer active:scale-95 text-white py-2 px-3 rounded-md  transition text-xl shadow-md shadow-zinc-700"
          type="button"
          onClick={() => {
            //filter the restaurnt card and update UI
            const filtercards = restro.filter((res) =>
              res.info.name.toLowerCase().includes(searchtext.toLowerCase())
            );
            filtersetrestro(filtercards);
          }}
        >
          Search
        </button>
      </div>
      <div className=" flex w-full gap-1 md:justify-center md:gap-10  overflow-auto">
      {isVisible && <button  onClick={scrollToTop} className=" fixed z-40 bg-blue-700 px-2 py-2 cursor-pointer active:scale-95 transition  bottom-10 md:right-10 right-5 rounded-md"><ArrowUp /></button>}
      <button
        className=" py-3 px-3 md:px-6 text-lg font-medium  m-2.5 bg-(--c4) text-(--w) rounded-xl active:scale-95 active:transition-all active:duration-100 cursor-pointer shadow-md shadow-zinc-700 "
        //after click here will reset all cards on UI
        onClick={() => {
          //again we call Api here
          fetchdata();
        }}
      >
        All restaurants
      </button>

      <button
        className=" py-3 px-3 md:px-6 text-lg font-medium  m-2.5 bg-(--c4) text-(--w) rounded-xl  active:scale-95 active:transition-all active:duration-100 cursor-pointer shadow-md shadow-zinc-700"
        onClick={() => {
          let restroList = restro.filter((res) => res.info.avgRating > 4.5);
          filtersetrestro(restroList);
        }}
      >
        Top restraunt
      </button>

      <button className=" py-3 px-3 md:px-6 text-lg font-medium  m-2.5 bg-(--c4) text-(--w) rounded-xl  active:scale-95 active:transition-all active:duration-100 cursor-pointer shadow-md shadow-zinc-700">
        {" "}
        Available {filterRestro.length}
      </button>
      </div>
      <h2 className=" text-xl md:text-center font-medium text-(--c1)">
        Top Restaurant in Delhi
      </h2>
      <div className=" w-full md:px-10 flex flex-wrap justify-center gap-5 box-border py-15 bg-(--c3)">
        {/* //this will loop all the cards and display on UI */}
        {filterRestro.map((restraunt, index) => (
          <Link key={restraunt.info.id} to={`restaurents/${restraunt.info.id}`}>
            {restraunt.info.avgRating > 4.5 ? (
              <RestauretCardPromoted resdata={restraunt.info} />
            ) : (
              <Menucard resdata={restraunt.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
