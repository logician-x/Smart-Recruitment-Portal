import { useFormik } from "formik"
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";

export function UserLogin()
{
    let navigate = useNavigate();
    const formik = useFormik({
                        initialValues:{
                            uname:'',
                            password:''
                        },
                        onSubmit:(data)=>{
                            axios.get("http://localhost:5500/user")
                            .then(response=>{
                               const user = response.data.find(user=>user.uname===data.uname);
                               if(user){
                                if(user.password===data.password){
                                    window.sessionStorage.setItem('uname',user.uname);
                                    navigate("/user-dashboard");
                                }else{
                                    alert("invalid password");
                                }
                               }else{
                                    alert("Not Found");
                               }
                            })
                        }
                    });
       
    
    return (
        <div className="bg-light p-4 w-25 border rounded" style={{height:'300px'}}>
            <form onSubmit={formik.handleSubmit}> 
                <h3>User Login</h3>
                <dl>
                    <dt>Username</dt>
                    <dd><input type="text" onChange={formik.handleChange} className="form-control" name="uname"/></dd>
                     <dt>Password</dt>
                    <dd><input type="password" onChange={formik.handleChange} className="form-control" name="password"/></dd>
                </dl>
                <button type="submit" className="btn btn-warning">Login</button>
                <Link to="/" className="btn mx-2 btn-danger">Cancel</Link>
            </form>
        </div>
    )
}