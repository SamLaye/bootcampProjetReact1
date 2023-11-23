const Template = (props) => {
    return (
        <div className='container-fluid'>
            <div className="row " >
                <div className="col-md-2 ps-0" id="sidebarContainer">
                    {props.sidebar}
                </div>
                <div className="col-md-10 ps-0" id="navbarContainer">
                    {props.navbar}
                    {props.children}
                </div>
            </div>
        </div>
        // ooo
    );
}

export default Template;