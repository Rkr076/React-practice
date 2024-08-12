import React from 'react'
import Grandchild from './Grandchild';

const Child = (props) => {

    console.log('Child component');
  return (
    <>
    <Grandchild isShown={props.isShown} />
    </>
  )
}

export default React.memo(Child);