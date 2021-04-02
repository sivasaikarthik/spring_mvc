import React,{useState} from 'react'

function Hookuserstate() {
  /*  const [count,setcount]=useState(0);
    return (
        <div>
            <button onClick={()=>setcount(count+1)}>Count {count}</button>
        </div>
    ) */
   /*  const initialcount=0;
    const [count,setcount]=useState(initialcount);
    const incrementby5=()=>
    {
        for (let index = 0; index < 5; index++) {
            setcount(previous=>previous+1)
            //it is best to use previous and the for adding or subtractiog
        }
    }
    return (
        <div>
            Count {count}
            <br/>
            <button onClick={()=>setcount(count+1)}>increment</button>
            <button onClick={()=>setcount(initialcount)}>REset</button>
            <button onClick={()=>setcount(previous=>previous-1)}>decrement</button>
            <button onClick={incrementby5}>increment by 5</button>
        </div>
    ) */
  

    //objects in usestate
    
    const [Name,setName]=useState({firstName:'',lastName:''});
    return (
        <div>
            <input type="text"
            value={Name.firstName}
            onChange={e=>setName({...Name,firstName:e.target.value})}
            
            />
            <input type="text"
            value={Name.LastName}
            onChange={e=>setName({...Name,lastName:e.target.value})}
            
            />
            <h1>{JSON.stringify(Name)}</h1>
        </div>
    

    )





}

export default Hookuserstate
