import React from 'react';
import './App.css';
function HeaderWidget () {

  const estilo = {
    backgroundColor: 'white',
  };

  const estiloButton={
    margin:'16px',
    backgroundColor: 'blue',

  };

  return (
    <div className='header'>
      
        <text className='name-header'>
        Felipe Bellini
        </text>
    
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