import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, update } from './counterSlice'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const value=useSelector((state)=>state.counter.data)
  const dispatch = useDispatch()

let person=[{
  name:'ghj',
  age:33
},
{
  name:'iuyhgb',
  age:44
}]

 let increment=()=>{
  dispatch(increment())
 }
  return (
    <div>
      <div>
        {value?.map((item)=>(
          <>
          <h1>name:{item.name}</h1>
          <h1>age:{item.age}</h1>
          </>
        ))}
        <button
          aria-label="Increment value"
          onClick={increment}
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
    </div>
  )
}