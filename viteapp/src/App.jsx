// 19-7-2024
// const App = ()=> <h1>App Component</h1>

// export default App;

// function Components

// function App(){
//   return(
//     <h1>App Component</h1>
//   )
// }
// export default App;

// function App(){
//   return(
//     <div>
//     <h1>App Component</h1>
//     <h1>Snehal</h1>
//     </div>
//   )
// }
// export default App;

// function App(){
//   return(
//     <>
//     <h1>App Component</h1>
//     <h1>Snehal</h1>
//     </>
//   )
// }
// export default App;

// Class  Components

// import { Component } from "react";

// class App extends Component{
//   render(){

//     return(
//       <h1>Class App Component</h1>
//     )
//   }
// }
// export default App;

// 20-7-2024

// import Home from "./home";
//  import './App.css'

// const App = ()=> {

//   const brandName = "Audi";

//   return(

//     <div className="app-cont">
//     <h1>App Section</h1>
//     <Home brand = {brandName}/>

//     </div>
//   )
// }

// export default App;

// import Home from "./home";
//  import './App.css'

// const App = ()=> {

//   const personDetails = {

//     name : "Apurv",
//     age : 26,
//     city : "Nagpur",
//     status : "Active"

//   };

//   return(

//     <div className="app-cont">
//     <h1>App Section</h1>
//     <Home userDetails = {personDetails}/>

//     </div>
//   )
// }

// export default App;

// import Home from "./home";
//  import './App.css'

//  const personList =[
//  {
//    id: 1,
//    name : "Apurv",
//    age : 26,
//    city : "Nagpur"
//  },
//  {

//   id: 2,
//   name : "Mauli",
//   age : 23,
//   city : "Delhi"
// },
// {
//   id: 3,
//   name : "Snehal",
//   age : 24,
//   city : "Pune"
// },
// {
//   id: 4,
//   name : "virat",
//   age : 29,
//   city : "Bengluru"
// },
// {
//   id: 5,
//   name : "Sai",
//   age : 22,
//   city : "Mumbai"
// },
// {
//   id: 6,
//   name : "Vinu",
//   age : 28,
//   city : "Mumbai"
// },
// ]

// const App = ()=> {

//   return(

//     <div className="app-cont">

//         <ul>
//           {
//             personList.map(each=><Home  personDetails = {each}  key ={each.id}/>)
//           }
//         </ul>

//     </div>
//   )
// }

// export default App;

// 25-7-2024
// import {useState} from 'react';
// import './App.css'

// const App = ()=> {
//   const [name,setName] = useState("Snehal");

//    const [count,setCount] = useState(0);

//   const onChangeHeading = ()=>{

//     setCount(count + 1);

//     setName("Apurv");

//   }

//   return(

//     <div className="app-cont">
//       <h1>{name}</h1>
//       <h1>{count}</h1>

//       <button onClick={onChangeHeading} className='btn btn-outline-info'>Change Heading</button>
//     </div>
//   )
// }
// export default App;

// 25-7-2024

// import {useState} from 'react';
// import './App.css'

// const App = ()=> {
//   const [allValues,setValues] = useState(
//     {
//       name : "Snehu",
//       count : 0
//     }
//   );

//   const onChangeHeading = ()=>{

//     setValues({...allValues,name: "Snehal",count : allValues.count + 1});

//   }

//   return(

//     <div className="app-cont">
//       <h1>{allValues.name}</h1>
//       <h1>{allValues.count}</h1>

//       <button onClick={onChangeHeading} className='btn btn-outline-info'>Change Heading</button>
//     </div>
//   )
// }
// export default App;

//  Counter Applicatiom

// import {useState} from 'react';
// import Home from './home'
// import About from './about'
// import './App.css'

// const App = ()=> {
//   const [count,setCount] = useState(0);

//   return(

//     <div className="app-cont">
//       <h1>Counter Application</h1>
//       <br /><br />
//       <h1>{count}</h1>

//       <button onClick={()=>{setCount(count-1)}} className='btn btn-outline-danger mr-3'>-Dec-</button>
//       <button onClick={()=>{setCount(count+1)}} className='btn btn-outline-info'>+Inc+</button>
//       <br /><br />

//       <Home counter = {count}/>
//       <About counter = {count}/>
//     </div>
//   )
// }
// export default App;

//  26-7-2024 and 27-7-24
// import {useEffect, useState} from 'react';
// import './App.css'

// const App = ()=> {
//   const [allValues,setValues] = useState({
//     count : 0 ,
//     userInput : ""
//   });

//    useEffect( ()=>{ // it will run only when the component will be mounted and unmounted on ui
//     setValues({...allValues, count : allValues.count + 1});
//    },[allValues.userInput])

//   return(

//     <div className="app-cont">
//       <h1>Counting Rerender with UseEffect</h1>
//       <br /><br />

//       <input onChange={(e)=> {setValues({...allValues,userInput : e.target.value})}} type="text" className='form-control w-50' />
//      <br /> <br />

//       <h1>{allValues.count}</h1>

//       <br /><br />

