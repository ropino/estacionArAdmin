import { createReducer } from "@reduxjs/toolkit";

//importamos las Actions
import {
  logAdmin,
  getUserAdmin,
  signOutAdmin
} from "./adminActions";

const initialState = {
  adminId: {},
  adminInfo: {},
};

export const adminReducer = createReducer(initialState, {
  [logAdmin.fulfilled]: (state, action) => {
    return { ...state, adminId: action.payload };
  },
  [getUserAdmin.fulfilled]: (state, action) => {
    return { ...state, adminInfo: action.payload };
  },
  [signOutAdmin.fulfilled]: (state, action) => {
    return { ...state, user: action.payload };
  },
});
