import React from "react";
import { View, SafeAreaView } from "react-native";
import { Card, Text, Button } from "react-native-elements";
import { styles } from "./supportStyle";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";

const support = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 50,
            marginHorizontal: 30,
          }}
        >
          <Text>Enviar mensaje al soporte tecnico</Text>
          <Text>Solicitar llamada</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            marginVertical: 50,
            marginHorizontal: 30,
          }}
        >
          <Icon
            name="comment-dots"
            size={60}
            color="black"
            style={{ marginRight: "5%" }}
          />
          <Icon
            name="phone-alt"
            size={50}
            color="black"
            style={{ marginRight: "5%" }}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default support;
