import React from 'react'
import './Banner.css'
function Banner() {
  return (
    <div className='Banner'>
        <h1>Drug Interaction Checker</h1>
        <div className='Banner2 container'>
        <input class="container inputbar form-control form-control-md" type="text" placeholder="Enter a drug, OTC and herbal supplement" aria-label=".form-control-lg example" />
        </div>
    </div>
  )
}

export default Banner