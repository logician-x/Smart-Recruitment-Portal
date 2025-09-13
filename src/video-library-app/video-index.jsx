
import { BrowserRouter,Routes,Route, Link } from "react-router-dom";
import "./vstyle.css";
import { VideoHome } from "./video-home";
import { AdminLogin } from "./admin-login";
import { UserLogin } from "./user-login";
import { AdminDashboard } from "./admin-dashboard";
import { DeleteVideo } from "./video-delete";
import { UpdateVideo } from "./video-update";
import { VideoAdd } from "./video-add";
import { UserDashBoard } from "./user-dashboard";

export function VideoIndex()
{
    
    
    return (

        <div className="home-theme" style={{height:"600px"}}>
            <header className="text-center mt-2">
                <div className="fs-2 fw-bold "><i className="bi bi-house-door fs-2"/> Video Library Tool</div>
               <div className="mb-4">[ Java,.NET,React ]</div>
            </header>
            <BrowserRouter>
                <section className="d-flex justify-content-center align-items-center" style={{height:'80vh'}}>
                    <Routes>
                        <Route path="/" element={<VideoHome/>}/>
                        <Route path="video-index" element={<VideoIndex/>}/>
                         <Route path="admin-login" element={<AdminLogin/>}/>
                          <Route path="user-login" element={<UserLogin/>}/>
                          <Route path="admin-dashboard" element={<AdminDashboard/>}/>
                          <Route path="video-delete/:video_id" element={<DeleteVideo/>}/>
                          <Route path="video-update/:video_id" element={<UpdateVideo/>}/>
                          <Route path="video-add/:video_id" element={<VideoAdd/>}/>
                           <Route path="user-dashboard" element={<UserDashBoard/>}/>
                          <Route path="*" element={<span>Error loading page</span>}/>
                    </Routes>
                </section>
            </BrowserRouter>
        </div>

    )
}