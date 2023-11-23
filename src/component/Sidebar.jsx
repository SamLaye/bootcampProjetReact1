import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js" 
import '../App.css'
import '../Maria.css'
import lio from "../assets/loi.png"
import "bootstrap-icons/font/bootstrap-icons.css"

export default function Sidebar({munuItems,handleToggle}) {
 
  

  return (
    <div className='bg-white border border-grey   py-2 old mx-0 ' id='sidebar'>
        <div className='d-flex justify-content-center  align-items-center'>

          <div className='pe-2'>
            <img src= {lio} alt="" className='img-fluid' />
          </div>
          <div className=''>
            <h1>dashy</h1>
            <span>bussiness and Consulting</span>
          </div>
        <div className='col-1 my-auto' id="toggleSidebar">
                <button className='btn' onClick={handleToggle}>
                     <i class="bi bi-toggle2-off"></i>    
                    
                </button>
            </div>
        </div>
      
        <div className='mt-5'>
            <h6 className='ps-3'>MAIN MENU</h6>
            <ul className='mt-4'>
            {
            munuItems.map((items) => (
                <li className=' list-unstyled p-2 my-2  rounded fs-5' id={items.list} >
                  <i className={items.icon} id={items.id} ></i>   
                  <span>  {items.name}</span> </li> 
            ))
            }  
            </ul>
        </div>
        <div className='mt-5'>
            <h5 className='ps-3'>PREFERENCES</h5>
            <ul>
                <li className='list-unstyled my-2 p-2  fs-5'>
                <i className="bi bi-person  p-3"></i>
                    <span>Users</span>
                </li>
                <li className='list-unstyled my-2 p-2 fs-5'>
                <i className="bi bi-gear p-3"></i>
                    <span>Settings</span>
                </li>
            </ul>

        </div>
        <div className='doing text-center mt-5'>
            <div className='d-flex'>
            <h3 className='text-warning  fs-4'>Upgrade to Entreprise Account</h3>
            <i className="bi bi-x-lg "></i>
            </div>
            <p className='fs-6'>Lorem  adipisicing elit. Quisquam repellat possimus, voluptate vitae illo itaque cumque blanditiis moll</p>
            <button  className='text-white btn btn-dark m-2 '>Upgrade</button>
        </div>
    </div>
  )
}
