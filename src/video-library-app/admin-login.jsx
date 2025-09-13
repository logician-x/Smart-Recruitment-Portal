import {useFormik } from "formik"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TextField,Button } from "@mui/material";
export function AdminLogin()
{
    let navigate = useNavigate();
    const formik = useFormik({
                        initialValues:{
                            uname:'',
                            password:''
                        },
                        onSubmit:(data)=>{
                            axios.get("http://localhost:5500/admin")
                            .then(response=>{
                               const admin = response.data.find(admin=>admin.uname===data.uname);
                               if(admin){
                                if(admin.password===data.password){
                                    window.sessionStorage.setItem('uname',admin.uname);
                                    navigate("/admin-dashboard");
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
                <h3>Admin Login</h3>
                <dl>
                    <dd><TextField label="Username" variant="outlined" onChange={formik.handleChange} className="w-100" name="uname"/></dd>
                    <dd><TextField label="Username" variant="outlined" onChange={formik.handleChange} className="w-100" name="password"/></dd>
                </dl>
                <button type="submit" className="btn btn-success">Login</button>
                <Button color="primary" variant="contained" className="ms-2">Login</Button>
            </form>
        </div>
    )
}