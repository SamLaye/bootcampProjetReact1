import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import "bootstrap-icons/font/bootstrap-icons.css"

const LineCompWithoutBtn = () => {
    return (
        <div className="" id='lineCompWithoutBtn'>
            <h5 className='text-capitalize fs-6'>your apllication is rejected</h5>
            <p>
                You submitted on your Letter of Authorization (LOA) is different 
                from what is on file with your carrier in their Customer Service 
                Record (CSR). A CSR is a copy of how your telephone records appear 
                in the telephone company’s database.
            </p>
        </div>
    );
}

export default LineCompWithoutBtn;