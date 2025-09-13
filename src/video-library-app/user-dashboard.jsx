import { useEffect, useState } from "react"
import axios from "axios";
import {Link} from "react-router-dom";



export function UserDashBoard()
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
        },[])

    function handleCategoryChange(e){
        axios.get(`http://localhost:5500/videos`)
            .then(response=>{
                let filteredVideos = response.data.filter(video=>video.category_id===parseInt(e.target.value));
                setVideos(filteredVideos);
            })
        ///?category_id=${e.target.value}
    }
    return (
        <div className="bg-light p-4" style={{width:'1100px'}}>

            <div className="d-flex justify-content-between">
                <div className="fs-3 fw-bold">{sessionStorage.getItem('uname')} - DashBoard</div>
                <div>
                <select className="form-select form-select-lg mb-3" onChange={handleCategoryChange} name="category">
                    {
                        categories.map(category=>
                            <option key={category.category_id} value={category.id}>{category.name}</option>
                        )
                    }
                   </select>
                </div>
                <div>
                    <Link to="/">Sign Out</Link>
                </div>
            </div>
           <div className="d-flex flex-wrap overflow-auto" >
           {                 
                videos.map(video=>
                    <div className="card m-2 p-2" key={video.video_id} style={{width:'300px',height:'350px'}}>
                        <div className="card-header">
                            {video.title}
                        </div>
                       <div className="card-body">
                            <iframe src={video.url} width='100%' height='150px'/>
                            <span>
                                {video.description}
                            </span>
                       </div>
                       <div className="card-footer d-flex justify-content-between">
                            <i className="bi bi-eye fs-3 my-2"/>
                            <i className="bi  bi-hand-thumbs-up fs-3 my-2"/>
                            <i className="bi bi-hand-thumbs-down fs-3  my-2"/>
                            <i className="bi  bi-chat-bots fs-3 my-2"/>
                       </div>
                    </div>    
                )
            }
            </div>

        </div>
    )
}