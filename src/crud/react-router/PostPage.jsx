import React from 'react';
import { Link, useParams } from 'react-router-dom';

const PostPage = () => {

  const params = useParams();
  return (
    <>
     <p>PostPage{params.postId}</p> 
      <Link to='/'><button className='btn btn-primary'>Back to Home</button></Link>
    </>
    
  )
}

export default PostPage
