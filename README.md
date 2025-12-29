/*start buiding our food app*/
/*
*-Header
*   -logo
*   -nav-item
*-body
*   -search
*   -card-container
*-footer
*   -copright
*/

/*Difference between method and function*/

# Association: Functions are independent, while methods are properties of objects.
# Invocation: Functions are called by their name, while methods are called using dot notation on an object instance.

/*funcitional component is nothing just a normal js function in js*/

# Props
/*just like passing a argument to function is similer passing props to a fucntional component*/

/*whenever you are passing any data dynamicaly to component, pass as props*/

<!--({resname, cuisines, star}) --> writing like this call destructring of props which is js

/*data come from backend as a form of json so we use it to dynamicaly changes in forntend*/
/*use json viwer chrome extension for better view of api come in structured form*/

/*for adding js inside component or jsx we need to use this curly brackets '{}'*/
- Angle brackets: < >
- Parentheses: ( )
- Square brackets: [ ]
- Curly brackets: (or braces): { }

/*configDrivenUI -our UI will change as per data for particuler city which is  coming form the backend*/

/*whenever use map method in react so be concisious to give it a key props*/
  - because react need all component as it not know which new card is add here so that why if we give them a unique key so now this rect will render that one new card which is newly add in the postion so it make a big diffreance inside SEO performance 
  alwayes use to give unique key.props to element if you aply any of method or map method 

  - Keys should be stable, predictable, and unique. Unstable keys (like those produced by Math.random()) will cause many component instances and DOM nodes to be unnecessarily recreated, which can cause performance degradation and lost state in child components.

  /*not using keys(Not Acceptable) <<<< index as a key <<<<<<< using unique id(Best practice)*/


 # two ways of Import/Export
  - Default Export/Improt

  export default component;
  import Component from "path";

  - Named Export/Import

  export const name of componet/variable;
  import {Component} from "path";


  # react Hooks

-they are utilities function which are created by react devlopers
-they are normal js functions who doing purposeful work

/*mostly used hooks*/
-useState - callled local state variable (super powerful variable) --- /*cosnt [variable-Name, function-Name] = useState(defaultData here);*/
  - this is meant to create under function component and on the top side
  - dont create state variable outside the function component
  - dont create inside the (js function/ if-else condition/ loops)
- useEffect - its works after the component is rendered in the UI --- /*useEffect(()=>{},[]) - syntaxs*/
  - if optional Array is not diclaire  ==> useffect is render each time after the function rendered 
  - if optional Array is diclaired  ==> useffect is render first time after the function rendered 



# whenever a state variable inside the component is update react will Re-render the component


# Reconciliation algorthem
/*vitual DOM is representation of the actual DOM(Object) of page*/
 - virtual DOM is js object 
/*when a Ui is updated so react will compare it old virtual DOM to new virtual DOM it is call diff algorithem*/
/*react compare two object(virtual dom) and update Ui*/

/*use shimmer UI for shownig fake UI until api is not called*/


# React Router
/*let's build routing functionalty on the our app*/
- first install ==> npm install react-router-dom
- import it inside the main file like 'app' ==> import { createBrowserRouter, RouterProvider } from "react-router";
    - /*createBrowserRouter(fucntion)*/ ==> this is function which help to configure our routing 
      - it take a argument ARRAY as array of the path's
    - /*RouterProvider(Component)*/ ==> it is a component which will render on web to make routing possible

- /*useRouteError(Hook)*/ ==> error handling inside the application if wrong path entered. 

- /*Outlet(Component)*/ ==>This is a component which given by react router dom, by switching pages path this will change the component which are defined inside the children of createBrowserRouter.
- /*Link(Component)*/ ==> This is a component which given by react router dom, for using instead of anchor tag for creating link in the page
  - as we have {href=""} in anchor but in LINK we have {to=""}
  - it will not reload the pages just refresh the page chinging component that make react single page application.

-/*useRouteError(Hook)*/ ==> we can get more data about error with this hook
-/*useParams(Hook)*/ ==> it help get id dynamicaly.


/*Class based component lifecycle*/
  -cosntructor() called,
  -render() called,
  -comonentDidMount()called

# react class based component Lifecycle
/*Render phase*/
  parent constr
  parent render

  first child constr
  first child render

  second child constr
  second child render

  third child constr
  third child render

  /*DOM Update in single batch to make page optimize bcz DOM manuplation is expensive*/
  /*Commit phase*/
  first child comonentDidMount
  second child comonentdidmount
  third child comonentdidmount
  parent componentdidmount

/*after when page got data through Api and Updated by setstate*/
  -then componentDidUpdate() called 

  /*when user leaves the page so or page is left*/
  -then componentWillUnmount() is called


# optamizing our app

1. you should make componend work for single tasks.

2.keep component clean and readable for other.

3.keep bundling and ckunking files so App become light and fast
  -chunking
  -code splitting
  -dynamic bundling
  -lazy loading ==>use lazy(() => import(path of component)) this hook
  -on demand loading
  -dynamic import


# higher order component is funtion who takes a component and enhance a component and return back
  -it use for adding extra UI or giveing some extra props to component 
  - main thing we we dont change component just adding some extra things

# Uncontrolled component who is controlled by itself not it's parent.
# Controlled component is not controlling itself,it relay on it's parent.


# Props Drilling ==> when we passing data from top to bottom of child through props 
                 OR -when we want to pass data in mutlitple level of component and using there
/*basically Props drilling creates a problem in react so it solve by context Api*/




# type of Testing (devloper)

-unit Testing -- we are testing our one unit of app like component in isolation
-integration Testing
-End to end Testing 