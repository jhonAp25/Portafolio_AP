import React from 'react'
import imgUser1 from '../assets/img/user.png'
const AboutVista = () => {
  return (
     
    <div className='container mx-auto px-5 md:px-0'>

    <div className='content_title'>
        <span className='text_shadow text-9xl'>ABOUT</span>
        <h1 className='text_title  text-3xl font-bold uppercase'>About me</h1>
    </div>
  
    <div className='contentInfoMe relative' >

        <div  className='img_for_me absolute lg:relative'>
            <div className='card_img w-[100px] h-[100px] md:h-[150px] md:w-[150px]  lg:h-[400px] lg:w-auto rounded-full lg:rounded-md'>
                <img  src={imgUser1} alt="" />
            </div>
  
        </div>
  
        <div className='info_for_me p-5  md:p-0'>
  
           
            <div className='card_info '>
                <h1 className='uppercase font-bold text-2xl '>UI/UX Designer & Web Developer</h1>
                <label style={{marginTop : "10px"}}>Nacido en Lima,Peru. Me encanta el desarrollo web actualmente me encuentro trabajando con tecnologias como React js , React Native y Spring Boot.</label>
  
                <div className='info_about grid grid-cols-1 lg:grid-cols-2 gap-1'>
  
                        <div> 
                            <strong>Name: </strong>       
                            <label> Jhon Elvis Apaza Larico</label> 
                        </div>
                        
                        <div>
                            <strong>Grado: </strong>      
                            <label>Junior</label>
                        </div>
  
                        <div>
                            <strong>Celular: </strong>    
                            <label>+51 922 365 956</label>
                        </div>
  
                        <div>
                            <strong>Github: </strong>     
                            <label>JhonAp25</label>
                        </div>
  
                        <div>
                            <strong>Edad: </strong>       
                            <label>23 años</label>
                        </div>
  
                        <div>
                            <strong>Email: </strong>      
                            <label>apazalaricojhon25@gmail.com</label>
                        </div>
  
                        <div>
                            <strong>Linkedin: </strong>   
                            <label>JhonApaza</label>
                        </div>
  
                </div>
            </div>
  
        </div>
    </div>
</div>
  )
}

export default AboutVista