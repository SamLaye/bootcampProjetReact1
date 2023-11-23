import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import '../Maria.css'

export default function Card(props) {
  console.log(props)

  return (
    
   
      <div className='col-md-4  mt-5'>
        <div className="card  shadow-small  " id='card'>
          <h6 className="card-title ps-2">{props.first.title} </h6>
          <p className=''>Entreprise Solution</p>
          <img src={props.first.img} class="card-img-top" alt="..."/>
          <div className="card-body " id='body'>
            {props.first.text}
          </div>
          <div className='card-footer text-end bg-white'> {props.first.footer} <i class="bi bi-chevron-right"></i>
          </div>
        </div>
      </div> 
  )
}
