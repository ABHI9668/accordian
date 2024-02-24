import React, { useState } from 'react'
import "../App.css";

const Accordian = () => {

   const[isopen,SetIsopen] =useState(false);
   const[isopen1,SetIsopen1] =useState(false);
   const[isopen2,SetIsopen2] =useState(false);
   const[isopen3,SetIsopen3] =useState(false);
   const[isopen4,SetIsopen4] =useState(false);

   const toggleAccordian =()=>{
    SetIsopen(!isopen)
    SetIsopen1(false)
    SetIsopen2(false)
    SetIsopen3(false)
    SetIsopen4(false)
   }
   const toggleAccordian1 =()=>{
    SetIsopen1(!isopen1)
    SetIsopen(false)
    SetIsopen2(false)
    SetIsopen3(false)
    SetIsopen4(false)
   }
   const toggleAccordian2 =()=>{
    SetIsopen2(!isopen2)
    SetIsopen(false)
    SetIsopen1(false)
    SetIsopen3(false)
    SetIsopen4(false)
   }
   const toggleAccordian3 =()=>{
    SetIsopen3(!isopen3)
    SetIsopen(false)
    SetIsopen1(false)
    SetIsopen4(false)
    SetIsopen2(false)
   }
   const toggleAccordian4 =()=>{
    SetIsopen4(!isopen4)
    SetIsopen(false)
    SetIsopen1(false)
    SetIsopen2(false)
    SetIsopen3(false)
   }
  return (
    <div>
      <h2>Food Accordian</h2>
         <button onClick={toggleAccordian}>Chinese Food 🔽</button>
          {
            isopen && (
                <div>
                    <span className='accordian-content'>Chowmein</span><br />
                    <span className='accordian-content'>Chilly Potato</span><br />
                    <span className='accordian-content'>Momos</span>
                </div>
            )
          }
           <br />
          <button onClick={toggleAccordian1}>South Indian&nbsp;&nbsp; 🔽</button>
          {
            isopen1 && (
                <div>
                    <span className='accordian-content'>Dosa</span><br />
                    <span className='accordian-content'>Idli</span><br />
                    <span className='accordian-content'>Vada</span>
                </div>
            )
          }
          <br />
          <button onClick={toggleAccordian2}>Punjabi Food&nbsp;&nbsp;🔽</button>
          {
            isopen2 && (
                <div>
                    <span className='accordian-content'>Chicken</span><br />
                    <span className='accordian-content'>Saag</span><br />
                    <span className='accordian-content'>Lassi</span>
                </div>
            )
          }
           <br />
          <button onClick={toggleAccordian3}>Street Food&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🔽</button>
          {
            isopen3 && (
                <div>
                    <span className='accordian-content'>Burger</span><br />
                    <span className='accordian-content'>Pakoda</span><br />
                    <span className='accordian-content'>Samosa</span>
                </div>
            )
          }
           <br />
          <button onClick={toggleAccordian4}>Healthy Food&nbsp;&nbsp;&nbsp;🔽</button>
          {
            isopen4 && (
                <div>
                    <span className='accordian-content'>Dal</span><br />
                    <span className='accordian-content'>Roti</span><br />
                    <span className='accordian-content'>Rice</span>
                </div>
            )
          }
    </div>
  )
}

export default Accordian


