

export function NavBar(props){

    return (
        <nav className={`${props.className} p-4 d-flex justify-content-between align-items-center`}>
            <div>
                <h2 className="text-dark">{props.brandName}</h2>
            </div>
            <div>
                {
                    props.menuItems.map(item=><span className="fs-5 me-5" key={item}>{item}</span>)
                }
            </div>
            <div>
                <button className="btn btn-danger p-3 bi bi-person-circle">SignIN</button>
            </div>
        </nav>
    )

}