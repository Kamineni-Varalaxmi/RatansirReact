import { useState } from "react";

function UseState2 (){
    const [count,setCount]=useState(0)
    const increament= () =>{
        setCount(count+1);
    }
    const decreament =()=>{
        setCount(count-1);
    }
    return(
        <>
        <h1>This is Counter value:{count}</h1>
        <button style={{color:'green'}} onClick={increament}>Increament</button>
        <button style={{color:'red'}} onClick={decreament}>Decreament</button>
        </>
    )
}
export default UseState2