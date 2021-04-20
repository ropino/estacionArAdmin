import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import {userReducer} from "./reducer/userReducer"
import {carReducer} from "./reducer/carReducer"
import {Camera} from "./reducer/cameraReducer"

const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    reducer: {
        userReducer,
        carReducer,
        Camera
    },
  });
  
  export default store;

