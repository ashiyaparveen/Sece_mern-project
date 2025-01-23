import { useEffect, useRef, useState } from "react"
const UseRef= ()=>{
    var[ text,setText] =useState("ash");
    var prevRender = useRef();
    useEffect(()=>{
        console.log({text})
        prevRender.current=text
    },[text])
return (
    <div>
    <h2>This is UseRef HOOKS</h2>
    <input 
    type="text" 
    value={text} 
    onChange={(e)=>setText(e.target.value)}>
    </input>
    <h3> The text is {text} </h3>
    <h3>the previous render text is  { prevRender.current}</h3>
    </div>
)


}
export default UseRef;