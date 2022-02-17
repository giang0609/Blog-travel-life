import React from 'react'
import Button from "react-bootstrap/Button";
const MoryItem = (props) => {
  return (
    <div className="mory">
        
     <div className="mory__item">
       <div className="mory__item__video">
       </div>
     <div className="mory__item__image">
       <img src={props.img} alt="" />
     </div>
     <div className="mory__item__content">
       <div className="mory__item__content__type"><Button>{props.type}</Button></div>
     <div className="mory__item__content__description">
       <h1>{props.title}</h1>
       <p>{props.discription}</p>
       </div>
       <div className="mory__item__content__infor">
         <div className="mory__item__content__infor__author">
           <img src={props.img} alt="" />
           <p>by {props.author}</p>
         </div>
         <div className="mory__item__content__infor__views">
            <span className="views">{props.views}</span>
            <span className="comments">{props.comments}</span>
            <span className="day">{props.day}  </span>
         
         </div>

       </div>
     </div>
     </div>
  </div>
  )
}

export default MoryItem