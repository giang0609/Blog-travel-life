import React from 'react'
import Card from './Card'
import dataCard from "../assets/fake-data/data-card"
import img from "../assets/images/about.jpg"
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom"
const Section = (props) => {
    console.log(img)
  return (<>
    <div className="section">
          <div className="section__title">last article</div>
          <div className="section__card">
          <Card  data={dataCard}/>
          </div>
    </div>
    <div className="about">
        <div className="about__image">
            <img src={img} alt="" />
        </div>
        <div className="about__content">
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis velit, deleniti quis eum, quia officiis harum dicta, corrupti enim hic cumque quidem totam illo voluptas! Soluta officia corrupti aperiam distinctio!</p>
            <Link to="/about"> <Button>see more</Button></Link>
        </div>
    </div>
    </>
  )
}
export default Section