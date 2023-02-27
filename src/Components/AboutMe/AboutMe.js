import React from 'react'
import './AboutMe.css';

const AboutMe = () => {
    const style = {
        paddingRight: '10%',
        paddingLeft: '10%',
        alignContent: 'end',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
    }

    return (
        <div style={style}>
            <div className='text'>
                
                <h1 style={{
                    fontFamily: 'Verdana, Geneva, Tahoma, sans-serif'
                }}>
                    Olá!
                    <br/>
                    Eu sou Felipe Bellini.
                    <br />
                    Um desenvolvedor mobile Front-End
                </h1>
                <p>
                    Sou um desenvolvedor Flutter júnior na Krykto, 
                    <br/>
                    uma rede social para investidores de crypto moeda.
                    <br/>
                    Gosto muito do setor financeiro e vinho.
                </p>
            </div>
            <div style={{width:'10%'}}></div>
            <div>
                <img src='./assets/images/people.png' alt='people' />
            </div>
        </div>
    )
}

export default AboutMe