import {Link} from "react-router-dom";

import { useEffect, useState } from "react"
import axios from "axios";

export function FakeStoreHome()
{
    const[categories,setCategories] = useState([]);

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products/categories")
        .then(response=>{
            setCategories(response.data);
        })
    },[])

    return (

            <div className="d-flex justify-content-between flex-row">
                <ul> 
                   {
                        categories.map((category,key)=>
                            <li key={key}><Link className="text-decoration-none fs-2" to={`/products/${category}`}>{category}</Link></li>
                        )
                   }                     
                </ul>
            </div>

    )
}