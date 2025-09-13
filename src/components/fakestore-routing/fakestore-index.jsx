import { BrowserRouter,Route,Routes } from "react-router-dom";
import { FakeStoreHome } from "./fakestore-home";
import { FakeStoreProducts } from "./fakestore-products";



export function FakestoreIndex()
{
    return (
        <div className="container-fluid">
            <BrowserRouter>
                <header className="d-flex justify-content-between bg-dark text-white text-center p-2 mt-2">
                    <div className="fs-2 fw-bold">Fakestore Home</div>
                    <nav className="d-flex justify-content-between gap-3 fs-5 mt-2">
                       <span>Categories</span> 
                       <span>About Us</span>
                       <span>explore more</span>
                       <span>Contributions</span>
                    </nav>
                    <div className="input-group w-25">
                        <input type="text" className="form-control"/>
                        <button className="btn bg-warning bi bi-search"></button>                        
                    </div>
                </header>
                <section>
                    <Routes>
                        <Route path="/" element={<FakeStoreHome/>}></Route>
                        <Route path="products/:categories" element={<FakeStoreProducts/>}/>
                        <Route path="*" element={<span>Requested URL Not Found</span>} />
                    </Routes>
                </section>
            </BrowserRouter>
        </div>
    )
}