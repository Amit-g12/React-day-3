import React from 'react'
import { useReducer } from 'react';

const initialState = 0;
const reducer = (state,action) => {
    switch(action){
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return initialState
        default:
            return state

    }

}

const UseReducer = () => {
    const[count,dispatch] = useReducer(reducer,initialState)
  return (
    <div>
        <h3>Question4:What is UseReducer Hook ?(Implementation)?</h3>
        <p className='que1'>UseReducer is an alternative to useState as it is also used for state management.As,useReducer are more predictable state transition & also easy to handle complex logic state.</p>
        <h5>Implementaion</h5>
        <h1>Count:{count}</h1>
        <button onClick={() => dispatch('increment')}>Increment</button>
        <button onClick={() => dispatch('decrement')}>Decrement</button>
        <button onClick={() => dispatch('reset')}>Reset</button>
    </div>
  )
}

export default UseReducer;