import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import {userReducer} from "./reducer/userReducer"
import {carReducer} from "./reducer/carReducer"

const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    reducer: {
        userReducer,
        carReducer
    },
  });
  
  export default store;

