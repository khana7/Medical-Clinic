import React from 'react'
import image from '../accets/symbat.jpg'
import { useState, useEffect } from "react";
import axios from 'axios'

const Card = ({spesialist, name}) => {
  const [redirect, setRedirect] = useState(false);
  const handleClick = () => {
    setRedirect(true);
  };
  if (redirect) {
    window.location.href = "/CardInfo";
  }

  // http://192.168.0.219:8000/api/users/ 

  


  return (
    <div className='card'>
        <div className='card__img'>
            <img src={image}/>
        </div>
        <div className='card__info'>
            <p className='card__name'>{name} </p>
            <p className='card__special'>{spesialist}</p>
            <p className='card__price'>3000 р.</p>

            <button className="card__btn"onClick={handleClick}>Обратиться онлайн</button>
        </div>
    </div>
  )
}

export default Card