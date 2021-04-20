import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import {adminReducer} from "./reducer/adminReducer"
import {carReducer} from "./reducer/carReducer"

const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    reducer: {
        adminReducer,
        carReducer
    },
  });
  
  export default store;

