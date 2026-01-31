import { Ofline_logo } from "../utils/constanst";


const Ofline = () => {

    return(
        <div className="ofline-containe">
            <img src={Ofline_logo} alt="" />
            <h2>You are Ofline</h2>
            <p>Please check Your Internet</p>
            <button>Retry</button>           
        </div>
    )
}

export default Ofline;