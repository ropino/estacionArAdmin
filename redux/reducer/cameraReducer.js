import {createReducer,createAction} from '@reduxjs/toolkit'

export const setCamera = createAction('setCamera')

export const Camera = createReducer([],{
    [setCamera]:(state,action)=>action.payload}
)