import {createReducer,createAction} from '@reduxjs/toolkit'
const initialState = {
    camera:false
  };

export const setCamera = createAction('setCamera')

export const Camera = createReducer(initialState,{
    [setCamera]:(state,action)=>({camera:action.payload})
}
)