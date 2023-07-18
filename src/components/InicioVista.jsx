import React from 'react'
import Cuadro from './Cuadro'

const InicioVista = () => {
    return (
       
           


     
        <div className='contentInicio container mx-auto px-5 lg:px-0' >

      
           

            <div className='contentData flex flex-col-reverse lg:flex-row-reverse items-center justify-between  lg:w-4/5 xl:w-3/5 w-full gap-5 '>

                <div className='flex justify-center flex-col items-start mt-7 lg:mt-0' >
                  
                    <p className='textPerfil title_principal lg:text-7xl text-6xl'  >Jhon Apaza</p>
                    <p className='textPerfil text-center lg:text-3xl text-3xl mt-2 ' >Un Desarrollador Web </p>
                </div>

                <div className='  '>
                    <img  className='imgPerfil w-[200px] h-[200px] lg:w-[300px] lg:h-[300px]'src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80" alt="fotoPerfil" srcset=""  style={{objectFit: 'cover'}} />
                </div>
            </div>
        </div>
       
    )
}

export default InicioVista
