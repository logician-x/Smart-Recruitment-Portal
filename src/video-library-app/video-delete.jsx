import { useEffect,useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios";
import { Link } from "react-router-dom";
export function DeleteVideo()
{
    let params = useParams();
    var navigate = useNavigate();
     const[videos,setVideos] = useState({
             id: null,
             video_id: null,
            category_id:null,
            url: null,
            title: null,
            description: null
        })
        useEffect(()=>{
            axios.get(`http://localhost:5500/videos/${params.video_id}`)
            .then(response=>{
                setVideos(response.data);
            })
        },[])

    function handleYesClick(){
        axios.delete(`http://localhost:5500/videos/${params.video_id}`)
        .then(response=>{
            if(response){
                alert("Video Deleted");
                navigate("/admin-dashboard");
            }
        })
    }
    return (
                <div className="">
                    <div className="card" key={videos.id} style={{height:'480px',width:'500px'}}>
                        <div className="card-header fs-bold">{videos.title}</div>
                    <div className="card-body">
                        <iframe src={videos.url} height='300px' width='460px'/>
                    </div>
                    <div className="card-footer">
                        <div>
                            {videos.description}
                        </div>           
                        <span className="text-danger">Are you sure?
                            <button type="button" onClick={handleYesClick} className="btn bg-danger mx-2">Yes</button>
                            <Link to="/admin-dashboard " className="btn btn-warning">No</Link>
                        </span>
                    </div>
                  </div>
                </div>
    )
}