// import './index.css'


// const About =(props)=> {



//     return(


//         <div className='about-cont'>
//         <h1>{props.brand}</h1>

//         <h1>About Section</h1>
//         </div>
//     )

// }

// export default About;


// 26-7-24
// import './index.css'


// const About =(props)=> {



//     return(

// <h1>{`About Component : ${props.counter}`}</h1>
        
//     )

// }

// export default About;

// 01-08-24

import './index.css'


const About =(props)=> {

    const {userDetails} = props;

    const {name,status,gender} = userDetails;

    return(

<h1>{name}</h1>
        
    )

}

export default About;