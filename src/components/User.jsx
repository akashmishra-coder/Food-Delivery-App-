import { useState } from "react";

function User(props) {
    const [count] = useState(1);
    const [count2] = useState(2);
    const {name, location} = props;
    
    return(
        <div>
            <h1>count1 = {count}</h1>
            <h1>count2 = {count2}</h1>
            <h3>{name}</h3>
            <p>{location}</p>
            <p>Software Engineer</p>
            <p>Akash@gamil.com</p>
        </div>
    )
}

export default User;