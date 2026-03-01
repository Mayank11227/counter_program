import React, { useState ,useMemo } from "react";
import ReactDOM from "react-dom/client"

// usememo hook
// 1. counter button increase 
// 2.input field fibonaci number 

function UseMemohook(){

    // counter 
    const [count , setcount ] = useState(0);
    const [number ,setnumber ] = useState(null);

    function fibbonaci(n){
        if (n<=1)
            return n;
        return fibbonaci(n-1) + fibbonaci(n-2);
    }
    const result  = useMemo(()=>fibbonaci(number) , [number])

    return(
        <>
          <h1>counter is : {count}</h1>
          <button onClick={()=>setcount(count + 1 )}>increament</button>
          <button onClick={()=>setcount(count - 1 )}>decreament</button>
           

           <div>
            <h2>fibbonaci number is :{result} </h2>
            <input type="number"  value={number} onChange={(e)=>setnumber (e.target.value)}/>

           </div>
        </>
    )
}
export default UseMemohook;