import {
    createAsyncThunk,
    createAction,
  } from "@reduxjs/toolkit";
  
  //importamos Firebase
  import firebase from "../../back/db/firebase";
import { DatePickerIOS } from "react-native";
  
  export const addNewCar = createAsyncThunk(
    "addNewCar",
    ({ owner, marca, modelo, año, patente }) => {
      return (
        firebase.db
          .collection("users")
          .doc(`${owner}`)
          .collection("CARS")
          .doc(`${patente}`)
          .set({
            marca,
            modelo,
            año,
            patente,
          })
          .then(() => {
            console.log("----AUTO CREADO----");
            return {
              marca,
              modelo,
              año,
              patente
            }
            
          })
          .catch((error) => alert("AUTO NO AGREGADO", error.message))
      );
    }
  );
  export const updateCar = createAsyncThunk(
    "updateCar",
    ({ owner, marca, modelo, año, patente }) => {
      return (
        firebase.db
          .collection("users")
          .doc(`${owner}`)
          .collection("CARS")
          .doc(`${patente}`)
          .update({
            marca,
            modelo,
            año,
            patente,
          })
          .then(() => {
            console.log("----AUTO UPDATEADO----");
            return {
              marca,
              modelo,
              año,
              patente
            }
            
          })
          .catch((error) => alert("AUTO NO UPDATEADO", error.message))
      );
    }
  );
  
  
  export const getUserCars = createAction("getUserCars");
  
  export const getAllCars = (dispatch, user) => {
    return new Promise((resolve,reject)=> firebase.db
      .collection("users")
      .doc(`${user}`)
      .collection('CARS')
      .get()
      .then((querySnap) => {
        const userCars=[]
        querySnap.forEach((doc) => {
          userCars.push(doc.data())
          return userCars
          });
        dispatch(getUserCars(userCars))
        resolve(userCars)
      })
      .catch((err) => {
        console.log(err)
      reject()}
      ))
  };
  
  export const deleteCar = createAction("deleteCar");
  
  export const deleteOneCar = (user,patente,dispatch) => {
  return firebase.db
    .collection("users")
    .doc(`${user}`)
    .collection('CARS')
    .doc(`${patente}`) 
    .delete()
      .then(() => {
        console.log('se borro el documento')
        dispatch(deleteCar(patente))
      })
      .catch((err) => console.log(err));
  }


  export const selectedCar = createAction('selectCar')
  

  
  