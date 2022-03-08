import React from 'react'
import Cuadro from './Cuadro'

const InicioVista = () => {
    return (
        <>
           


     
        <div className='contentInicio'>

      
           

            <div className='contentData'>
                <div style={{width: '70%',display: 'flex', justifyContent: 'center',flexDirection: 'column', alignItems: 'center',marginTop: 50}}>
                  
                    <p className='textPerfil'  >Soy Jhon Apaza</p>
                    <p className='textPerfil' style={{color : '#2A9D8F'}}>Un Desarrollador Web </p>
                </div>
                <div className='contentImg'>
                    <img  src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80" alt="fotoPerfil" srcset="" className='imgPerfil' width='250px' height='250px' style={{objectFit: 'cover'}} />
                </div>
            </div>
        </div>
        </>
    )
}

export default InicioVista
