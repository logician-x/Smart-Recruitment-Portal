import { useFormik } from "formik"


export function FormikValidation() {

   function ValidateUser(user){

      var errors = {};
      if(user.Username.length===0){
           errors.Username = 'Username Required';
      }else{
         if(user.Username.length<5){
            errors.Username = 'Username Short';
         }
      }
      if(user.Mobile.length===0){
          errors.Mobile = 'Mobile is Required';
      }else{
          if(user.Mobile.match(/\+91\d{10}/)){
              errors.Mobile = '';
          }
      }

      if(user.Age.length===0){
           errors.Age = 'Age is Required';
      }else{
        if(user.Age.match(/^\d{1,3}$/)){
            errors.Age = '';
        }
      }
      if(user.City==='-1'){
          errors.City = 'City is Required';
      }
      if(user.Gender===''){
        errors.Gender = 'Gender is required';
      }
      return errors;
   }
  const formik = useFormik(
    {
       initialValues:{
      Username:'',
      Age:'',
      Mobile:'',
      City:'',
      Gender:''
    },
    validate:ValidateUser,
    onSubmit:(user)=>{
       console.log(user);
    }
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