import React from "react";
import workedDaysHistory from "../components/WorkedDaysHistory/workedDaysHistory"
import { createStackNavigator } from "@react-navigation/stack";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

const Stack = createStackNavigator();

const WorkedDaysHistoryContainer = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="profile"
          component={workedDaysHistory}
          options={({ navigation }) => ({
            title: "Historial laboral",
            headerStyle: {
              backgroundColor: "#F9B233",
              elevation: 0,
              shadowColor: "transparent",
            },
            headerTitleAlign: 'center',
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
            headerRight: () => (
              <Button
              type="clear"
                icon={
                  <Icon
                    name="arrow-circle-left"
                    size={35}
                    color="white"
                    style={{ marginRight: 10}}
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

export default WorkedDaysHistoryContainer;
