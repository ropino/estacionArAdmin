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
    const [selectCall, setSelectCall] = React.useState(false)
    const [selectMessage, setSelectMessage] = React.useState(true)

    const wantMessage = () => {
        setSelectMessage(true)
        setSelectCall(false)
    }

    const wantCall = () => {
        setSelectCall(true)
        setSelectMessage(false)
    }



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
          style={styles.message}
        >
          <Icon
            name="comment-dots"
            size={60}
            color="#f9b233"
            style={{ marginRight: "5%" }}
            onPress= {()=>wantMessage()}
          />
        </View>
        <Text style={styles.title2}>Enviar mensaje</Text>

        <View
          style={styles.message}
        >
          <Icon
            name="phone-alt"
            size={50}
            color="#f9b233"
            style={{ marginRight: "5%", marginBottom: 8 }}
            onPress= {()=>wantCall()}
          />
        </View>
        <Text style={styles.title2}>Solicitar llamada</Text>

          {selectMessage ? (
        <Card
          containerStyle={styles.card1}
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
        ) : (
        <Card
        containerStyle={styles.card1}
        >
          <TextInput
            placeholder="Asunto"
            style={{
              color: "#f9b233",
              fontSize: 22,
              marginBottom: 15,
            }}
            maxLength={50}
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
        )}
        

        
      </SafeAreaView>
      {/* </ScrollView> */}
    </>
  );
};

export default support;
