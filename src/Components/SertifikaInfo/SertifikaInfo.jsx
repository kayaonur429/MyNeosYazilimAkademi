import React from 'react'

function SertifikaInfo(props) {
  return (
    <div className='SertifikaInfo' id="sertifikalar">
      <h3> {props.SertifikaTitle} </h3>
      <p> {props.SertifikaInfo} </p>
    </div>
  )
}

export default SertifikaInfo