//       <h1>{`App component rerenders mentioned times : ${allValues.count}`}</h1>
//     </div>
//   )
// }
// export default App;

// 27-7-24

// import {useEffect, useState} from 'react';
// import './App.css'

// const App = ()=> {
//   const [allValues,setValues] = useState({
//     count : 0 ,
//     userInput : ""
//   });

//    useEffect(()=>{
//     const intervalId = setInterval(()=>{

//         setValues({...allValues,count : allValues.count + 1})

//        },1000);

//       return()=> clearInterval(intervalId);
//    });

//   return(

//     <div className="app-cont">
//       <h1>Timer Application Using React useEffects</h1>
//       <br /><br />

//       <h1 className='text-info'>We are Using setinterval for Timers</h1>
//      <br /> <br />

//       <h1>{allValues.count}</h1>

//       <br /><br />

//     </div>
//   )
// }
// export default App;

// 29-07-2024
// import {useEffect, useState} from 'react';
// import './App.css'

// const App = ()=> {

// const fetchJokes = async()=>{

//    const api ="https://apis.ccbp.in/jokes/random";

//    const response = await fetch(api);
//     const data = await response.json();
//    console.log(data);

// }

//   return(

//     <div className="app-cont">
//       <h1>Fetching Api By Clicking Button</h1>
//       <br /><br />

//       <button onClick={fetchJokes} className='btn btn-success'>Fetch Api</button>

//       <br /><br />

//     </div>
//   )
// }
// export default App;

// 30-07-24

// import {useEffect, useState} from 'react';
// import './App.css'

// const App = ()=> {

//   const [jokes, setJokes] = useState("");

//   const [name, setName] = useState("Apurv");

// useEffect(()=>{
//   const fetchJokes = async()=>{

//     const api ="https://gorest.co.in/public/v2/users";

//     const response = await fetch(api);
//      const data = await response.json();
//      console.log(data);
// }
// fetchJokes();

// },[name])

// const changeTheName =()=>{
//   setName ("Snehu");
// }

// // const fetchJokes = async()=>{

// //        const api ="https://apis.ccbp.in/jokes/random";

// //       const response = await fetch(api);
// //        const data = await response.json();
// //       setJokes(data.value);
// //    }

//   return(

//     <div className="app-cont">
//       <h1>Fetching Api By Clicking Button</h1>
//       <br /><br />
//       <h1>{name}</h1>
//       <br /><br />

//       {/* <button onClick={fetchJokes} className='btn btn-success'>Fetch Api</button> */}
//       {/* <button  className='btn btn-success'>Fetch Api</button> */}
//       <button onClick={changeTheName} className='btn btn-success'>Fetch Api</button>

//       <br /><br />
//       <h1>{jokes}</h1>

//     </div>
//   )
// }
// export default App;

// 31-7-24

// import {useEffect, useState} from 'react';
// import './App.css'

// const App = ()=> {

//   const [jokes, setJokes] = useState("");

//   // const [name, setName] = useState("Apurv");

//   const fetchJokes = async()=>{

//     const api ="https://gorest.co.in/public/v2/users/7150254";

// //     const userDetails = {
// //       email: "vk@gmail.com",
// // gender: "male",
// // name: "virat kohli",
// // status: "active"
// //     }
//     const options = {
//       method : "Delete",
//       // method : "Post",
//       headers : {
//         "Content-Type" : "application/json",
//         "Access" : "application/json",
//          Authorization : "Bearer f488f5e48189f0ab8ef00017ffeceb913c467f3bdd0cc5412755e4c092808875"

//       },
//       // body : JSON.stringify(userDetails)
//     }
//     const response = await fetch(api,options);
//     //  const data = await response.json();
//     //  console.log(data);
//     console.log(response);
//   }

// return(

//   <div className="app-cont">
//     <h1>Fetching Api By Clicking Button</h1>
//     <br /><br />
//     <h1>{name}</h1>
//     <br /><br />

//     <button onClick={fetchJokes} className='btn btn-success'>Fetch Api</button>

//       <br /><br />
//       <h1>{jokes}</h1>

//     </div>
//   )
// }
// export default App;

// 01-08-2024 (Conditional Rerendering)

import { useEffect, useState } from "react";
import About from "./about";
import "./App.css";
const App = () => {
  const [allValues, setValues] = useState({
    userList: [],
    showLoader: false,
  });
  const fetchJokes = async () => {
    setValues({ ...allValues, showLoader: true });
    const api = "https://gorest.co.in/public/v2/users";

    const response = await fetch(api);

    const data = await response.json();

    if (response.ok === true) {
      setValues({ ...allValues, userList: data, showLoader: false });
    }
  };
  return (
    <div className="app-cont">
      <h1>Fetching Api By Clicking Button</h1>
      <br />
      <br />
      <button onClick={fetchJokes} className="btn btn-success">
        Fetch Api
      </button>
      <br />
      <br />

      {allValues.showLoader ? (
        <div className="spinner-border text-info" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <ul>
          {allValues.userList.map((each) => (
            <About userDetails={each} key={each.id} />
          ))}
        </ul>
      )}
    </div>
  );
};
export default App;
