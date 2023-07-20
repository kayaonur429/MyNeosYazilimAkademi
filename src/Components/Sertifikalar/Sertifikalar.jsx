import React from "react";


function Sertifikalar(props) {
  return (
    <div className="SertifikaDiv" >
      <h3>{props.SertifikaTitle} </h3>
      <p> {props.SertifikaInfo} </p>
      <img src={props.SertifikaImg} alt="" />
    </div>
  );
}

export default Sertifikalar;
