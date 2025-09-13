import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
export function FakeStoreProducts()
{
    let params = useParams();
    const [products, setProducts] = useState([{id:0, title:null, description:null,
    image:'', price:0, rating:{rate:0, count:0}}])

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${params.category}`)
        .then(response =>{
            setProducts(response.data);
            console.log(products);
        })
    })

    return (
        <div className="container-fluid">
            
        </div>
    )
}