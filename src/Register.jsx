import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { update } from './counterSlice'

const Register = () => {

  const value=useSelector((state)=>state.counter.data)
  const dispatch = useDispatch()

const [data,setdata]=useState()
const [logindata,setlogindata]=useState()
const [data1,setdata1]=useState()
const [verify,setverify]=useState(null)

console.log(value,'kjhg');

const handlechange=(event)=>{
setdata({...data,[event.target.name]:event.target.value})
console.log(data);

}

const loginchange=(e)=>{
setlogindata({...logindata,[e.target.name]:e.target.value})
}


const add=(data)=>{
  console.log('running');
  
}

const navigate=useNavigate()
const handlesubmit=(event)=>{
    event.preventDefault()
    dispatch(update(data))
    console.log(data,'form data');
   

}

const login=(event)=>{
  event.preventDefault()
  if(data1.username==logindata.username && data1.password==logindata.password){
    console.log('success');
    setverify(true)
  }
  else{
    console.log('failed');
    setverify(false)
  }
}

const deleted=()=>{
setdata1({})
}

  return (
    <div>
        <form onSubmit={handlesubmit}>
      <input type="text" name="username" placeholder='username' value={data?.username || ''} onChange={handlechange} id="" />
      <input type="password" name='password' placeholder='password' value={data?.password || ''} onChange={handlechange} id="" />
      <input type="text" name='full_name' placeholder='fullname' value={data?.full_name || ''} onChange={handlechange} id="" />
      <input type="submit" name="" id="" />
        </form>
<button onClick={deleted}>delete</button>
<button onClick={() => dispatch(update(data1))}>kbkhds</button>

<h2>{value?.username}</h2>
{
    data1 ?
      <>
            <h1>username : {data1.username}</h1>
            <h1>password: {data1.password}</h1>
            <h1>fullname: {data1.full_name}</h1>
            <form onSubmit={login}>
      <input type="text" name="username" placeholder='username' value={logindata?.username || ''} onChange={loginchange} id="" />
      <input type="password" name='password' placeholder='password' value={logindata?.password || ''} onChange={loginchange} id="" />
      <input type="submit" name="" id="" />
        </form>
      </>
      :
      <h3>no data avalable</h3>
}
    
  {verify &&
  
  <h2>login succesful</h2>

   
  }

  { verify==false &&
  <h2>invalid username or password</h2>
  }
      
    </div>
  )
}

export default Register
