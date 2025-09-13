import axios from "axios"
import { useRef,useEffect, useState } from "react"

export function CarouselDemo(){


    const[product,setProduct] = useState({id:0,title:null,price:0,description:null,category:null,image:null,rating:{rate:null,count:null}});
    let productid = useRef(1);

    const [status,setStatus] = useState(null);

    let ref = useRef(null);

    function LoadProductManual(id){
        axios(`https://fakestoreapi.com/products/${id}`)
       .then(response=>{
        setProduct(response.data);
     })     
    }

    useEffect(()=>{
        axios("https://fakestoreapi.com/products/1")
        .then(response=>{
            setProduct(response.data);
        })
    },[]);

    function handleNextClick(){
        productid.current = productid.current + 1;
        if(productid.current>20){
            productid.current = 1; 
        }
        LoadProductManual(productid.current);
        setStatus("status:Manual Load");
    }

    function handlePreviousClick(){
        productid.current = productid.current - 1;
        if(productid.current<1){
            productid.current = 20; 
        }

        LoadProductManual(productid.current);
        setStatus("status: Manual Load");
    }

     function LoadProductAuto(){

        productid.current = productid.current + 1;
         axios(`https://fakestoreapi.com/products/${productid.current}`)
       .then(response=>{
        setProduct(response.data);
     })
        
     }

     function handleOnchange(e){
        productid.current = parseInt(e.target.value);
        LoadProductManual(productid.current);
     }

    function handleStartClick(){
            ref.current = setInterval(LoadProductAuto,5000);
            setStatus("status:Auto Load");
    }

    function handleCancelClick(){
        clearInterval(ref.current);
    }
      return <div className="container-fluid">  

            <div className="d-flex align-items-center justify-content-center" style={{height:'100vh'}}>
                <div className="card p-2 w-50">
                    <div className="card-header text-center p-2 overflow-auto fs-6 " style={{height:'100px'}}>
                        <span>{product.title}</span>
                        <span>{product.description}</span>
                        <span className="text-warning d-block">{status}</span>
                    </div>
                    <div className="card-body row">
                        <div className="col-1 d-flex justify-content-center align-items-center">
                            <button onClick={handlePreviousClick} className="btn bg-dark text-white"><span className="bi bi-chevron-left"></span></button>
                        </div>
                        <div className="col-10 p-2 border border-1 rounded position-relative" style={{height:'400px'}}>
                            <img src={product.image} alt="" className="" style={{height:'350px',width:'100%'}}/>
                             <span className="badge bg-danger p-2 rounded-circle position-absolute end-0 top-1">{product.price.toLocaleString("en-us",{style:"currency",currency:"USD"})}</span>
                            <div className="mt-3">
                                <input type="range" onChange={handleOnchange} value={productid.current} className="form-range" max='20' min='1' step='1'/>
                            </div>
                        </div>
                        
                        <div className="col-1  d-flex justify-content-center align-items-center">
                             <button onClick={handleNextClick} className="btn bg-dark text-white"><span className="bi bi-chevron-right"></span></button>
                        </div>
                    </div>
                    <div className="card-footer text-center">
                        <button onClick={handleStartClick}  className="btn btn-success me-3">Start</button>
                         <button onClick={handleCancelClick}  className="btn btn-danger">Cancel</button>
                    </div>
                </div>

            </div>

      </div>

}