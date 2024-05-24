"use client"
import React, { useState } from 'react';
import Fivestar from "./components/Fivestar";
import Thumbreview from "./components/Thumbreview";
import Link from 'next/link';

const page = () => {

  const [review_container_state, setreview_container_state] = useState("noreview_container")

  const submitreview=()=>
    {
      alert("Review Submitted"); 
    }

  const goto_review=()=>
    {
      setreview_container_state("review_container");
    }

  const cancel_review=()=>
    {
      setreview_container_state("noreview_container");
    }

  return (
    <>

    <button onClick={goto_review}>Do a Review</button>

    <div className={review_container_state}>
      <div className='crossicon' onClick={cancel_review}><svg fill="#000000" height="28px" width="30px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490 490"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 489.292,457.678 277.331,245.004 489.292,32.337 "></polygon> </g></svg></div>
      <div className='superheading'>Leave a review</div>
      <Fivestar heading="Safety" tagline="what do you think about the safety?"></Fivestar>
      <Fivestar heading="Communication" tagline="What do you think about the communication?"></Fivestar>
      <Thumbreview heading="Would you Recommend Trausti?" tagline="Give a Thumb-up or Thumb-down Impression. :)"></Thumbreview>
      <div className='submitreview'><button onClick={submitreview}>Submit</button></div>
    </div>
    </>
  )
}

export default page