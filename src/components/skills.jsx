import { useState } from "react";

function Skills(){

    const [tech,setskills] = useState([])

    function handleskills(){
        console.log(event.target.value,event.target.checked)
        if (event.target.checked){
            setskills(...tech,event.target.value)
        } 
    }


    return(
        <>

        <h1>select our skills</h1>
        <input onChange={handleskills} type="checkbox"  id="rd" value="HTML"/>
        <label htmlFor="rd">HTML</label>
        <br /> <br />

        <input onChange={handleskills} type="checkbox"  id="js" value="javascript"/>
        <label htmlFor="js">Javascript </label>
        <br /> <br />

        <input onChange={handleskills} type="checkbox"  id="cs" value="css"/>
        <label htmlFor="cs">CSS</label>
        <br /> <br />

        <input onChange={handleskills} type="checkbox"  id="rj" value="reactjs"/>
        <label htmlFor="rj">React.js</label>

        <h1>{tech.toString()}</h1>

        </>

    )
}
 
export default Skills;