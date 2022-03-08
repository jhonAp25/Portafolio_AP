import React, { useEffect } from 'react'
import  {LogoAP}  from '../assets/svg/IconoSvg'
import { AiOutlineFacebook , AiFillGithub, AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";

const Header = ({titleNav, onFullPageApi}) => {
  
    return (
        <div className='contentHeader' >
           <div className='logo' >
                <LogoAP/>
            </div>

           
            <ul className='navLink' >
                <li className={`text ${titleNav===0 ? 'activeNav': null} `} onClick={()=>onFullPageApi.moveTo(1)} > Inicio </li> 
                <li className={`text ${titleNav===1 ? 'activeNav':null} `} onClick={()=>onFullPageApi.moveTo(2)} > Sobre Mi </li> 
                <li className={`text ${titleNav===2 ? 'activeNav': null} `} onClick={()=>onFullPageApi.moveTo(3)} > Tecnologias </li> 
                <li className={`text ${titleNav===3 ? 'activeNav':null} `} onClick={()=>onFullPageApi.moveTo(4)} > Proyectos </li> 
            </ul>

          {/*  <div className='redesSociales' >
                <AiOutlineFacebook className='iconoFb'  />
                <AiFillGithub className='iconoGit'   />
                <AiFillLinkedin className='iconoLink'  />
                <AiOutlineInstagram  className='iconoInst'/>
    </div>*/}
        </div>
    )
}

export default Header
