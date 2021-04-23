import { createReducer } from "@reduxjs/toolkit";

//importamos las Actions
import {
  logAdmin,
  getUserAdmin,
  signOutAdmin,
  logOutUser,
  setAdminLogged,
  setAdminInfo,
  goWork
} from "./adminActions";

export const initialState = {
  adminId: '',
  adminInfo: {},
  isWorking: null,
};

export const adminReducer = createReducer(initialState, {
  [logAdmin.fulfilled]: (state, action) => {
    return { ...state, adminId: action.payload };
  },
  [getUserAdmin.fulfilled]: (state, action) => {
    return { ...state, adminInfo: action.payload };
  },
  [signOutAdmin.fulfilled]: (state, action) => {
    return { ...state, adminId: action.payload };
  },
  [logOutUser]:(state,action)=>{
    return {...state, adminInfo:{}}
  },
  [setAdminLogged]: (state, action) => {
    return { ...state, adminId: action.payload };
  },
  [setAdminInfo]:(state,action)=>{
    return {...state, adminInfo: action.payload}
  },
  [goWork]:(state,action)=>{
    console.log(action.payload)
    return {...state, isWorking: action.payload}
  },
});
