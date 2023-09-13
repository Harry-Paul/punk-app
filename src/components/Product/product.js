import React, { useLayoutEffect, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Product = () => {

  const location=useLocation()
  console.log(location)
  const[prop,setProp]=useState()

  useEffect(()=>{
    setProp(location.state.prop)
  },[])

  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-5 mt-10 mx-auto' >
      <div className='col-span-1 px-[80px] '>
      <img className="lg:h-[680px] md:h-[450px] h-[300px] mx-auto" src={prop?.image_url}></img>
      </div>
      <div className='col-span-2 mx-auto font-serif px-10'>
        <h2 className='lg:text-8xl md:text-6xl text-2xl font-semibold '>{prop?.name}</h2><br></br>
        <p className='lg:text-2xl lg:mt-5 md:text-2xl text-xl'>{prop?.description}</p><br></br>
        <p className='lg:text-xl text-lg'>
          <v className="font-semibold">First Brewed:</v> {prop?.first_brewed}&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <v className="font-semibold">Volume:</v> {prop?.volume.value}{prop?.volume.unit}&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <v className="font-semibold">Alcohol %:</v> {prop?.abv}&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  
          <v className="font-semibold">Boil volume:</v> {prop?.boil_volume.value} {prop?.boil_volume.unit}
        </p><br></br>
        <ul className='lg:text-2xl text-xl font-semibold '>Food Pairing</ul>{prop?.food_pairing.map((foodP)=>
          <li className='text-xl'>{foodP}</li>
        )}<br></br>
        <p className='lg:text-xl text-lg'><v className="font-semibold ">Brewers Tips:</v> {prop?.brewers_tips}</p>
      </div>
    </div>
  )
}

export default Product