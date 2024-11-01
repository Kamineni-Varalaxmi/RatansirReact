import { useState } from "react";

function UseState3(){
    const [score,setScore]=useState(0)
    const increamentBy1=()=>{
        setScore(score+1);
    }
    const increamentBy2=()=>{
        setScore(score+2);
    }
    const increamentBy3=()=>{
        setScore(score+3);
    }
    const increamentBy4=()=>{
        setScore(score+4);
    }
    const increamentBy6=()=>{
        setScore(score+6);
    }
    return(
        <>
        <h1>This is Score value :{score}</h1>
        <button style={{color:'blue'}} onClick={increamentBy1}>Increament</button>
        <button style={{color:'yellow'}} onClick={increamentBy2}>Increament</button>
        <button style={{color:'orange'}} onClick={increamentBy3}>Increament</button>
        <button style={{color:'green'}} onClick={increamentBy4}>Increament</button>
        <button style={{color:'red'}} onClick={increamentBy6}>Increament</button>
        </>
    )
}
export default UseState3