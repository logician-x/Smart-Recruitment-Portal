import { useState } from "react";

export default function EMI_Demo()
{

    const[principal,setPrincipal] = useState(10000);
    const[year,setYear] = useState(1);
    const[interest,setInterest] = useState(10.38);
    const[amount,setAmount] = useState(0);
    function handleYearChange(e){
        setYear(parseInt(e.target.value));
    }
     function handlePrincipalChange(e){
        setPrincipal(parseInt(e.target.value));
    }
     function handleInterestChange(e){
        setInterest(parseInt(e.target.value));
    }

    function handleButtonClick(e){

        var P = principal;
        var r = interest/12/100;
        var n = year*12;

        setAmount(P*r*(Math.pow(1+r,n))/(Math.pow(1+r,n)-1));
        
    }

    return <div className="container-fluid bg-dark p-4" style={{height:'100vh'}}>
      
         <div className="border border-warning p-4 text-white">
             <h5 className="text-primary text-center">EMI Calculator</h5>
              <div className="row my-4">
                 <div className="col">
                     <span className="">Your Principal amount &#8377;&nbsp;</span>
                     <input type="number" value={principal} onChange={handlePrincipalChange} min="10000" max="100000" className="form-control w-50 d-inline"/>
                </div>       
                <div className="col">
                     <span className="">Your total years &nbsp;</span>
                     <input type="number" value={year} onChange={handleYearChange} min="1" max="5" className="form-control w-50 d-inline"/>
                </div>
                <div className="col">
                     <span className="">Total Interest&nbsp;</span>
                     <input type="number" value={interest} onChange={handleInterestChange} min="10.38" max="18.38" className="form-control w-50 d-inline"/>
                     <span>%</span>           
               </div>
            </div>  
            
            <div className="row my-2">
                <div className="col text-center">
                    <input type="range"  min="10000"  max="100000" onChange={handlePrincipalChange}  value={principal} step="10000" className="form-range"/>
                </div>
                <div className="col text-center">
                    <input type="range"  min="1" value={year} max="5" onChange={handleYearChange} step="1" className="form-range"/>
                </div>
                <div className="col text-center">
                    <input type="range"  min="10.38" value={interest} onChange={handleInterestChange} max="18.38" step="0.01" className="form-range"/>
                </div>
            </div>    
            <div className="row my-2 text-secondary">
                    <div className="col">
                        <span>&#8377;10000</span>
                        <span className="float-end">&#8377;100000</span>
                    </div>
                     <div className="col">
                    <span>&#8377;1 Year</span>
                    <span className="float-end">&#8377;10 Year</span>
                   </div>
                    <div className="col">
                    <span>&#8377;10.38%</span>
                    <span className="float-end">&#8377;18.38%</span>
                   </div>
            </div>   
            <div className="row my-4">
                <div className="col">
                     <button className="btn btn-primary float-end w-25" onClick={handleButtonClick} value="Calculate">Calculate</button>
                </div>
            </div>    

            <div className="mt-4 text-center">
                <span>You will have to pay <span className="me-2 tw-bold">{amount.toLocaleString("en-in",{style:"currency",currency:"INR",minimumFractionDigits:0})}</span>for <span className="me-2">{year*12}</span>Months</span>
            </div>

        </div>

    </div>
}