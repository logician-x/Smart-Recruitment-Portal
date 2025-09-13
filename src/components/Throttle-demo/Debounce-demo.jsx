import { useState } from "react"

export function DebounceDemo()
{
    const[sec,setSec] = useState(0);
    const[min,setMin] = useState(0);
    const[hour,setHour] = useState(0);
    const[ms,setms] = useState(0);
    let s=0,m=0,h=0;
    function handleStartClick(){
        
    }
    return (
        <div className="container-fluid bg-dark d-flex flex-column justify-content-center align-items-center" style={{height:'100vh'}}>
            <h2 className="text-light">Timer App</h2>
           <div className="">
                 <div className="border rounded border-light text-light text-center p-4 fs-1" style={{height:'120px',width:'500px'}}>
                    <span className="me-1">{hour}:</span>
                    <span className="me-1">{min}:</span>
                    <span className="me-1">{sec}:</span>
                    <span className="me-1">{ms}</span>
                </div>
           </div>
           <div className="mt-2">
            <button onClick={handleStartClick} className="btn btn-success">Start Timer</button>
            <button className="btn btn-warning mx-2">Pause Timer</button>
            <button className="btn btn-danger">Stop Timer</button>
           </div>
        </div>
    )
}