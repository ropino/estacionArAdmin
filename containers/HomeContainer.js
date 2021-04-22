import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../components/Login/Login";
import { Home } from "../components/Home/Home";
import Icon from "react-native-vector-icons/FontAwesome";
import { Button } from "react-native-elements";
import { View } from "react-native";
import { useSelector } from "react-redux";

const Stack = createStackNavigator();

export const HomeContainer = () => {
     let {adminInfo} = useSelector((state) => state.adminReducer);
     console.log(!adminInfo.email)
     console.log(adminInfo.email)
  
    return (
      <Stack.Navigator>
          
         {!adminInfo.email? (
          <>
            <Stack.Screen
              name="Iniciar Sesion"
              component={Login}
              options={{
                title: "",
                headerTransparent: true,
              }}
            />
  
          
          </>
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
  