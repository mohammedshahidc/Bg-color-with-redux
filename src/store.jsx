
import { configureStore } from "@reduxjs/toolkit";
import colorslice from "./colorslice";
import productslice from "./productslice";

const store = configureStore({
    reducer: {
        color: colorslice,
        product:productslice
    }
})
export default store