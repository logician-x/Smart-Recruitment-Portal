import { useEffect, useState } from "react"



export function DataBinding(){

    const[getProduct,setProduct] = useState({title:'',price:'',image:'',rating:{rate:'',ratings:'',reviews:''},offers:[]});
    
    useEffect(()=>{

        var http = new XMLHttpRequest();
        http.open("get","db.json",true);
        http.send();
        http.onreadystatechange = function(){
            if(http.readyState===4){
                setProduct(JSON.parse(http.responseText));
            }
        }
    },[])
    return (

        <div className="container-fluid bg-" style={{height:'100vh'}}>

            <div className="card" style={{height:'100px',width:'200px'}}>
               <img src={getProduct.image} height='100' width='100' className="card-img-top" alt="product image"/>
               <div className="card-body">
                    <div className="card-title">{getProduct.title}</div>
                    <div className="card-subtitle">{getProduct.price}</div>
               </div>
               <div className="card-footer">
                   <div>
                     <i className="bi bi-star-fill"></i>
                    <span>Ratings:{getProduct.rating.ratings}</span>
                   </div>
                   <div>
                     <span>{getProduct.rating.reviews} -reviews</span>
                   </div>
               </div>
            </div>

        </div>

    )
}