import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detailmovie = () => {

    const {id}=useParams()

    const [data,setdata]=useState({})
    useEffect(()=>{
        axios.get(`https://www.omdbapi.com/?i=${id}&apikey=a5ef1268`).then((res)=>{
            console.log(res)
            setdata(res.data)
          })
    },[])
  return (
    <div className='p-3 w-50 bg-black text-white'>
      <p> title: {data.Genre}</p>
       <p> Awards: {data.Awards}</p>
    </div>
  )
}

export default Detailmovie
