const Template = () => {
    return (
        <div className='container-fluid'>
            <div className="row ">
                <div className="col-md-3">
                    {props.sidebar}
                </div>
                <div className="col-md-9">
                    {props.navbar}
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default Template;