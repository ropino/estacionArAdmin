import { createAsyncThunk, createAction } from "@reduxjs/toolkit";

//importamos Firebase
import firebase from "../../back/db/firebase";

export const signOutAdmin = createAsyncThunk("signOut", () => {
  return firebase.auth
    .signOut()
    .then(() => {
      console.log("sali");
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

export const logAdmin = createAsyncThunk("logAdmin", ({ email, password }) => {
  return firebase.auth
    .signInWithEmailAndPassword(email, password)
    .then((cred) => {
        return cred.user.uid;
    })
    .catch((error) => {
      throw new Error(error);
    });
});


export const getUserAdmin = createAsyncThunk("getUserAdmin", (adminId) => {
  return firebase.db
  .collection('admin')
  .doc(`${adminId}`)
  .get()
  .then(querySnap => console.log(`esta es la querySnapData(): ${querySnap.data().uid}`) )
  .catch(() => console.log('Error en recibir info de user'))
})

export const logOutAdmin = createAction('logOutAdmin')

export const setAdminLogged = createAction("adminLogged");

export const setAdminInfo = createAction("setAdminInfo")

export const goWork = createAction("goWork")