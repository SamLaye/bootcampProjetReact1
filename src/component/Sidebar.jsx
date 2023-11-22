import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js" 
import '../App.css'
import '../Maria.css'
import lio from "../assets/loi.png"
import "bootstrap-icons/font/bootstrap-icons.css"

export default function Sidebar({munuItems}) {
 
  

  return (
    <div className='bg-white '>
        <div className='d-flex justify-content-center  align-items-center'>
          <div className='p-3'>
            <img src= {lio} alt="" className='img-fluid' />
          </div>
          <div className='p-3'>
            <h1>dashy</h1>
            <span>bussiness and Consulting</span>
          </div>
        </div>
        <div className='mt-5'>
            <h5>MAIN MENU</h5>
            <ul className='mt-4'>
            {
            munuItems.map((items) => (
                <li className=' list-unstyled p-4 fw-bold fs-4' id={items.list} >
                  <i className={items.icon} id={items.id} ></i>   
                    {items.name}  </li> 
            ))
            }
               
            </ul>

        </div>
        <div className='mt-5'>
            <h5>PREFERENCES</h5>
            <ul>
                <li className='list-unstyled p-4 fw-bold fs-4'>
                <i className="bi bi-person p-3"></i>
                    <span>User</span>
                </li>
                <li className='list-unstyled p-4 fw-bold fs-4'>
                <i className="bi bi-gear p-3"></i>
                    <span>Setting</span>
                </li>
            </ul>

        </div>
        <div className='doing text-center py-2 position-relative'>
            <h3 className='text-warning text-wrap text-center'> Upgrate to Entreprise Account</h3>
            <p>Lorem  adipisicing elit. Quisquam repellat possimus, voluptate vitae illo itaque cumque blanditiis moll</p>
            <button  className='text-white btn btn-dark '>Upgrate</button>
       
        <div className='position-absolute X fs-3'><i className="bi bi-x-lg"></i></div>
        </div>

        

    </div>
  )
}
