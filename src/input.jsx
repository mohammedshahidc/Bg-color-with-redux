// import React, { useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { setColor } from './colorslice'

// const Input = () => {
//     const [name,setname]=useState('')
//     const dispatch=useDispatch()

//     const handelChange=(e)=>{
//         setname(e.target.value)
//     }
//     const handleSubmit=()=>{
//         dispatch(setColor(name))
//     }
//   return (
//     <div>

//         <input type="text" value={name} onChange={handelChange}/>
//         <button onClick={handleSubmit}>submit</button>
      
//     </div>
//   )
// }

// export default Input

import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setcolor } from './colorslice'


const Input = () => {
    const[name,setName]=useState("")
 const dispatch=useDispatch()
    const handelChange=(e)=>{
        setName(e.target.value)
    }
    const handleSubmit=()=>{

        dispatch(setcolor(name))
    }
  return (
    <div  className='inp'>
      <input type="text" value={name} onChange={handelChange} placeholder='type any color'/>
      <button onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default Input

