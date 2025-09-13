
import axios from "axios";
import { useFormik } from "formik";
import { useEffect,useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export function VideoAdd()
{


    let navigate = useNavigate();
    var params = useParams();
    const[videos,setVideos] = useState({
             id: null,
             video_id: null,
            category_id:null,
            url: null,
            title: null,
            description: null,
            likes:null,
            dislikes:null,
            comments:null
        })
        useEffect(()=>{
            axios.get(`http://localhost:5500/videos/${params.video_id}`)
            .then(response=>{
                setVideos(response.data);
                console.log(videos);
            })
        },[])
    const formik = useFormik({
        initialValues:{
            video_id:'',
            category_id:'',
            url : '',
            title:'',
            description:'',
            likes:'',
            dislikes:'',
            comments:''
        },
        onSubmit:(values=>{
            axios.post(`http://localhost:5500/videos`,values)
            .then(response=>{
                if(response){
                    alert("video added");
                    navigate("/admin-dashboard");
                }
            })
    })})
   
    return (
        <div className="bg-light p-4 border rounded" style={{width:'400px',height:'80vh'}}>
            <div className="fw-bold fs-3">Update Video</div>
            <form className="mt-4" onSubmit={formik.handleSubmit}>
                <dl className="d-flex  flex-column">
                    <div className="d-flex justify-content-between ">
                        <dt>Video ID</dt>
                        <dd><input type="number" value={formik.values.video_id} onChange={formik.handleChange} className="form-control" name="video_id"/></dd>
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                        <dt>Category_id</dt>
                        <dd><input type="number" value={formik.values.category_id} onChange={formik.handleChange} className="form-control" name="category_id"/></dd>
                    </div>
                    <div className="d-flex justify-content-between">
                        <dt>Url</dt>
                        <dd><input type="text" value={formik.values.url} onChange={formik.handleChange} className="form-control" name="url"/></dd>
                    </div>
                    <div className="d-flex justify-content-between">
                        <dt>Title</dt>
                        <dd><input type="text" value={formik.values.title} onChange={formik.handleChange} className="form-control" name="title"/></dd>
                    </div>
                    <div className="d-flex justify-content-between">
                        <dt>Description</dt>
                        <dd><input type="text" value={formik.values.description} onChange={formik.handleChange} className="form-control" name="description"/></dd>
                    </div>
                    <div className="d-flex justify-content-between">
                        <dt>Likes</dt>
                        <dd><input type="text" value={formik.values.likes} onChange={formik.handleChange} className="form-control" name="likes"/></dd>
                    </div>
                    <div className="d-flex justify-content-between">
                        <dt>Dislikes</dt>
                        <dd><input type="text" value={formik.values.dislikes} onChange={formik.handleChange} className="form-control" name="dislikes"/></dd>
                    </div>
                    <div className="d-flex justify-content-between">
                        <dt>Comments</dt>
                        <dd><input type="text" value={formik.values.comments} onChange={formik.handleChange} className="form-control" name="comments"/></dd>
                    </div>
                </dl>
                <div>
                    <button type="submit" className="btn btn-danger">Add</button>
                    <Link to="/admin-dashboard" className="btn mx-2 btn-warning">Cancel</Link>
                </div>
            </form>
        </div>
    )
}