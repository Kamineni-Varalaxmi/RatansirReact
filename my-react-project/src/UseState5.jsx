import { useState } from "react";

function UseState5(){
 const [apple,setApple]=useState(0)
 return(
    <>
    <h1>Number of Apples:{apple}</h1>
    {apple===0 ?(
        <p>No apples left</p>
    ):(<p>Great! You have some apples</p>)
    }
    <button onClick={()=>setApple(apple+1)}>Add 1 Apple</button>
    <button onClick={()=>apple>0 && setApple(apple-1)}>Remove 1 Apple</button>
    <button onClick={()=>setApple(0)}>Reset</button>
    </>
 )
}
export default UseState5