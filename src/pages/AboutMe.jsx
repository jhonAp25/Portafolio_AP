import React from 'react'
import Cuadro from '../components/Cuadro'
import imgUser1 from '../assets/img/user.png'

const AboutMe = () => {
    return (
        <div>
           
            <Cuadro width='50vw' height='30vh' background2='#051224' transform='matrix(0.98,-0.17,0.17,0.98,10,-330)'  background= '#434D5A' transform2='matrix(1.00,0.00,0.00,1.00,-10,-10)' /> 

            <div className='contentInfoMe' >
                <div  className='img_for_me'>
                    <div className='card_img'>
                        <img src={imgUser1} alt="" />
                    </div>

                </div>

                <div className='info_for_me'>

                    <div className='card_info'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ullam doloribus eveniet aliquam! Exercitationem, amet provident consequuntur reprehenderit ipsam sit facere, natus cupiditate suscipit dicta minima, quidem ullam voluptatibus culpa?
                        </p>
                    </div>
        
                </div>
            </div>
                

           
        </div>
    )
}

export default AboutMe
