import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./components/Body";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import Resturantmenu from "./components/Resturantmenu";
import useOnlineStatus from "./utils/useOnlineStatus";
import Ofline from "./components/Ofline";
import {createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import { useContext, useEffect, useState } from "react";
import UserContext from "./utils/UserContext";
 import { Provider } from "react-redux";
 import appstore from "./utils/aapStore";
import Cart from "./components/Cart";

const Applayout = () => {

  const [adminName, SetAdminName] = useState("");

  const  {Username} = useContext(UserContext);

  useEffect(() => {

    const userInfo = {
      name : "Akshay Saini",
    }
    SetAdminName(userInfo.name);

  }, []);

  const onlineStatus = useOnlineStatus()
  return (
    <Provider store={appstore} >
    <UserContext.Provider value={{Username: adminName, SetAdminName }}>
    <div className="app">      
      <Header />
      {onlineStatus ? <Outlet />: <Ofline />}      
      <Footer />
    </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
        {
          path: "/restaurents/:resId",
          element: <Resturantmenu />,
        },
        
    ],
    errorElement: <Error />,
  },
]);

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(<RouterProvider router={appRouter} />);
