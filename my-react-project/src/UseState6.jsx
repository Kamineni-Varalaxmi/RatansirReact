import { useState } from "react";

function UseState6(){
    const originalPrice=7899

    const[price,setPrice]=useState(originalPrice);

    const [discount, setDiscount]=useState(0);

    const applyDiscount = (discountValue) => {
        if(discountValue === 10){
            setDiscount(10);
            setPrice(price*0.9);
        } else if(discountValue === 20){
            setDiscount(20);
            setPrice(price*0.8);
        } else if(discountValue === 30){
            setDiscount(30);
            setPrice(price*0.7);
        } else{
            setDiscount(0);
            setPrice(price);
        }
    }
    return (
        <>
        <h1>Original Price: ${originalPrice}</h1>
        <h2>Discounted Price : ${originalPrice-discount.toFixed(2)}</h2>
        <h3>Applied discount : {discount}%</h3>
        

        <p>Click a button to apply a discount:</p>
        <button onClick={()=>applyDiscount(10)}>Apply 10% Discount</button>
        <button onClick={()=>applyDiscount(20)}>Apply 20% Discount</button>
        <button onClick={()=>applyDiscount(30)}>Apply 30% Discount</button>
        <button onClick={()=>applyDiscount(0)}>Reset</button>
        </>
    );
}
export default UseState6