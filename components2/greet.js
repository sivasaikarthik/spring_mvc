import React from 'react';


/*function Greet()
{
    return <h1>Hello karthik</h1>
}*/
const Greet=(props)=>{
     console.log(props)
    
    return (
        <div>

            <h1>hello {props.n} favorite hero name is {props.favourite}</h1>
            {props.children}

        </div>


    )
}


export default Greet;
