import React, { useState } from 'react';
import { Link, NavLink, Outlet} from 'react-router-dom';

const Post = () => {
   const [user, setUser] = useState([]);

   const getData = async() =>
    {
        const result = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await result.json();
        setUser(data);
    }

    getData();

  return (
    <>
    {user.map((item)=>{
        return(
            <NavLink to={`/postpage/${item.id}`}><li key={item.id}>{item.name}</li></NavLink>
        )
    })}

    
    <Link to='/'><button className='btn btn-primary'>Back to Home</button></Link>

    <Outlet />
    </>
  )
}

export default Post