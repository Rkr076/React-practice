import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React from 'react';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const MuiForm = () => {

   const schema = yup.object().shape({
      name: yup.string().required('Name field is required'),
      email: yup.string().email().required(),
      password: yup.string().required().min(5).max(15),
   })

   const { register, control, handleSubmit, formState: { errors } } = useForm({
      resolver: yupResolver(schema)
   });

   const dataSubmit = (data) => {
      console.log(data);
   }

   return (
      <>
         <form onSubmit={handleSubmit(dataSubmit)}>
            <Stack spacing={2}>
               <TextField label="name" type='text' {...register('name')} />
               <p>{errors.name?.message}</p>
               <TextField label="email" type="text" {...register('email')} />
               <p>{errors.email?.message}</p>
               <TextField label="Password" type="password" {...register('password')} />
               <p>{errors.password?.message}</p>
               <Button variant="contained" type="submit" >submit</Button>
            </Stack>
         </form>
         <DevTool control={control} />
      </>
   )
}

export default MuiForm