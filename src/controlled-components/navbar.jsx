
export function NavBar(props)
{
    return (

        <nav className={`d-flex ${props.theme} text-light border rounded justify-content-between p-2`}>
            <div>
                <span className="fs-2 fw-bold">{props.brandName}</span>
            </div>
            <div className="mt-2">
                {
                    props.menuItems.map(item=>
                    <span className='me-3' key={item}>
                        {item}
                    </span>)
                }
            </div>
            <div className="input-group w-25">
                <input type="text" placeholder="Enter the keywords" className="form-control"/>
                <button className="btn bi bi-search btn-warning"></button>
            </div>
        </nav>

    )
}