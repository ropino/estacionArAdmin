import React from "react";
import {
  View,
  SafeAreaView,
  ScrollView,
  _ScrollView,
  TextInput,
} from "react-native";
import { Card, Text, Button, Input } from "react-native-elements";
import { styles } from "./supportStyle";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";

const support = () => {
  return (
    <>
      {/* <ScrollView> */}
      <SafeAreaView style={styles.container}>
        <Card containerStyle={styles.card}>
          <Text style={styles.title}>
            ¿Necesitas comunicarte con el soporte técnico?
          </Text>
        </Card>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 30,
          }}
        >
          <Icon
            name="comment-dots"
            size={60}
            color="#f9b233"
            style={{ marginRight: "5%" }}
            onPress= {()=>message  }
          />
        </View>
        <Text style={styles.title2}>Enviar mensaje</Text>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 30,
          }}
        >
          <Icon
            name="phone-alt"
            size={50}
            color="#f9b233"
            style={{ marginRight: "5%", marginBottom: 8 }}
          />
        </View>
        <Text style={styles.title2}>Solicitar llamada</Text>
        {/* Esto es para cuando elija la opción del mensaje */}
        <Card
          containerStyle={{
            width: "90%",
            backgroundColor: "black",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            borderColor: "#f9b233",
            borderWidth: 2,
          }}
        >
          <TextInput
            placeholder="Asunto"
            style={{
              color: "#f9b233",
              fontSize: 22,
              borderBottomWidth: 1,
              borderBottomColor: "grey",
              marginBottom: 15,
            }}
            maxLength={50}
          />
          <TextInput
            placeholder="Mensaje"
            style={{ color: "#f9b233", fontSize: 18  }}
            multiline
            numberOfLines={4}
            maxLength={250}
          />
          <Icon
            name="paper-plane"
            size={25}
            color="#f9b233"
            style={{
              marginRight: "8%",
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "8%",
            }}
          />
        </Card>
        {/* -------------------------------------------------- */}
      </SafeAreaView>
      {/* </ScrollView> */}
    </>
  );
};

export default support;
