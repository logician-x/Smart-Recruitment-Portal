import axios from "axios"
import { useEffect, useState } from "react"

export function ShoppingHome({addToCart})
{
    
    
    function handleCartClick(product){
        addToCart(product);
    }
   const [products, setProducts] = useState([{id:0, title:null, image:null,
                                    description:null, price:0, category:null}]);
    useEffect(()=>{
        
            axios.get("https://fakestoreapi.com/products")
            .then(response=>{
                setProducts(response.data)
            })
    },[])
    return (

        <div className="d-flex flex-wrap overflow-auto" style={{height:'550px'}}>
           {
                 products.map(product=>
                <div key={product.id} className="card m-2 p-2" style={{width:'200px'}}>
                    <img src={product.image} className="card-img-top" alt="" height='120px'/>
                    <div className="card-header overflow-auto">
                       {product.title}
                    </div>
                    <div className="card-body text-center">
                        {product.price}
                    </div>
                    <div className="card-footer">
                        <button onClick={()=>{handleCartClick(product)}} className="btn btn-warning w-100 bi bi-cart4"></button>
                    </div>
                </div>
                
            )
           }
        </div>

    )
}