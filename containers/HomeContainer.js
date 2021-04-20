import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import Login from "../components/login/Login";
// import SignUp from "../components/SignUp/SignUp";
import { Home } from "../components/Home/Home";
import Icon from "react-native-vector-icons/FontAwesome";
import { Button } from "react-native-elements";
import { View } from "react-native";
import { useSelector } from "react-redux";

const Stack = createStackNavigator();

export const HomeContainer = () => {
    // let userInTheApp = useSelector((state) => state.userReducer);
  
    return (
      <Stack.Navigator>
          <Stack.Screen
            name="home"
            component={Home}
            options={({ navigation }) => ({
              title: "",
              headerStyle: {
                backgroundColor: "black",
                 elevation: 0,
                 shadowColor: 'transparent',
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
              headerLeft: () => (
                <Button
                  type="clear"
                  icon={
                    <Icon
                      name="bars"
                      color="white"
                      style={{ marginRight: 10 }}
                      size={30}
                    />
                  }
                  onPress={() => {
                    navigation.toggleDrawer();
                  }}
                />
              ),
            })}
        />
        {/* {!userInTheApp.user ? (
          <>
            <Stack.Screen
              name="Iniciar Sesion"
              component={Login}
              options={{
                title: "",
                headerTransparent: true,
              }}
            />
  
            <Stack.Screen
              name="Registrate"
              component={SignUp}
              options={{
                title: "",
                headerStyle: {
                  backgroundColor: "#F9B233",
                  elevation: 0,
              shadowColor: 'transparent',
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                  fontWeight: "bold",
                },
              }}
            />
          </>
        ) : (
          <Stack.Screen
            name="drawer"
            component={Home}
            options={({ navigation }) => ({
              title: "",
              headerStyle: {
                backgroundColor: "black",
                // borderBottomWidth: 0,
                 elevation: 0,
                 shadowColor: 'transparent',
                // shadowOffset: { height: 0, width: 0 },
                // headerHideShadow: true,
                // headerTransparent: true,
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
              headerLeft: () => (
                <Button
                  type="clear"
                  icon={
                    <Icon
                      name="bars"
                      color="white"
                      style={{ marginRight: 10 }}
                      size={30}
                    />
                  }
                  onPress={() => {
                    navigation.toggleDrawer();
                  }}
                />
              ),
            })}
          />
        )} */}
      </Stack.Navigator>
    );
  };
  