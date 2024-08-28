// import React from 'react'
// import { useSelector } from 'react-redux'

// const Div = () => {


//     const backgroundColor=useSelector((state)=>state.color.backgroundColor)
//   return (
//     <div style={{width:'100px',height:'100px',backgroundColor}}>
      
//     </div>
//   )
// }

// export default Div

import React from 'react'
import { useSelector } from 'react-redux'

const Div = () => {
    const backgroundColor=useSelector((state)=>state.color.backgroundColor)
  return (
    <div style={{width:'200px',height:'200px',display:'flex-center',backgroundColor}} className='div'>
      
    </div>
  )
}

export default Div

