
// import './index.css'
// const Home = (props)=> {
  
// //    const{userDetails} = props;
   
// //     const {name,city,status} =userDetails;
//  const {name,city,status} = props.userDetails;


//     return(
//      <div className="home-cont">
        
//         <h1>Home Component</h1>
//          <br />
//          <div className='text-right'>
//             <h1>{name}</h1>
//             <br />
//             <h1>{city}</h1>
//             <br />
//             <h1>{status}</h1>

//          </div>
       
//         </div>
//     )

// }

// export default Home;

// import './index.css'
// const Home = (props)=> {
  
// const {personDetails} = props;

// const {name, age ,city} = personDetails;


//     return(
//      <li className="home-cont">
        
//         <h1>{name}</h1>
//         <div>
//          <h2>{age}</h2>
//          <h4>{city}</h4>
//         </div>
        
       
//         </li>
//     )

// }

// export default Home;


//   26-7-2024


import './index.css'
const Home = (props)=> {
  



    return(
     <h1>{`Home Component Counter : ${props.counter}`}</h1>
    )

}

export default Home;