import React from 'react'

const Grandchild = (props) => {
    console.log('GrandChild is running');
  return (
    <>
     <p>{props.isShown?'Hello Grandchild':''}</p>
    </>
  )
}

export default Grandchild