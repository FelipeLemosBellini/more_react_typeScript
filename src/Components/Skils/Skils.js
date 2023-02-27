import React from 'react'
import Card from '../Card/Card';
import './Skils.css';

const Skils = () => {
    return (

        <div className='container'>
            <div className='title'>
                <h1>
                    Habilidades
                </h1>
            </div>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'row',
            }}>
                <div>
                    <Card
                        titulo='Desenvolvedor Mobile'
                        texto='Principal Flutter'
                        urlImage='./assets/images/mobile_dev.png'
                    />
                </div>
                <div style={{width: '10%'}}></div>
                <div>
                    <Card
                        titulo='Desenvolvedor Web'
                        texto='Secundário React'
                        urlImage='./assets/images/front_end_dev.png'
                    />
                </div>

            </div>

        </div>
    )
}

export default Skils