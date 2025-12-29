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


  render() {
    const { login, avatar_url } = this.props.data;

    return (
      <div className="userclass">
        <img src={avatar_url} alt="img" />
        <p>{login}</p>
        <p>Seniour Software Engineer</p>
        <p>Randomuser@gamil.com</p>
      </div>
    );
  }
}

export default UserClass;
