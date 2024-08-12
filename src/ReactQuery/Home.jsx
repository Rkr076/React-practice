import { useMutation, useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { fetchApi } from './api';
import { postApi } from './api';


const Home = () => {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const { data, isLoading, isError } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchApi
  })


  const { mutate, isPending, reset } = useMutation({
    mutationFn: postApi
  })

  if (isError) {
    return <div>Something went wrong....</div>
  }

  if (isPending) {
    return <div>Pending....</div>
  }

  if (isLoading) {
    return <div>Loading....</div>
  }

  const submitData = () =>{
    mutate({title,body})
  }

  return (
    <>

        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <input
          type="text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Body"
        />
        <button onClick={submitData}>Submit</button>
        <br/>
        <br/>
      {data.map((item) => {
        return (
          <li key={item.id}>{item.title}</li>
        )
      })}
    </>
  )
}

export default Home
