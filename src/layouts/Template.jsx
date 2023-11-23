const Template = (props) => {
    return (
        <div className='container-fluid'>
            <div className="row " >
                {props.toggle && <div className="col-md-2 ps-0" id="sidebarContainer">
                    {props.sidebar}
                </div>}
                <div className="col ps-0" id="navbarContainer">
                    {props.navbar}
                    {props.children}
                </div>
            </div>
        </div>
        // ooo
    );
}

export default Template;