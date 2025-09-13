import { Link } from "react-router-dom";


export function Home()
{
    return ( 
        <div className="container-fluid mt-2">
            <header className="d-flex bg-dark text-white border rounded p-2 text-center justify-content-between" style={{height:'80px'}}>
                <div className="fs-2 fw-bold ">Home</div>    
                <nav className="mt-3 fs-5">
                    <Link className="me-2 text-decoration-none" to="login">Login</Link>
                    <Link className="me-2 text-decoration-none" to="dashboard">Dashboard</Link>
                    <span>Nav3</span>
                    <span className="ms-2">Nav4</span>
                </nav>   
            <div className="input-group w-25">
                <input type="text" placeholder="Search products" className="form-control"/>
                <button className="bi bi-search bg-warning"></button>
            </div>  
            </header>
        </div>
    )
}