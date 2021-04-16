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
        </Stack.Navigator>
        </>
    );
};


export default CarControlContainer;