import React, { useEffect, useState } from 'react'

const Card = (props) => {

  const [count,setCount]=useState(0)


useEffect(()=>{
  console.log('mount');
},[])

useEffect(()=>{
  return()=>{
    console.log('unmount')
  }
},[])

useEffect(()=>{

  console.log(count);

},[count])
  return (
    <div className='bg-black text-white'>
      <span>{props.id}</span>
        {/* <img src={props.src} alt="" width="300px" /> */}
        <button onClick={function (){setCount(count+1)}}>+</button>
        {count}
      <h1>{props.name}</h1>
      <p>{props.age}</p>
    </div>
    
  )
}

export default Card
