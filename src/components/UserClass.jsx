import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    // this is required to access props through parent class component
    super(props);
  }

  componentDidMount() {
    //first time when page render called
    // console.log("component did mount");    
    //api calls
  }

  componentDidUpdate(){
    //after each time when page gets update this will called
    // console.log("component did update");    
  }

  componentWillUnmount(){
    //when page is left from the screen this called
    // console.log("component will unmount");
    
  }

/* 
.userclass {
  border-radius: 20px;
  margin: 30px;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  width: auto;
  gap: 20px;
  box-sizing: border-box;
  box-shadow: 0 0 5px 2px rgb(219, 219, 219);
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  padding-left: 10px;
}
.userclass img {
  width: auto;
  border-radius: 20px;
  margin-left: -10px;
}
*/


  render() {
    const { login, avatar_url } = this.props.data;

    return (
      <div className="w-60 mb-20 shadow text-gray-700 pb-5 text-md flex flex-col box-border gap-5 rounded-3xl transform transition duration-200 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:bg-gray-50 motion-reduce:transform-none">
        <img src={avatar_url} alt="img" className=" w-auto rounded-t-3xl " />
        <p className=" ml-3">{login}</p>
        <p className=" ml-3">Seniour Software Engineer</p>
        <p className=" ml-3">Randomuser@gamil.com</p>
      </div>
    );
  }
}

export default UserClass;
