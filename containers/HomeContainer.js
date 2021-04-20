import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import Login from "../components/login/Login";
// import SignUp from "../components/SignUp/SignUp";
import { Home } from "../components/Home/Home";
import Icon from "react-native-vector-icons/FontAwesome";
import { Button } from "react-native-elements";
import { View } from "react-native";
import { useSelector } from "react-redux";
import Login from "../components/Login/Login"

const Stack = createStackNavigator();

export const HomeContainer = () => {
    const { adminId } = useSelector((state)=>state.adminReducer)
  console.log("ADMIN ID DE HOME C", adminId)
    return (
      <Stack.Navigator>
        {!adminId ? (
          <Stack.Screen
          name="Iniciar Sesion"
          component={Login}
          options={{
            title: "",
            headerTransparent: true,
          }}
        />
        ) : (
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
        )}
      </Stack.Navigator>
    );
  };
  