"use client"
import React, { useState } from 'react'

const Review = (props) => {

    let [rating, setrating] = useState(0);

    const star = (e) => {
        setrating(e.target.getAttribute("value"));
    }

  return (
    <>
    <div className='review_b'>
        <div className='heading'>{props.heading}</div>
        <div className='tagline'>{props.tagline}</div>
        <div className='stars'>
            <span onClick={star} value="1" style={{color:rating>=1? "#FFBF00":"grey"}}>★</span>
            <span onClick={star} value="2" style={{color:rating>=2? "#FFBF00":"grey"}}>★</span>
            <span onClick={star} value="3" style={{color:rating>=3? "#FFBF00":"grey"}}>★</span>
            <span onClick={star} value="4" style={{color:rating>=4? "#FFBF00":"grey"}}>★</span>
            <span onClick={star} value="5" style={{color:rating>=5? "#FFBF00":"grey"}}>★</span>
        </div>
    </div>
    </>
  )
}

export default Review