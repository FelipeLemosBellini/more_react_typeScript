import React from 'react'
import './Card.css';

const Card = (props) => {
  const { titulo, texto, urlImage } = props;

  return (
    <div 
    className='card'>

      <img src={urlImage} className='image'/>
      <h3 className='title'>{titulo}</h3>
      <p className='texto'>{texto}</p>
    </div>
  );
}

export default Card