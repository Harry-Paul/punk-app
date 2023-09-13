import React, { useLayoutEffect, useState } from 'react'
import axios from '../../api/axios'
import {AiOutlineSearch} from "react-icons/ai"
import { useNavigate } from 'react-router-dom'

const Root = () => {

  const navigate=useNavigate()
  const[props,setProps]=useState([])
  const[beername,setBeername]=useState()

  useLayoutEffect(()=>{
    axios.get("/beers")
    .then(result=>{
      console.log(result)
      setProps(result.data)
    })
      
  },[])

  const product=(prop)=>{
    return ()=>{
      navigate("/product",{state:{prop:prop}})
    }
  }

  const search=()=>{
    const url="/beers?beer_name="+beername
    axios.get(url)
    .then(result=>{
      if(result.data.length===1){
        navigate("/product",{state:{prop:result.data[0]}})
      }
      else{
        navigate("/products",{state:{props:result.data,search:beername}})
      }
    })
  }

  return (
    <div>
      <div className='mx-auto w-[450px] mt-10 flex flex-wrap' >
        <input className='mx-auto w-[400px] text-4xl border-4' type="text" onChange={(e) => {setBeername(e.target.value)}} placeholder='Search'/>
        <div className='h-[50px] w-[50px] bg-slate-300 hover:bg-slate-400 cursor-pointer' onClick={search}>< AiOutlineSearch size="50px"/></div>
      </div>
      <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-20 mx-auto px-5 '>
        {props.map((prop)=>
        <div onClick={product(prop)} className='h-[510px] shadow-xl rounded-xl hover:scale-105 cursor-pointer'>
          <img className='h-80 mx-auto' src={prop.image_url}></img>
          <div className='font-serif mx-auto text-center  mt-5'>
            <h2 className='text-2xl font-semibold'>{prop.name}</h2>
            <p>{prop.volume.value} Litres</p>
            <p>{prop.abv}% Alcohol</p>
            <p>First Brewed: {prop.first_brewed}</p>
          </div>
          </div>
        )}
      </div>
    </div>

  )
}

export default Root