import { Button } from 'bootstrap';
import React, { useEffect } from 'react';
import { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'


const API_URL = 'http://localhost:3500/items';

const Fetchapi = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const controller = new AbortController();
  const signal = controller.signal;

  useEffect(() => {
    let response = async () => {
      setLoading(true)
      try {
        let data = await fetch(API_URL,{signal});
        let res = await data.json();
        setData(res);
      } catch(e) {
        setError(e.message)
      } finally {
        setLoading(false);
      }
    }
      response();
  }, [])

  if (error) {
    return <span>Something went wrong....</span>
  }

  return (
    <>

     {loading && <div>Loading....</div>}
      {!loading && (<ul>
        {data.map((d) => {
          return (
            <li style={{border:'1px solid black',backgroundColor:'grey', color:'white',marginBottom:'5px', padding:'5px'}} key={d.id}>{d.item || <Skeleton count={10} /> }</li>
          )
        })}
      </ul>)}
      
    </>

  )
}

export default Fetchapi;
