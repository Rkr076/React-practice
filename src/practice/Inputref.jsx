import React, {useEffect, useRef, useState } from 'react'

const Inputref = () => {

  const[num, setNum] = useState(0);
    const inputRef = useRef(0);

    useEffect(()=>{
      console.log("Component Rerendered");
      
    })
  
    const Increment = () =>{
      
      setNum(num + 1);
      inputRef.current++;
    }
  

  return (
    <>
       <input type='text'  placeholder='Enter Name'  />
       <button onClick={Increment}>Increment</button>
        <p>Number: {num}</p>
        <p>Ref: {inputRef.current}</p>
    </>
  )
}

export default Inputref;