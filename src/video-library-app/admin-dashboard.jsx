import { useEffect, useState } from "react"
import axios from "axios";
import {Link} from "react-router-dom";


export function AdminDashboard()
{

    const [categories,setCategories] = useState([{id:null,category_id:null,name:null}]);

    const[videos,setVideos] = useState([{
             id: null,
             video_id: null,
            category_id:null,
            url: null,
            title: null,
            description: null
        }])
        useEffect(()=>{
            axios.get("http://localhost:5500/videos")
            .then(response=>{
                setVideos(response.data);
            })
            axios.get("http://localhost:5500/categories")
            .then(response=>{
                response.data.unshift({id:'-1',category_id:'-1',name:'select category'});
                setCategories(response.data);
            })
        },[categories.category_id])

    function handleCategoryChange(e){
        axios.get(`http://localhost:5500/videos`)
            .then(response=>{
                let filteredVideos = response.data.filter(video=>video.category_id===parseInt(e.target.value));
                setVideos(filteredVideos);
            })
        ///?category_id=${e.target.value}
    }
    return(
        <div className="bg-light p-4 mt-5" >
            <div className="d-flex justify-content-between">
                <h3>{window.sessionStorage.getItem('uname')} - DashBoard</h3>
                <div>
                   <select className="form-select form-select-lg mb-3" onChange={handleCategoryChange} name="category">
                    {
                        categories.map(category=>
                            <option key={category.category_id} value={category.id}>{category.name}</option>
                        )
                    }
                   </select>
                </div>
                <Link to="/">Sign Out</Link>
            </div>
            <table className="table table-hover border border-2" style={{width:'1100px'}}>
            <thead>
                <tr className="d-flex justify-content-between">
                    <th>Index</th>
                    <th>Title</th>
                    <th>Preview</th>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                videos.map(video=>
                    <tr className="d-flex justify-content-between" key={video.video_id}>
                        <td>{video.video_id}</td>
                        <td className="ms-4">{video.title}</td>
                        <td>
                            <iframe src={video.url} width='250px' height='120px'/>
                        </td>
                        <td>{video.description}</td>
                        <td>
                           <Link to={`/video-update/${video.video_id}`} className="btn bg-warning bi bi-pen-fill"/>
                           <Link to={`/video-delete/${video.video_id}`} className="btn mx-2 bg-danger bi bi-trash-fill"></Link>
                           <Link to={`/video-add/${video.video_id}`} className="btn mx-2 bg-danger bi bi-plus-circle"></Link>
                        </td>
                    </tr>
                )
            }
            </tbody>
        </table>
        </div>
    )
}