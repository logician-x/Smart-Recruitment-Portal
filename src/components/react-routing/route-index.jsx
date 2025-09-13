import { BrowserRouter, Route,Routes } from "react-router-dom";
import { Home } from "./Home";
import { Login } from "./login";
import { DashBoard } from "./dashboard";
import { HomePage } from "./home-page";



export function RouteIndex()
{
    return (
        <div className="container-fluid">
           <BrowserRouter>
                <Home/>
                <Routes>
                    <Route path="/" element={<HomePage/>}></Route>
                    <Route path="/login" element={<Login/>}></Route>
                    <Route path="/dashboard" element={<DashBoard/>}></Route>
                </Routes>
           </BrowserRouter>
        </div>
    )
}