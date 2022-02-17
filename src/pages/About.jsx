import React from 'react'
import img1 from "../assets/images/about/about1.jpg"
import img2 from "../assets/images/about/about2.jpg"
import img3 from "../assets/images/about/about3.jpg"

import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="aboutUs">
        <div className="aboutUs__header">
          <div className="aboutUs__header__img">
               <img src={img1} alt="" />
          </div>
          <Link to="/" className="aboutUs__header__infor">
          <div className="aboutUs__header__infor__img">
            <img src={img2} alt="" />
          </div>
             <div className="aboutUs__header__infor__sub">
               <h5>Subcribe</h5>
               <p>TO MY YOUTUBE CHANNEL</p>
             </div>
          </Link>
        </div>
        <div className="aboutUs__content">
           <div className="aboutUs__content__img">
             <img src={img3} alt="" />
           </div>
           <div className="aboutUs__content__text">
             <h1>I'm GiangTran</h1>
             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga suscipit sint reiciendis accusamus, id repudiandae atque earum ab, quidem modi veritatis ipsam assumenda soluta sapiente fugit praesentium! Commodi excepturi sapiente molestiae delectus omnis ipsa odio fugiat fuga? Mollitia, perspiciatis nulla sapiente sunt placeat minus iste dicta! Autem natus possimus deleniti dolor dolorem deserunt. Aspernatur nesciunt qui provident maxime quasi ducimus ratione maiores amet. Qui ullam ab delectus autem! Vel, accusamus!</p>
           </div>
        </div>
    </div>
  )
}

export default About