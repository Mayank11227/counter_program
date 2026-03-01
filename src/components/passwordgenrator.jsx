import React from "react";
import reacrDOM from "react-dom/client"
import { useState , useEffect } from "react";


function Passwordgenrator(){

    const [Passwords,setPassword] = useState()
    const [length,setLenght] = useState(10)
    const [numberchange,setnumberchange] = useState(false)
    const [charchange,setcharchange] = useState(false)

    function Passwordsgen(){
        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSEUVWXYZ";
        if(numberchange)
            str+="1234567890"
        if(charchange)
            str+="!@#$%^&*()_+{}:";

        let pass = ""
        for(i=0;i<length;i++){
            pass+= str[Math.floor(Math.random()*str.length)]
        }
        setPassword(pass);
    };
    
      useEffect(()=>{
        Passwordsgen();
      },[length])
  

    return(

        <>
        <h1>{Passwords}</h1>

         <div className="second">

            <input type="range" min = {7} max = {40} value = {length} onChange={(e)=>setLenght(e.target.value)} id="rangebar" />
            <label htmlFor="rangebar"> Length Is : {length}</label>

            <input type="checkbox" defaultChecked = {numberchange} onChange={()=>setnumberchange(!numberchange)} id="check"/>
            <label htmlFor="check">Number</label>

            <input type="checkbox" defaultChecked = {charchange} onChange={()=> setcharchange(!charchange)} id="char"/>
            <label htmlFor="char">Character</label> 

         </div>

        </> 

    )
}

export default Passwordgenrator;