import React from 'react'

const Cuadro = ({width,height,background, background2, transform, transform2}) => {
    return (
        <div style={{width, height, background, transform:transform, position: 'absolute', zIndex: '-10'}}  >
            <div style={{width, height, background : background2,transform:transform2 , position: 'absolute'}} >
            
            </div>
        </div>
    )
}

export default Cuadro
