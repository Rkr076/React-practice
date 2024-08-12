import { DevTool } from '@hookform/devtools';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';


const ReactForm = () => {

  // register contains name, ref, onBlur, onChange
  
  const {register, control, handleSubmit, formState:{errors}} = useForm({
    defaultValues:{
      name:'',
      email:'',

    }
  });

  const dataSubmit = (data) => {
    console.log(data);
  }



  return (
    <>
      <h1>Application Form</h1>
      <form onSubmit={handleSubmit(dataSubmit)} noValidate>
        <label htmlFor="name">Your name </label>
        <input type="text" name='name' {...register('name',{
          required:{
            value:true,
            message:'Name field is required'
          }
        })} /><br /><br/>
        <p style={{color:'red'}}>{errors.name?.message}</p>
        <label htmlFor="email">Your email </label>
        <input type="text" name='email' {...register('email',{
          required:{
           value:true,
           message:'Email field required'
          },
          pattern:{
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message:'Invalid email format'
          },
          validate:{
            notAdmin:(fieldValue)=> {
              return fieldValue !== "admin@example.com"||"Enter a different email address";
            },
            blacklistedDomain:(fieldValue)=>{
              return !fieldValue.endsWith('@bad.com') || "This email domain is not supported"
            }
        }

        })} /><br /><br/>
        <p style={{color:'red'}}>{errors.email?.message}</p>
        <button type='submit'>Submit</button>
      </form>
      <DevTool control={control} />
    </>

  )
}

export default ReactForm