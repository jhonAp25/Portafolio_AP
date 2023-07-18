import React from 'react'
import Header from '../components/Header'
import '../assets/css/header.css'
import InicioVista from '../components/InicioVista'
import TituloPage from '../components/TituloPage'
import Cuadro from '../components/Cuadro'

const Inicio = () => {
    return (
        <div className=''>
            
            <Cuadro width='30vw' height='80vh' background2='#2A9D8F' transform='matrix(0.75,-0.66,0.66,0.75,-150,-550)'  background= '#94CEC7' transform2='matrix(1.00,0.00,0.00,1.00,-10,-10)' /> 
            <Cuadro width='25vw' height='30vh' background2='#051224' transform='matrix(0.97,-0.22,0.22,0.97,1500,-150)'  background= '#434D5A' transform2='matrix(1.00,0.00,0.00,1.00,-10,-10)' />                        
            <Cuadro width='30vw' height='130vh' background2='#2A9D8F' transform='matrix(0.85,0.53,-0.53,0.85 ,1550,250)'  background= '#94CEC7' transform2='matrix(1.00,0.00,0.00,1.00,10,-10)' />                        
                         
        
            <InicioVista/>
          
        </div>
    )
}

export default Inicio
