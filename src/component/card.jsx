import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

export default function Card(props) {
  console.log(props)

  return (
    
   
      <div className='col-md-4'>
        <div class="card">
          <h5 class="card-title">{props.first.title} </h5>
          <p>Entreprise Solution</p>
          <img src={props.first.img} class="card-img-top" alt="..."/>
          <div class="card-body">
            {props.first.text}
          {/* <p class="card-text">Canned responses are used to answer the questions quickly, but not necessarily the lead to closing a sale. </p>
          <p class="card-text">Faster response</p>
          <p class="card-text">Right tone of language</p>
          <p class="card-text">Consistency in brand experience</p> */}
          </div>
          <div className='card-footer text-end'>READ MORE <i class="bi bi-chevron-right"></i></div>
        </div>
      </div>
    
    
  )
}
