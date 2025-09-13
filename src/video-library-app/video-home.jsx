import {Link} from "react-router-dom";

export function VideoHome()
{
    return (
        <div className="">
            <Link className="btn text-white  btn-danger" to="admin-login">Admin</Link>
            <Link className="btn text-white mx-2 btn-success" to="user-login">User</Link>
        </div> 
    )
}