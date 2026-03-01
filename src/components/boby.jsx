import { useState,useEffect } from "react"
import React from "react";
import reactDOM from "react-dom/client"

function Body(){


        async function genrateprofile(){
            
           const [ profile , setdata] = useState([]);

            const response = await fetch("https://api.github.com/user?per_page=10");
            const data = await response.json();
            setdata(data);
        }
        useEffect(()=>{
            genrateprofile();
        },[])

        return(
          <div className="profile">
            
            {
                profile.map((value)=>{

                  return( <div key={value.id} className="cards">
                       <img src={value.avtar_url} />
                       <h2>{value.login}</h2>
                       <a href={value.htmlurl} target="_blank">Profile</a>
                    </div>
                  )
 

                })
            }    
            
          </div>
        )

    
}
export default Body