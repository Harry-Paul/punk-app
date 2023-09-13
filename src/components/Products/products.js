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
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-10 mx-auto px-5 '>
            {props?.map((prop)=>
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

export default Products