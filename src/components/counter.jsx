import { useState } from "react";

function Counter(){
    let [count , setcount ] = useState(0);

    function increment(){
        return(
            count = setcount(count + 1)
        )
    }

    function decrement(){
        return(
            count = setcount(count - 2 )
        )
    }
    return (
        <>

          <h1>multiple condition in react js  </h1>
          <button onClick={increment}>Incremrnt {count} </button>
          <button onClick={decrement }>decrement  {count} </button>

    
            {
            count == 0 ? <h1>yes it is Zero</h1> 
            :count == 5 ? <h1>yes {count}</h1>
            :count == 15 ? <h1>yes {count}</h1>
            :count == 12 ? <h1>yes {count}</h1>
            :count == 10 ? <h1>yes {count}</h1>:<h1> out of box </h1>

            }                   
        </>
    )
}

export default Counter