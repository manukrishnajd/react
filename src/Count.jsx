import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, update } from './counterSlice'

const Count = () => {

let count=useSelector((state=>state.counter.value))
let data=useSelector((state=>state.counter.data))

let person=[{
    name:'abc',
    age:34,
},
{
    name:'jhgjhg',
    age:44,
},
{
    name:'jhgjhg',
    age:44,
},
]

let dispatch=useDispatch()
  return (
    <div>
    
{data.map((item,index)=>(

    <>
    <h2>{index}</h2>
    <h2>{item.name}</h2>
    
    <h2>{item.age}</h2>
    </>
   
    
))}

        <h2>{count}</h2>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(update(person))}
        >
          update
        </button>
      
    </div>
  )
}

export default Count
