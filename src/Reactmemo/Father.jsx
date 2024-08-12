import React, {useState} from 'react';
import Child from './Child';

const Father = () => {
    const[textShow, setTextShow] = useState(false);

    const toggleText = () =>
    {
        setTextShow((prev)=>!prev)
    }

    console.log('Father component running');
  return (
    <>

    <Child isShown={false} />
    {textShow && <p>Hello Father</p>}
    <button onClick={toggleText}>Toggle</button>
    </>
  )
}

export default Father;


