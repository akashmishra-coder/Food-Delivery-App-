    import { useEffect, useState } from "react";
import { MENU_API } from "./constanst";

//custom function for hook
const useRestaurentInfo = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(()=>{
        fetchdata(resId);
        console.log(MENU_API);
        
    },[]);

    async function fetchdata(resId) {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setResInfo(json.data);
    }
    
    return resInfo;
}

export default useRestaurentInfo;