import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import carReport from "../components/CarReport/carReport"

const Stack = createStackNavigator();

const carReportContainer = () => {
    return (
        <>
           <Stack.Navigator>
        <Stack.Screen
          name="profile"
          component={carReport}
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

export default carReportContainer;