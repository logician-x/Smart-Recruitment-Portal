import { useState } from "react";
import { ShoppingHome } from "./home";


export function ShoppingIndex()
{

    const[cartItems] = useState([]);
    const[cartItemsLength,setItemsLength] = useState(0);

    function handleAddToCart(e){
        cartItems.push(e);
        alert(`${e.title} added to cart`);
        setItemsLength(cartItems.length);
    }
    
    return(

        <div className="container-fluid">
            <nav className="d-flex justify-content-between mt-2 p-3 border border-2 rounded">
                <div className="fs-2 text-dark fw-bold">Shopping</div>
                <div className="mt-3 fs-5 text-dark">
                    <span className="me-3">Home</span>
                    <span className="me-3">Electronics</span>
                    <span className="me-3">Grocery</span>
                    <span className="me-3">Footwear</span>
                </div>
                <div className="input-group me-2 w-25">
                    <input type="text" className="form-control" placeholder="Enter the search"/>
                    <span className="bi bi-search bg-warning"/>
                </div>
                <div>
                    <button className="bi bi-cart bg-warning"/>
                    <span className="badge position-absolute bg-danger text-white rounded rounded-circle">{cartItemsLength}</span>
                </div>
            </nav>
            <section>
                <ShoppingHome addToCart={handleAddToCart}/>
            </section>
        </div>

    )
}