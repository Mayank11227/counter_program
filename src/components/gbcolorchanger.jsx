import React from "react";
import reacrDOM from "react-dom/client"
import { useState,useEffect } from "react";

// background color changer 

function Cchanger(){
    
    const [color , setcolor] = useState("black");
    
    // agar is color ke value change hogi to chle ga e useeffect ,,, ye tab chal ti hai jab dependencii change hoti hai .
    // agar dependencii arr khali diya to ek bar chelega sab , fir nhi chale ge 
    // agar dependencii array nhi deya hai , har baarr chlega sab .
    useEffect(()=> {
      console.log("hello render ")
        document.body.style.backgroundColor = color;
    },[color]);

      return(
       <>
         <div style={{ backgroundColor:"azure"}}>
            <h1 style={{ backgroundColor:"black"}}>background color changer</h1>
            

            <button style={{backgroundColor:"red"}} onClick={()=>setcolor("red")}>red</button>
            <button style={{backgroundColor:"blue"}} onClick={()=>setcolor("blue")}>blue</button>
            <button style={{backgroundColor:"green"}} onClick={()=>setcolor("green")}>green</button>
            <button style={{backgroundColor:"yellow"}} onClick={()=>setcolor("yellow")}>yellow</button>
            <button style={{backgroundColor:"orange"}} onClick={()=>setcolor("orange")}>orange</button>
            <button style={{backgroundColor:"pink"}} onClick={()=>setcolor("pink")}>pink</button>

            

         </div>
       </>

      )
}

export default Cchanger