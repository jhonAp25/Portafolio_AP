import React from 'react'
import Cuadro from '../components/Cuadro'

import AboutVista from '../components/AboutVista'

const AboutMe = () => {



    return (
        <div className='h-full' >
           
            <Cuadro width='20vw' height='30vh' background2='#051224' transform='matrix(0.98,-0.17,0.17,0.98,-30,-230)'  background= '#434D5A' transform2='matrix(1.00,0.00,0.00,1.00,-10,-10)' /> 
            <Cuadro width='20vw' height='30vh' background2='#051224' transform='matrix(0.98,-0.17,0.17,0.98,1700,530)'  background= '#434D5A' transform2='matrix(1.00,0.00,0.00,1.00,10,-10)' /> 
            <Cuadro width='30vw' height='70vh' background2='#2A9D8F' transform='matrix(0.62,0.79,-0.79,0.62,-380,320)'  background= '#94CEC7' transform2='matrix(1.00,0.00,0.00,1.00,-10,10)' /> 
        
                
            <AboutVista/>
           
        </div>
    )
}

export default AboutMe
