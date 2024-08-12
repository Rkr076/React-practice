import React, { useState } from 'react'

const FormZod = () => {
    const [email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[error, setError] = useState({email:'',password:''});

    

    const handleSubmit = (e) =>{
      e.preventDefault();

      setError({email:'', password:''})

      if(!email.includes('@')){
        setError({...error, email:'Email must include @'});
        
      }

      if(password.length < 5){
        setError({...error, password:'Password must be greater than 8 digit'});
        
      }

      console.log('Form submitted');

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
               <input type='text' name='email' value={email} placeholder='Enter email' onChange={(e)=>setEmail(e.target.value)}/><br/><br/>
               {error && <p>{error.email}</p>}
               <input type='text' name='password' value={password} placeholder='Enter password' onChange={(e)=>setPassword(e.target.value)} /><br/><br/>
               {error && <p>{error.password}</p>}
               <button type='submit'>Submit</button>
            </form>
        </>

    )
}

export default FormZod;