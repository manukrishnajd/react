import React from 'react'
import Navigation from './Navigation'
import { useSelector } from 'react-redux'



const Login = () => {

  let data=useSelector((state=>state.counter.data))

  console.log(data,'hgjg');

  
  return (
    <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>

  {data?.map((item,index)=>(
    <>
    <h2>{item.name}</h2>
    <h2>{item.age}</h2>
    </>
  ))}
</form>
  )
}

export default Login
