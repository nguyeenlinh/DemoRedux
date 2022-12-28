// import { configureStore } from '@reduxjs/toolkit'

// export const store = configureStore({
//   reducer: {},
// })
import { createStore } from "redux";
import rootReduce from "./reducer";

const store = createStore(rootReduce);

export default store;