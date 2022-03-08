import React from 'react'
import { FaJava } from "react-icons/fa"
import { SiSpring, SiJavascript } from "react-icons/si"
const BackEnd = () => {
    return (
        <div className='contentBack'>
            <div className='titleBack' >
                <h3>BackEnd</h3>
            </div>
            <div className='skillBack'  >
                <div className='java' style={{display: 'flex' , alignItems : 'center', padding: 15}}>
                    <FaJava size={30} style={{margin: 5}} />
                    <div style={{width: '100%', height: 10, backgroundColor: '#E0E0E0' , borderRadius: '10px'}} >
                        <div  style={{width: '50%', height: 10, backgroundColor: '#2A9D8F',borderRadius: '10px'}}></div> </div>
                </div>

                <div className='java' style={{display: 'flex' , alignItems : 'center', padding: 15}}>
                    <SiSpring size={30} style={{margin: 5}} />
                    <div style={{width: '100%', height: 10, backgroundColor: '#E0E0E0' , borderRadius: '10px'}} >
                        <div  style={{width: '40%', height: 10, backgroundColor: '#2A9D8F',borderRadius: '10px'}}></div> </div>
                </div>

                <div className='java' style={{display: 'flex' , alignItems : 'center', padding: 15}}>
                    <SiJavascript size={30} style={{margin: 5}} />
                    <div style={{width: '100%', height: 10, backgroundColor: '#E0E0E0' , borderRadius: '10px'}} >
                        <div  style={{width: '80%', height: 10, backgroundColor: '#2A9D8F',borderRadius: '10px'}}></div> </div>
                </div>
            
            </div>
        </div>
    )
}

export default BackEnd
