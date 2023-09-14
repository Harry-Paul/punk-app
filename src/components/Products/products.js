import React, { useEffect, useState } from 'react'
import { useLocation,useNavigate } from 'react-router-dom'

const Products = () => {
    
    const location=useLocation()
    console.log(location)
    const navigate=useNavigate()
    const[props,setProps]=useState()
    const[search,setSearch]=useState()

    const product=(prop)=>{
        return ()=>{
          navigate("/product",{state:{prop:prop}})
        }
      }

    useEffect(()=>{
        setProps(location.state.props)
        setSearch(location.state.search)
    })

    return (
        <div>
        <h2 className='px-10 mt-10 text-2xl font-semibold'>Search Results for "{search}"</h2>
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-20 mx-auto px-5 '>
        {props?.map((prop)=>
        <div onClick={product(prop)} className='md:h-[510px] h-[400px] shadow-xl rounded-xl hover:scale-105 cursor-pointer'>
          <img className='md:h-[320px] h-[250px] mx-auto' src={prop.image_url}></img>
          <div className='font-serif mx-auto text-center mt-5'>
            <h2 className='md:text-2xl text-xl font-semibold'>{prop.name}</h2>
            <p className='md:text-base text-sm'>{prop.volume.value} Litres</p>
            <p className='md:text-base text-sm '>{prop.abv}% Alcohol</p>
            <p className='md:text-base tex-sm'>First Brewed: {prop.first_brewed}</p>
          </div>
          </div>
        )}
      </div>
        </div>
    )
}

export default Products