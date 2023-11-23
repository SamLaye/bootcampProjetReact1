import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js" 
import '../App.css'
import '../Maria.css'
import lio from "../assets/loi.png"
import "bootstrap-icons/font/bootstrap-icons.css"

export default function Sidebar({munuItems}) {
 
  

  return (
    <div className='bg-white border border-grey   py-2 h-100 mx-0 ' id='sidebar'>
        <div className='d-flex justify-content-center  align-items-center'>
          <div className='pe-2'>
            <img src= {lio} alt="" className='img-fluid' />
          </div>
          <div className=''>
            <h1>dashy</h1>
            <span>bussiness and Consulting</span>
          </div>
        </div>
      
        <div className='mt-5'>
            <h6 className='ps-3'>MAIN MENU</h6>
            <ul className='mt-4'>
            {
            munuItems.map((items) => (
                <li className=' list-unstyled pb-4 pt-2 pe-5  fs-5' id={items.list} >
                  <i className={items.icon} id={items.id} ></i>   
                    {items.name} </li> 
            ))
            }  
            </ul>
        </div>
        <div className='mt-5'>
            <h5 className='ps-3'>PREFERENCES</h5>
            <ul>
                <li className='list-unstyled pb-3  fs-5'>
                <i className="bi bi-person p-3"></i>
                    <span>Users</span>
                </li>
                <li className='list-unstyled pt-2 fs-5'>
                <i className="bi bi-gear p-3"></i>
                    <span>Settings</span>
                </li>
            </ul>

        </div>
        <div className='doing text-center  position-relative mt-5'>
            <h3 className='text-warning text-wrap text-center fs-3'> Upgrade to Entreprise Account</h3>
            <p className='fs-6'>Lorem  adipisicing elit. Quisquam repellat possimus, voluptate vitae illo itaque cumque blanditiis moll</p>
            <button  className='text-white btn btn-dark '>Upgrate</button>
       
        <div className='position-absolute X '><i className="bi bi-x-lg "></i></div>
        </div>

        

    </div>
  )
}
