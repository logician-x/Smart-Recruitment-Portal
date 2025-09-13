// const { useState, useEffect } = require("react");

//  const[product,setProduct]  = useState({"image":null,"name":null,"description":null,"price":null,"brand":null,"operating system":null,"RAM Memory":null,"Installed Size":{"CPU Model":null,"CPU Speed":null}});
//  useEffect(()=>{
//     var http = new XMLHttpRequest();
//     http.open("get","data.json",true);
//     http.send();
//     http.onreadystatechange= function(){
//         if(http.readyState==4){
//             setProduct(JSON.parse(http.responseText));
//         }
//     }
//  });
// export function DisplayProduct()
// {
//    return <div className="row">
//      <div className="col-4">
//         <img src={product.image} alt="" height={100} width={100} />
//      </div>
//      <div className="col-6">
//         <div>
//            <span>{product.description}</span>
//         </div>
//         <div>
//             <hr />
//         </div>
//         <div>
//             <span>{product.price}</span>
//         </div>
//         <div>
//             <hr />
//         </div>
//         <div className="row">
//             <div className="col-4">
//                 <span><b>Brand</b>{product.name}</span>
//             </div>
//             <div className="col-6">
//                 <span><b>Operating System</b>{product["operating system"]}</span>
//             </div>
//             <div className="col-4">
//                 <span><b>Ram Memory</b>{product["RAM Memory"]}</span>
//             </div>
//             <div className="col-6">
//                 <span><b>Installed Size</b></span>
//             </div>
//         </div>
//      </div>
//    </div>
// }
