import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/FontAwesome";
import { Button } from "react-native-elements";
import { View } from "react-native";
import { useSelector } from "react-redux";
import adminProfile from "../components/Profile/adminProfile";
import editPassword from "../components/EditPasswordAdmin/editPassword";

const Stack = createStackNavigator();

const ProfileContainer = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="profile"
          component={adminProfile}
          options={({ navigation }) => ({
            title: "Mi perfil",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#F9B233",
              elevation: 0,
              shadowColor: "transparent",
            },
            headerTintColor: "#774D00",
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
            headerRight: () => (
              <Button
                type="clear"
                icon={
                  <Icon
                    name="arrow-circle-left"
                    size={35}
                    color="white"
                    style={{ marginRight: 10 }}
                  />
                }
                onPress={() => navigation.goBack()}
              />
            ),
          })}
        />
        <Stack.Screen
          name="editPassword"
          component={editPassword}
          options={({ navigation }) => ({
            title: "",
            headerStyle: {
              backgroundColor: "#F9B233",
              elevation: 0,
              shadowColor: "transparent",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => (
              <Button
                type="clear"
                icon={
                  <Icon
                    name="arrow-circle-left"
                    size={35}
                    color="white"
                    style={{ marginRight: 10 }}
                  />
                }
                onPress={() => navigation.goBack()}
              />
            ),
          })}
        />
      </Stack.Navigator>
    </>
  );
};

export default ProfileContainer;
