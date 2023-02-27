import React from 'react';
import "./Header.css";

function HeaderWidget () {
  return (
    <div className='header'>
        <text className='name-header'>
        Felipe Bellini
        </text>
        <div style={{width: '20%'}}></div>
   <div>
    <button className='button-header'>
        Sobre mim
      </button>
      <button className='button-header'>
        Ocupações
      </button>
      <button className='button-header'>
        Portfolio
      </button>
      <button className='button-header-blue'>
        Contate-me
      </button>
    </div>
    </div>
  );
}

export default HeaderWidget;