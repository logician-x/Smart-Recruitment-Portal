import { useState } from "react"
import EMI_Demo from "../../components/EMICalculator/EMI_Demo";
import { WeatherDemo } from "../weather-demo/weather";

export function DataDemo(){
    const[layout,setLayout] = useState(null);
    function handleWeatherChange(){
        setLayout(<EMI_Demo/>)
    }
    function handleEmiChange(){
        setLayout(<WeatherDemo/>)
    }
    // function handleLayoutChange(){
    //     if(layout===EMI_Demo){
    //         setLayout(<WeatherDemo/>)
    //     }else{
    //         setLayout(<EMI_Demo/>)
    //     }
    // }
    return (
        <div className="container-fluid">
            <div className="bg-secondary border border-2 p-4">
                <h3>Conditional Routing Example</h3>
                <button onClick={handleEmiChange} className="btn bg-success p-2 me-2 m-25">EMICalculator</button>
                <button onClick={handleWeatherChange} className="btn bg-warning p-2 m-25">Weather App</button>
            </div>
            <div className="border border-2" style={{height:'100vh'}}>
                 {layout}
            </div>
        </div>
    )
}