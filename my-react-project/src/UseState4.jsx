import { useState } from "react";

function UseState4(){
    const [score,setScore]=useState(0)
    return(
        <>
        <h1>Cricket Scrore : {score}</h1>
        <button style={{color:'red'}} onClick={()=>setScore(score+1)}>+1</button>
        <button style={{color:'green'}} onClick={()=>setScore(score+2)}>+2</button>
        <button style={{color:'orange'}} onClick={()=>setScore(score+3)}>+3</button>
        <button style={{color:'yellow'}} onClick={()=>setScore(score+4)}>+4</button>
        <button style={{color:'blue'}} onClick={()=>setScore(score+6)}>+6</button>
        </>
    )
}
export default UseState4