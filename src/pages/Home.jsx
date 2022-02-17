import React from 'react'
import HeroSlider from '../component/HeroSlider'
import Helmet from '../component/Helmet'
import Section from '../component/Section'

import heroSliderData from "../assets/fake-data/hero-slider"

const Home = () => {
  return (
    <Helmet title="Trang chủ">
    <HeroSlider data={heroSliderData} />
    <Section />
    </Helmet>
  )
}

export default Home