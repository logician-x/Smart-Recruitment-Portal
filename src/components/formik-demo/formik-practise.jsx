// import { useFormik } from "formik";
// import * yup from "yup";
// export function FormikPractise(){

//     const formik  = useFormik({
//                                     initialValues:{
//                                         username:'',
//                                         password:''
//                                     },
//                                     onSubmit:(values)=>{
//                                         console.log(values);
//                                     }
//                                 })
    
//     return (
//         <div className="container-fluid"> 
//             <Form initialValues={{username:'',password:''}} validationSchema={yup.object(
//                 {username:yup.string().required('this is required field').min(4,'minimum length is 4'),
//                 password:yup.string().required('this field is required')
//                 }
//             )}>
//                 <h3>User Form</h3>
//                 <dl>
//                     <dt>Username</dt>
//                     <dd><input type="text" name="username"/></dd>
//                     <dt>Password</dt>
//                     <dd><input type="password"  name="password" /></dd>
//                 </dl>
//                 <button  type="submit">Submit</button>
//             </Form>
//         </div>
//     )
// }