// import { configureStore } from "@reduxjs/toolkit";
// import colorslice from "./colorslice";

// const store=configureStore({
//     reducer:{
//         color:colorslice
//     }
   
// })
// export default store


import { configureStore } from "@reduxjs/toolkit";
import colorslice from "./colorslice";


const store=configureStore({
    reducer:{
        color:colorslice
    }
})
export default store