import React, { useEffect } from "react";
import { useNavigation, NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator, DrawerItem } from "@react-navigation/drawer";
import { drawerItemsMain } from "./Drawer/DrawerItemsMain"
import CustomDrawerContent from './Drawer/Drawer';
import { HomeContainer } from "./HomeContainer"
import Login from "../components/Login/Login"
import ProfileContainer from "./ProfileContainer"
import CarReportContainer from "./CarReportContainer"
import workedDaysHistory from "../components/WorkedDaysHistory/workedDaysHistory"
import WorkedDaysHistoryContainer from "./WorkedDaysHistoryContainer"

const Drawer = createDrawerNavigator();

const Main = () => {
  return (
    <Drawer.Navigator
      initialRouteName="home" // original "home"
      drawerContent={(props) => (
        <CustomDrawerContent drawerItems={drawerItemsMain} {...props} />
      )}>
        <Drawer.Screen name="login" component={Login} />
        <Drawer.Screen name="home" component={HomeContainer} />
        <Drawer.Screen name="profile" component={ProfileContainer} />
        <Drawer.Screen name="carReport" component={CarReportContainer} />
        <Drawer.Screen name="WorkedDaysHistoryContainer" component={WorkedDaysHistoryContainer} />
    </Drawer.Navigator>
  );
};

export default Main;
