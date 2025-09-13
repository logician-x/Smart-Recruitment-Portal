import { useFormik } from "formik";

import * as yup from "yup";
export function ValidateUser() {

   
  const formik = useFormik(
    {
       initialValues:{
      Username:'',
      Age:'',
      Mobile:'',
      City:'',
      Gender:''
    },
    onSubmit:(user)=>{
       console.log(user);
    },
    validationSchema:yup.object({Username:yup.string().required("Username must to enter").min(5,"invalid too short")})
    }
  )

  return <div className="container p-4">

    <form onSubmit={formik.handleSubmit}>
      <h3>User Form</h3>
      <dl>
        <dt>Username</dt>
        <dd><input type="text" onChange={formik.handleChange} name="Username" /></dd>
        <dd className="text-danger">{formik.errors.Username}</dd>
        <dt>Age</dt>
        <dd><input  type="text" onChange={formik.handleChange} name="Age" /></dd>
        <dd className="text-danger">{formik.errors.Age}</dd>
        <dt>Mobile</dt>
        <dd><input type="text" onChange={formik.handleChange} name="Mobile" /></dd>
        <dd className="text-danger">{formik.errors.Mobile}</dd>
        <dt>City</dt>
        <dd>
          <select name="City" onChange={formik.handleChange}>
            <option value="-1">Select City</option>
            <option>Udgir</option>
            <option>Hyderabad</option>
            <option>Noida</option>
            <option>Gurugram</option>
            <option>Bengaluru</option>
          </select>
        </dd>
        <dd className="text-danger">{formik.errors.City}</dd>
        <dt>Select your gender</dt>
        <dd>  
          <input type="radio" value='Male' onChange={formik.handleChange} name="Gender" id='male'/><label htmlFor="male">Male</label>
          <input type="radio" value='Female' onChange={formik.handleChange} name="Gender" id='female'/><label htmlFor="female">Female</label>
        </dd>
        <dd className="text-danger">{formik.errors.Gender}</dd>
      </dl>
      <input type="submit" value='Submit'/>
    </form>
  </div>
}