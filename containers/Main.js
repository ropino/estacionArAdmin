import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation, NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator, DrawerItem } from "@react-navigation/drawer";
import { drawerItemsMain } from "./Drawer/DrawerItemsMain";
import CustomDrawerContent from "./Drawer/Drawer";
import { HomeContainer } from "./HomeContainer";
import Login from "../components/Login/Login";
import ProfileContainer from "./ProfileContainer";
import CarControlContainer from "./CarControlContainer";
import CarReportContainer from "./CarReportContainer";
import parkedCarHistory from "../components/ParkedCarHistory/ParkedCarHistory";
import WorkedDaysHistoryContainer from "./WorkedDaysHistoryContainer";
import ParkedCarHistoryContainer from "./ParkedCarHistoryContainer";
import SupportContainer from "./SupportContainer";
import firebase from "../back/db/firebase";
import { setAdminLogged, setAdminInfo } from "../redux/reducer/adminActions";

const Drawer = createDrawerNavigator();

const Main = () => {
  const { adminId } = useSelector((state) => state.adminReducer);
  const dispatch = useDispatch();

  const getAdminInfoNow = (id) => {
    firebase.db
      .collection("admin")
      .doc(`${id}`)
      .onSnapshot((querySnap) => {
        dispatch(setAdminInfo(querySnap.data()));
      });
  };

  useEffect(() => {
    adminId && getAdminInfoNow(adminId)
  },[adminId]);

  useEffect(() => {
    firebase.auth.onAuthStateChanged((loggedAdmin) => {
      if (loggedAdmin) {
        dispatch(setAdminLogged(loggedAdmin.uid));
      }
    });
  }, []);

  return (
    <Drawer.Navigator
      initialRouteName="home" // original "home"
      drawerContent={(props) => (
        <CustomDrawerContent drawerItems={drawerItemsMain} {...props} />
      )}
    >
      <Drawer.Screen name="login" component={Login} />
      <Drawer.Screen name="home" component={HomeContainer} />
      <Drawer.Screen name="profile" component={ProfileContainer} />

      <Drawer.Screen name="carControl" component={CarControlContainer} />
      <Drawer.Screen
        name="parkedCarHistoryContainer"
        component={ParkedCarHistoryContainer}
      />

      <Drawer.Screen name="carReport" component={CarReportContainer} />
      <Drawer.Screen
        name="WorkedDaysHistoryContainer"
        component={WorkedDaysHistoryContainer}
      />
      <Drawer.Screen name="support" component={SupportContainer} />
    </Drawer.Navigator>
  );
};

export default Main;
