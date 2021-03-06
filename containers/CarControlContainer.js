import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/FontAwesome";
import { Button } from "react-native-elements";
import carControl from "../components/CarControl/carControl";
import CarControl from "../components/CarControl/carControl";

const Stack = createStackNavigator();

const CarControlContainer = () => {


  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="carControl"
          component={carControl}
          options={({ navigation }) => ({
            title: "Vehículos estacionados",
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
      </Stack.Navigator>
    </>
  );
};

export default CarControlContainer;
