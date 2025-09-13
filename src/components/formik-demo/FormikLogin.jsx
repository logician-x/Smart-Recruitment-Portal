import { useFormik } from "formik";

export function FormikForm(){
    

        const formik = useFormik({
            initialValues:{
                name:'',
                age:'',
                email:'',
                phone:''
            },
            onSubmit:(data)=>{
                console.log(data);
            },
        })
        return <div className="container-fluid p-4">
           <form onSubmit={formik.handleSubmit} action="">
                <dl>
                    <dt>Name</dt>
                    <dd><input onChange={formik.handleChange} type="text" name="name"/></dd>
                    <dt>Age</dt>
                    <dd><input  onChange={formik.handleChange} type="number" name="age"/></dd>
                    <dt>Email</dt>
                    <dd><input  onChange={formik.handleChange} type="email" name="email"/></dd>
                    <dt>Contact</dt>
                    <dd><input  onChange={formik.handleChange} type="number" name="phone"/></dd>
                </dl>
                <button type="submit" className="btn bg-success">Submit</button>
           </form>

        </div>
      

}