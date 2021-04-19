import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/FontAwesome";
import { Button } from "react-native-elements";
import parkedCarHistory from "../components/ParkedCarHistory/ParkedCarHistory";


const Stack = createStackNavigator();

const ParkedCarHistoryContainer = () => {
    return (
        <>
        <Stack.Navigator>
        <Stack.Screen
            name="parkedCarHistoryContainer"
            component={parkedCarHistory}
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


export default ParkedCarHistoryContainer;