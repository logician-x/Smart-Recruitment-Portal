import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ProductFunction() {
  const [getProductData, setProductData] = useState([{ img_src: null }]);
  const[img_src,setimg_src] = useState("img1.jpg");
  
  function handleMouseOver(e){

     setimg_src(e.target.src);

  }

  useEffect(() => {
    axios.get("data.json")
      .then(response => {
        setProductData(response.data);
      })
      .catch(error => {
        console.error("Error loading data:", error);
        
      });
  }, []); 

  return (
    <div className="container-fluid p-5 bg-dark">
      <div className="row mt-4">
        <div className="col-1">
          {
            getProductData.map(img => (
              <div key={img.img_src} className="my-2 border border-2 border-warning p-1 text-center">
                <img src={img.img_src} onMouseOver={handleMouseOver} alt="" height="50" width="50" />
              </div>
            ))
          }
        </div>
        <div className="col-11">
          <img src={img_src} alt="" style={{height:'400px',width:'30%'}}/>
        </div>
      </div>
    </div>
  );
}
