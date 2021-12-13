import React, { useRef } from 'react';
import { useState } from 'react';

const UseRefs = () => {

    const[show, setShow] = useState(false);
    let inputRef = useRef(null);

const Submit = ()=>{
    // inputRef.current.value="100"
    const name = inputRef.current.value 
    inputRef.current.style.color="red";
    inputRef.current.style.backgroundColor="black";
    name ===""? alert('plz fill the data') : setShow(true)
}

    return (
        <>
            <div>
               <h1>UseRefs in React</h1>
               <input type="text" ref={inputRef} />
               <button onClick={Submit} >Check UseRef</button>
               </div> 
               <p> {show ? `your name is ${inputRef.current.value}`: ""} </p>
        </>
    )
}

export default UseRefs;
