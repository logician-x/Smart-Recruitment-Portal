import { NavBar } from "./navbar";

export function ControlledComponent()
{
    return (
        <div className="container-fluid">
            <NavBar brandName='Rolls Royce' theme='bg-dark' menuItems={['Home','About Us','Our partners','showrooms']}/>
        </div>
    )
}