import { useState } from "react";

function UseState1(){
        const [count, setCount]=useState(0)
        const handleClick=() =>{
            setCount(count +1);
        }
        return(
            <>
            <h1>This is Counter value:{count}</h1>
          <button style={{color:'green'}} onClick={handleClick}>Increament</button>
            </>
    )
}
export default UseState1
