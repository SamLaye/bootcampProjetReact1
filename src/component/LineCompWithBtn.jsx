import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import "bootstrap-icons/font/bootstrap-icons.css"

const LineCompWithBtn = () => {
    return (
        <div className='row' id='lineCompWithBtn'>
            <div className="col-9 col-md-7 ">
                <h5 className='text-capitalize fs-6'>edit your service</h5>
                <p>
                    You may edit your service and then send it for the approval.
                </p>
            </div>
            <div className='col-3 col-md-4 offset-md-1 d-flex justify-content-end'> 
                <button className='btn btn-dark align-self-center text-capitalize py-3 px-5'>edit servive</button>
            </div>
        </div>
    );
}

export default LineCompWithBtn;