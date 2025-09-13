import { NavBar } from "./nav-bar";



export function ControlledDemo()
{
    return (
        <div className="container-fluid p-2">
            <NavBar brandName='amazon' className='bg-danger' menuItems={['Home','Shopping','About','Trending','Amazon Grocery']}/>
            <h1>Controlled Components</h1>
            <NavBar brandName='amazon' className='bg-warning' menuItems={['Home','Shopping','About','Trending','Amazon Grocery']}/>
        </div>
    )
}