import React from 'react'
import BackEnd from '../components/BackEnd'
import Cuadro from '../components/Cuadro'
import SkillsVista from '../components/SkillsVista.jsx'

const Tecnologia = () => {
    return (
        <div className='h-full'>
            
            <Cuadro width='30vw' height='50vh' background2='#2A9D8F' transform='matrix(0.75,-0.66,0.66,0.75,-200,450)'  background= '#94CEC7' transform2='matrix(1.00,0.00,0.00,1.00,-10,-10)' /> 
            <Cuadro width='25vw' height='30vh' background2='#051224' transform='matrix(0.97,-0.22,0.22,0.97,10,-50)'  background= '#434D5A' transform2='matrix(1.00,0.00,0.00,1.00,-10,-10)' />                        
            <Cuadro width='30vw' height='80vh' background2='#2A9D8F' transform='matrix(0.85,0.53,-0.53,0.85 ,1850,-350)'  background= '#94CEC7' transform2='matrix(1.00,0.00,0.00,1.00,10,-10)' />                        
                         
            <SkillsVista/>
            
          
        </div>
    )
}

export default Tecnologia
