import React from 'react'
import Carousel from './Carousel'


const HeroSlider = (props) => {
    const data = props.data
   console.log(data)
  return (
  <div className="heroSlider">
  <Carousel data={data} />
 
  </div>
  )
}







export default HeroSlider