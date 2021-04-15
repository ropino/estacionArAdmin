import { createReducer } from "@reduxjs/toolkit";
import {addNewCar, getUserCars, deleteCar, updateCar, addNewParking,selectedCar} from "./carActions"

const initialState = {
  allUserCars: [],
  selectCar:{}
};



export const carReducer = createReducer(initialState, {
  [addNewCar.fulfilled]: (state, action) => {
    return { ...state, allUserCars: [...state.allUserCars, action.payload] };
  },
  [getUserCars]: (state, action) => {
    return { ...state, allUserCars: action.payload };
  },
  [deleteCar]: (state, action) => {
    return {
      ...state,
      allUserCars: state.allUserCars.filter(
        (car) => car.patente != action.payload
      ),
    };
  },
  [updateCar.fulfilled]: (state, action) => {
    return { ...state, allUserCars: [...state.allUserCars.filter(car=> car.patente!=action.payload.patente),action.payload] };
  },
  [selectedCar]:(state,action)=>{
    return {...state,selectCar: action.payload}
  }
  
});
