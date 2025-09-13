
import { useState } from 'react';
import './animation.css';



export function AnimationFunction()
{
   const [getanimationStyle,setanimationStyle] = useState({});

   function handleMouseUp(e){
          setanimationStyle({});
   }
   function handleMouseDown(e){
        
         setanimationStyle({animationName:'spin',animationDuration:'1s',animationTimingFunction:'linear',animationIterationCount:'infinite'});
   }
   return <div className='d-flex  justify-content-center align-items-center'  style={{height:'100vh'}}>
      <img src="react.svg" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} style={getanimationStyle} alt="" height="100" width="100" />
   </div>
}