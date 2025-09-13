import { useEffect, useState } from "react"
import axios from "axios";

export function WeatherData(props){

    const[data,setData] = useState({weather:[{id:'',main:'',description:'',icon:''}],main:{temp:''},name:''});
    useEffect(()=>{

        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=304abd13f8c131e8e7e9943c2100026e&units=metric`)
        .then(response=>{
            setData(response.data);
        })
    },[props.city])
    return (    
        <div className="mt-4 text-light">
            <span className="text-warning me-2 fs-3">{data.name}</span>
            <span className="text-primary fw-bold">{data.main.temp} &deg; C</span>
            <div>
                <span>{data.weather[0].description}</span>
                
            </div>
        </div>

    )
}