import { useRef, useState } from "react"


export function TimerFunction(){


    const[second,setSec] = useState(0);
    const[minute,setMin] = useState(0);
    const[hour,setHour] = useState(0);
    const[milliSec,setMilliSec] = useState(0);
    let timer = useRef(null);

    var sec = 0;
    var min = 0;
    var hr = 0;
    var ms  = 0;
    function handleStartTimer(){
        ms++;
        setMilliSec(ms);
        if(ms>999){
            sec++;
            setSec(sec);
            ms=0;
        }
        if(sec>2){
            min++;
            setMin(min);
            sec=0;
        }
        if(min>2){
            hr++;
            setHour(hr);
            min=0;
        }
    }
    function handleStartClick(){
        timer.current =  setInterval(handleStartTimer,1);
    }
    function handleCancelClick(){
       clearInterval(timer.current);
       setHour(0);
       setMin(0);
       setMilliSec(0);
       setSec(0);
    }


       return <div className="container-fluid">
            <div>
                <div className="mt-4 d-flex justify-content-center">
                <div className="row w-50 text-center">
                    <div className="col border rounded p-2">
                        <span>{hour} hour</span>
                    </div>
                    <div className="col border rounded p-2">
                        <span>{minute} min</span>
                    </div>
                    <div className="col border rounded p-2">
                        <span>{second} sec</span>
                    </div>
                    <div className="col border rounded p-2">
                        <span>{milliSec} ms</span>
                    </div>
                </div>
            </div>
             <div className="d-flex justify-content-center mt-4">
                    <button onClick={handleStartClick} className="btn btn-primary  me-2">Start</button>
                    <button onClick={handleCancelClick} className="btn btn-danger">Cancel</button>
                </div>
            </div>
        </div>

}