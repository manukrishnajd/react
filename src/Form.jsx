import React, { useState } from 'react'

const Form = () => {

    const [username,setusername]=useState()
    const [password,setpassword]=useState()

    const handlechangeuser=(e)=>{
        setusername(e.target.value)
        console.log(username);
    }
    const handlechanpassword=(e)=>{
        setpassword(e.target.value)
        console.log(password);
    }
  return (
    <div>
      <input type="text" name="" onChange={handlechangeuser} id="" />
      <input type="text" name="" onChange={handlechanpassword} id="" />
    </div>
  )
}

export default Form
