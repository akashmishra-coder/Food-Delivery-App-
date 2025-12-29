import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import Menucard, { PromotedComponents } from "./Menucard";

//state variable in react
export const Body = () => {
  const [restro, setrestro] = useState([]); //this will hold all cards and will update
  const [filterRestro, filtersetrestro] = useState([]); //this variable will display the cards on UI and it will use to update UI through restro varible.

  console.log(restro);

  const RestauretCardPromoted = PromotedComponents(Menucard);

  const [searchtext, setsearchtext] = useState("");

  //whenever a state variable is updated, react trigger reconciliation cycle(re-rendered the component)
  useEffect(() => {
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
    <div className="body bg-gray-300 ">
      <div className=" w-full border-2 bg-white rounded-400 box-border pt-5 pb-15">
        <div className=" w-full flex justify-center gap-20 text-2xl font-medium font-serif mb-5">
          <p>Dinner</p>
          <p>|</p>
          <p> Restaurents </p>
          <p>|</p>
          <p> Food News </p>
        </div>
        <div className=" w-full  flex flex-col items-center  gap-10 text-lg">
          <img
            src={
              "https://t3.ftcdn.net/jpg/06/32/69/10/240_F_632691099_lF6Vsz0DsO4KE4azO1WIXiOtRClw7QPk.jpg"
            }
            alt=""
          />
          <p className=" text-6xl w-130 text-center font-bold font-serif text-shadow-lg/30  ">
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
          className=" bg-[#008000] cursor-pointer hover:scale-105 text-white py-2 px-3 rounded-xl  hover:transition-all hover:duration-100 text-2xl shadow-md shadow-gray-600"
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

      <button
        className=" py-3 px-6 text-lg font-medium  m-2.5 bg-[#008000] text-white rounded-xl ml-10 hover:scale-105 hover:transition-all hover:duration-100 shadow-md shadow-gray-600"
        //after click here will reset all cards on UI
        onClick={() => {
          //again we call Api here
          fetchdata();
        }}
      >
        All restaurants
      </button>

      <button
        className=" py-3 px-6 text-lg font-medium  m-2.5 bg-[#008000] text-white rounded-xl ml-10 hover:scale-105 hover:transition-all hover:duration-100 shadow-md shadow-gray-600"
        onClick={() => {
          let restroList = restro.filter((res) => res.info.avgRating > 4.5);
          filtersetrestro(restroList);
        }}
      >
        Top restraunt
      </button>

      <button className=" py-3 px-6 border-2 text-lg font-medium border-none m-2.5 bg-[#008000] text-white rounded-xl ml-10 shadow-md hover:scale-105 hover:transition-all hover:duration-100 shadow-gray-600">
        {" "}
        Available {filterRestro.length}
      </button>
      <h2 className=" text-2xl font-medium text-green-950">
        Top Restaurant in Delhi
      </h2>
      <div className=" w-full px-20 flex flex-wrap gap-5 box-border py-15 bg-[#6D9773]">
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
