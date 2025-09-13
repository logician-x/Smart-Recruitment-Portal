import { useState } from "react"
import { WeatherData } from "./weather-data";


export function WeatherDemo()
{
    
    const[cityName,setCityName] = useState();
    const[city,setCity] = useState("Hyderabad");

    function handleChange(e){
        setCityName(e.target.value);
    }
    function handleSearchClick(){
        setCity(cityName);
    }

    return (
        <div className="container-fluid bg-dark d-flex justify-content-center align-items-center"  style={{height:'100vh'}}>
            <div className="border border-danger border-2 rounded p-4" style={{height:'400px',width:'500px'}}>
                <h2 className="text-light">Weather App</h2>
                <div>
                    <div className="input-group mt-4">
                        <input onChange={handleChange} type="text"  className="form-control"/>
                        <button onClick={handleSearchClick} className="btn btn-success bi bi-search"></button>
                    </div>
                </div>
                <div>
                    <WeatherData city={city}/>
                </div>
            </div>
        </div>
    )
}