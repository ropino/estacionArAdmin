import React from "react";
import support from "../components/Support/support"
import { createStackNavigator } from "@react-navigation/stack";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

const Stack = createStackNavigator();

const SupportContainer = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="support"
          component={support}
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

export default SupportContainer;
