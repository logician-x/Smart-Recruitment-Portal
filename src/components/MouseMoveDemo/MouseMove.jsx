import { useState } from "react";

export function MouseMoveFunction(){

    const[getFlagStyle,setFlagStyle] = useState({position:null,top:null,left:null});

    function handleMouseMove(e){

        const position = "fixed";
        const top = e.clientY+"px";
        const left = e.clientX+"px";

        setFlagStyle({position:position,top:top,left:left});

    }

    return <div className="container-fluid">
        <div className="border border-2" onMouseMove={handleMouseMove} style={{height:'1000px'}}>
        </div>
        <div>
            <img src="flag.gif" style={getFlagStyle} alt="" height="100" width="100"/>
        </div>
    </div>


}