import React from 'react'
import ItemSkills from './ItemSkills.jsx'

const SkillsVista = () => {
  return (
  
      
    <div className='container mx-auto px-5 md:px-0 h-full  '>

    <div className='grid grid-cols-4 grid-rows-5 lg:grid-rows-4 h-full '>

        <div className='content_title grid place-items-center   lg:col-span-2 lg:row-span-3 lg:order-2 col-span-4	'>
            <span className='text_shadow text-9xl'>SKILLS</span>
            <h1 className='text_title  text-3xl font-bold uppercase'>SKILLS</h1>
        </div>

        <div className=' lg:order-1  lg:col-span-1 lg:row-span-3 row-span-2 col-span-4 py-3 '>

            <div className='bg-blue-800 text-white w-fit p-2 px-5'  style={{borderRadius: "10px 10px 0 0 "}}>
                <h2>BackEnd</h2>
            </div>
            <div className=' p-4 bg-green-500 flex flex-wrap gap-5 justify-center' style={{borderRadius: "0 20px 20px 20px"}} >
                <ItemSkills/>
                <ItemSkills/>
                <ItemSkills/>
                <ItemSkills/>
                <ItemSkills/>
                <ItemSkills/>
                <ItemSkills/>             
            </div>

        </div>

        
        <div className=' lg:order-3 lg:col-span-1 lg:row-span-3 col-span-4'>

            <div className='bg-blue-800 text-white w-fit p-2 px-5'  style={{borderRadius: "10px 10px 0 0 "}}>
                <h2>FrontEnd</h2>
            </div>
            <div className=' p-4 bg-green-500 flex flex-wrap gap-5 justify-center' style={{borderRadius: "0 20px 20px 20px"}} >
                <ItemSkills/>
                <ItemSkills/>
                <ItemSkills/>
                <ItemSkills/>
            </div>

        </div>

        
        <div className=' lg:order-4 lg:col-span-full  lg:col-span-4 col-span-4'>

            <div className='bg-blue-800 text-white w-fit p-2 px-5'  style={{borderRadius: "10px 10px 0 0 "}}>
                <h2>Otros</h2>
            </div>
            <div className=' p-4 bg-green-500 flex flex-wrap gap-5 justify-center' style={{borderRadius: "0 20px 20px 20px"}} >
                <ItemSkills/>
                <ItemSkills/>
                <ItemSkills/>
                
        
               
            </div>

        </div>
    </div>
    
  
    
</div>
  )
}

export default SkillsVista