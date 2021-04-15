import { createReducer } from "@reduxjs/toolkit";

//importamos las Actions
import {
  logUser,
  signOutUser,
  setUserLogged,
  setUserTime,
  getUserTime,
  addNewParking,
  getUserInfo,
  getParkingHistoryInfo,
  setUserCredit
} from "./userActions";

const initialState = {
  user: null,
  recovery:null,
  recovery: null,
  time: 0,
  credit: 0,
  parkingHistory: [],
  // allParkingHistory: [],
};

export const userReducer = createReducer(initialState, {
  [logUser.fulfilled]: (state, action) => {
    return { ...state, user: action.payload };
  },
  [signOutUser.fulfilled]: (state, action) => {
    return { ...state, user: action.payload };
  },
  [setUserLogged]: (state, action) => {
    return { ...state, user: action.payload };
  },
  [setUserTime.fulfilled]: (state, action) => {
    return { ...state, time: action.payload };
  },
  [getUserTime.fulfilled]: (state, action) => {
    return { ...state, time: action.payload };
  },
  [addNewParking.fulfilled]: (state, action) => {
    if(action.payload !== undefined) return { ...state, parkingHistory: [...state.parkingHistory, action.payload] }
  },
  [getUserInfo.fulfilled]: (state, action) => {
    const {credit, parkingHistory, time, id, allParkingHistory} = action.payload;
    return {...state, credit, parkingHistory, time, user: id, allParkingHistory}
  },
  // [getParkingHistoryInfo.fulfilled]: (state, action) => {
  //   return { ...state, allParkingHistory: action.payload }
  // },
});
