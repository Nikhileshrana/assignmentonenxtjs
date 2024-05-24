"use client"
import React, { useState } from 'react'

const thumbreview = (props) => {
  const [yescolor, setyescolor] = useState("#808080");
  const [nocolor, setnocolor] = useState("#808080");

  const clickedno = () => 
  {
    setnocolor("red");
    setyescolor("#808080");
  }
  const clickedyes = () => 
  {
    setyescolor("green");
    setnocolor("#808080");
  }


  return (
    <>
    <div className='thumbimpression'>
        <div className='heading'>{props.heading}</div>
        <div className='tagline'>{props.tagline}</div>
        <div className='thumimpr'>
            <div onClick={clickedno}>
                <div><svg fill={nocolor} height="40px" width="50px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47 47"  transform="matrix(-1, 0, 0, -1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g id="Layer_1_27_"> <g> <path d="M44.732,23.195l-4.528-0.001c-1.25,0.001-2.265,1.014-2.267,2.264v19.164c0,1.252,1.017,2.266,2.267,2.266h4.528 c1.252,0,2.268-1.014,2.268-2.266v-19.16C47,24.21,45.984,23.195,44.732,23.195z M42.927,44.521 c-0.726,0.727-1.903,0.727-2.629,0s-0.726-1.902,0-2.628c0.726-0.728,1.904-0.728,2.629,0 C43.652,42.618,43.652,43.794,42.927,44.521z"></path> <path d="M29.078,9.795c0.197-2.889,0.969-4.351,1.238-7.204c0.154-1.626-1.549-2.479-4.647-2.479 c-3.098,0-4.298,2.773-4.648,3.718c-0.774,2.092,0,8.985,0,12.394c0,2.686-4.805,4.16-10.303,4.169C3.155,20.408,0,18.6,0,23.345 c0,1.642,1.013,2.973,2.265,2.972c-1.252,0-2.266,1.334-2.265,2.974c0,1.64,1.013,2.974,2.265,2.971 C1.013,32.264,0.001,33.595,0,35.233c0,1.645,1.015,2.973,2.265,2.975c-1.25-0.002-2.265,1.33-2.264,2.975 c0,1.643,1.013,2.972,2.264,2.972c0,0,3.219,0.003,15.429,0.003c12.21,0,16.671,0,16.671,0c0.625,0,1.131-0.507,1.132-1.134 V25.82c0.001-0.183-0.045-0.362-0.129-0.524C35.367,25.296,28.535,17.773,29.078,9.795z"></path> </g> </g> </g> </g></svg></div>
                <div>No</div>
            </div>
            <div onClick={clickedyes}>
                <div><svg fill={yescolor} height="40px" width="50px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47 47"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g id="Layer_1_27_"> <g> <path d="M44.732,23.195l-4.528-0.001c-1.25,0.001-2.265,1.014-2.267,2.264v19.164c0,1.252,1.017,2.266,2.267,2.266h4.528 c1.252,0,2.268-1.014,2.268-2.266v-19.16C47,24.21,45.984,23.195,44.732,23.195z M42.927,44.521 c-0.726,0.727-1.903,0.727-2.629,0s-0.726-1.902,0-2.628c0.726-0.728,1.904-0.728,2.629,0 C43.652,42.618,43.652,43.794,42.927,44.521z"></path> <path d="M29.078,9.795c0.197-2.889,0.969-4.351,1.238-7.204c0.154-1.626-1.549-2.479-4.647-2.479 c-3.098,0-4.298,2.773-4.648,3.718c-0.774,2.092,0,8.985,0,12.394c0,2.686-4.805,4.16-10.303,4.169C3.155,20.408,0,18.6,0,23.345 c0,1.642,1.013,2.973,2.265,2.972c-1.252,0-2.266,1.334-2.265,2.974c0,1.64,1.013,2.974,2.265,2.971 C1.013,32.264,0.001,33.595,0,35.233c0,1.645,1.015,2.973,2.265,2.975c-1.25-0.002-2.265,1.33-2.264,2.975 c0,1.643,1.013,2.972,2.264,2.972c0,0,3.219,0.003,15.429,0.003c12.21,0,16.671,0,16.671,0c0.625,0,1.131-0.507,1.132-1.134 V25.82c0.001-0.183-0.045-0.362-0.129-0.524C35.367,25.296,28.535,17.773,29.078,9.795z"></path> </g> </g> </g> </g></svg></div>
                <div>Yes</div>
            </div>
        </div>
    </div>
    </>
  )
}

export default thumbreview