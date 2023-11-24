import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import user from '../assets/user.png'


const Navbar = (props) => {
    return ( 
        <div className='row bg-white justify-content-between py-2 ' id='navbar'>
            <div className='col-1 my-auto' id="toggle">
                <button className='btn' onClick={props.handleToggle}>
                    {/* <i class="bi bi-toggle2-off"></i>    */}
                    <i class="bi bi-toggle2-on"></i>
                </button>
            </div>
            <div className="col my-auto">
                <div className='input-group' id='navbar-input-container'>
                    <i class="bi bi-search my-auto me-2"></i>
                    <input 
                        type='text' 
                        className=' border-0 my-auto'
                        autoFocus
                        placeholder='Search Data'
                        id='navbar-input'
                    />
                </div>
            </div>
            <div className="col d-flex justify-content-end">
                <i class="bi bi-bell fs-4 my-auto"></i>
                <div className='mx-4'>
                    <img src={user} className='img-fluid me-2' alt="profil" id='homeIMG'/>
                    <span >Ashley H.</span>
                </div>
                <i class="bi bi-chevron-down fs-4 my-auto me-5"></i>
            </div>
        </div>
     );
}
 
export default Navbar;