import React, { useRef,useState } from 'react';
import './App.css';
import ForwardRefs from './ForwardRefs';
import Portals from './Portals';
import Refs from './Refs';
import UseRefs from './UseRefs';







function App() {


  const[show, setShow] = useState(false);
  let inputRef = useRef();

  const Submit = () => { 
     const name = inputRef.current.value 
    inputRef.current.style.color="red";
    inputRef.current.style.backgroundColor="black";
    name ===""? alert('plz fill the data') : setShow(true)
  }

  return (
    <>
    <div className='App'>
      <Refs />
      <UseRefs />

      <div>
        <h1>ForwardRefs in React</h1>
        <ForwardRefs ref={inputRef} />
        <button onClick={Submit} >Check ForwardRef</button>
        <p> {show ? `your name is ${inputRef.current.value}`: ""} </p>
      </div>
      <Portals />
      </div>
    </>
  )

}

export default App;
