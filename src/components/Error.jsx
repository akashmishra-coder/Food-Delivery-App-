import { useContext } from "react";
import { useRouteError } from "react-router";
import UserContext from "../utils/UserContext";


function Error() {

  const data = useContext(UserContext)

    //this hook(function) will give us status of error
    const err = useRouteError();
    console.log(err);
    
  return (
    <div className="error">
        <h2>Ooop!!</h2>
        <h3>Somthing went wrong?</h3>
        <h3>{err.status} {err.statusText}</h3>
        <div className=" text-2xl text-black font-bold">Talk to <b className=" text-red-600">{data.Username}</b></div>
    </div>
  )
}

export default Error;