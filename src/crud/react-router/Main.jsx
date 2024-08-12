import React from 'react';
import Home from './Home';
import Post from './Post';
import PostPage from './PostPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home/>,
    errorElement:"404 not Found"
  }
  ,
  {
    path:'/post',
    element: <Post/>
  },
  {
    path:'/postpage/:postId',
    element: <PostPage/>
  }

]); 

const Main = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default Main;
