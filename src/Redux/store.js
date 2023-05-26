import { configureStore } from "@reduxjs/toolkit";
import todoreducer from "./todoreducer";

const store = configureStore({
    reducer : {
        todos : todoreducer
    }
})
export default store