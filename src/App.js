import Inicio from "./pages/Inicio";

import ReactFullpage from '@fullpage/react-fullpage';
import  React, { useState } from "react";
import Tecnologia from "./pages/Tecnologia";
import AboutMe from "./pages/AboutMe";



const App = () =>{
  const anchors = ["Incio", "AboutMe", "Skils"];

  const [titleNav, setTitleNav]=useState(0)
  const [onFullPageApi, setOnFullPageApi]=useState()

  const scrollOn=(id)=>{
    setTitleNav(id)
    
  }

return(

  
  <div >
   
  <ReactFullpage
      anchors={anchors}
      licenseKey = {'YOUR_KEY_HERE'}
      scrollingSpeed = {1000}
      onLeave={(origin, destination) => {
        scrollOn(destination.index);
       
      }}

      render={({ state, fullpageApi }) => {
        setOnFullPageApi(fullpageApi)
        return (
          <ReactFullpage.Wrapper  >
              <div className="section">
                <Inicio/> 
              </div>
              <div className="section">
                <AboutMe />  
              </div>  

              <div className="section">
                <Tecnologia  titleNav={titleNav} />
              </div>  
              <div className="section">
                <Tecnologia  titleNav={titleNav} />
              </div>  
          </ReactFullpage.Wrapper>
        
        );
      }}
  
    /> 
  </div>
)}

export default App;
