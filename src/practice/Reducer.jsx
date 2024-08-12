import React, { useReducer } from 'react'

const Reducer = () => {

    const reducer = (state, action) =>{
        switch(action.type){
          case "increment":
             return {...state, count:state.count +1}

            case 'decrement':
                return {...state, count:state.count-1}
        }
    }

    const [state, dispatch] = useReducer(reducer, {count:0})
  return (
    <>
      <span>{state.count}</span>
      <button onClick={()=>dispatch({type:'increment'})}>Increment</button>
      <button onClick={()=>dispatch({type:'increment'})}>Increment</button>
    </>
  )
}

export default Reducer