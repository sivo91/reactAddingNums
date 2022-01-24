import { useState } from 'react'


function Header () {
  
  const [count, setCount] = useState(0)

  const addnum = () => {
    setCount(count+1)
  }

  const subtract = () => {
    setCount(count-1)
  }

const reset = () => {
  setCount(0)
}

const time2 = () => {
  setCount(count * 2)
}


  return (
     <section className='Main'>
         <h1>Drilling useState + e</h1>
         <section>

           <button 
              style={(count < 0 ) ? {backgroundColor:'red', color:'white'} : {backgroundColor:'white'}}
              className='btns'
              onClick={()=>subtract()}>-</button>

           <span className='zero'>{count}</span>

            <button 
               style = {(count >= 1) ? {backgroundColor:'green',color:'white'} : {backgroundColor : 'white'}}
               className='btns'
               onClick={()=>addnum()}
               >+</button>

            <button 
            className='btns'
            onClick={()=>time2()}
            >double</button>

         </section>
         <button className='btns' onClick={()=>reset()}>reset</button>
     </section>
  )
}




export default Header