import React from 'react';
import { useState } from 'react';

const Inputform = () => {
    const[data, setData] = useState({fname:'',lname:''})
        
    const handleChange = (e) =>{
     setData({...data,[e.target.name]:e.target.value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(`Fname: ${data.fname}  And Lname:${data.lname}`)
       }
        return(
        <form>
        <input type="text" name="fname" value={data.fname} onChange={handleChange} placeholder="Enter First Name" /><br/>
        <input type="text" name="lname" value={data.lname} onChange={handleChange} placeholder="Enter Last Name" />
        <button onClick={handleSubmit}>Submit</button>
        </form>
        
        
        )}


export default Inputform