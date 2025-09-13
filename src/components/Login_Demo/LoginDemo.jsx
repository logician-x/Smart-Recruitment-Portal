import { useState,useEffect } from "react"
import axios from "axios"
export function LoginDemo(){


    const[users,setUsers] = useState([{user_id:null}]);
    const[msg,setMsg] = useState(null);
    const[errorClass,setErrorClass] = useState(null);
    const[successClass,setSuccessClass]= useState(null);
     useEffect(()=>{

            axios.get("user.json")
            .then(response=>{
                setUsers(response.data);
            })

     },[])

     function handleKeyUp(e){

            for(var user of users){
                if(user.user_id === e.target.value){
                    setMsg("UserID status: Not Available");
                    
                    break;
                }else{
                    setMsg("Available");
                    
                    break;
                }
            }

     }



    return <div className="container-fluid bg-secondary" style={{height:'100vh'}}>
         <div className=" border-2 border-primary p-4 text-white">
        <dl>
            <div>
                <dt>Username</dt>
            <dd><input type="text" onKeyUp={handleKeyUp} className="form-control w-25"/></dd>
            <dd><span>{msg}</span></dd>
            </div>
            <div>
                <dt>Password</dt>
            <dd><input type="password" className="form-control w-25"/></dd>
            </div>
        </dl>
        <div className="progress">
            <div className="progress-bar">
                
            </div>
        </div>
    </div>
    </div>

}