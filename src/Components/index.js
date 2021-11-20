import React from 'react'
import { AiOutlinePlusSquare } from "react-icons/ai"
import { AiOutlineMinusSquare } from "react-icons/ai"
import "./index.css"
import {useState} from "react"

function Counter () {

    const [count,setCount]=useState(0)

    const onPlus=()=>{
       setCount(prevCount=>prevCount+3)
    }
    const onMinus=()=>{
        setCount(prevCount=>prevCount-3)
    }
    
        return (

            <div className="main-container">
            <div className="card">
                <h1 className="heading">Counter</h1>
             <div className="Cont">
               
             < AiOutlineMinusSquare className="plus" onClick={onMinus}/>
                
                <p className="item">{count}</p>
               
               <AiOutlinePlusSquare onClick={onPlus} className="plus"/>
              
               </div>
               </div>
            </div>
        )
    
   
}

export default Counter
