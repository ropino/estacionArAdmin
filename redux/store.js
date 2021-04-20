import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import {adminReducer} from "./reducer/adminReducer"
import {carReducer} from "./reducer/carReducer"
import {Camera} from "./reducer/cameraReducer"

const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    reducer: {

        Camera,
        adminReducer,
        carReducer

    },
  });
  
  export default store;

