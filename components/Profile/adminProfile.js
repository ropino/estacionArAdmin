import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  View,
  Alert,
  SafeAreaView,
  ActivityIndicator,
  KeyboardAvoidingView,
  ImageBackground,
  ScrollView
} from "react-native";
import { Button, Input, Card, Image, Text } from "react-native-elements";
import { styles } from "./adminProfileStyle";
import { useNavigation } from "@react-navigation/native";


const adminProfile = (props) => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Card containerStyle={styles.input}>
          <Input
            label="Nombre"
            name="name"
            // placeholder={userInfo ? userInfo.name : ""}
            inputStyle={styles.colorInput}
            // value={input.name}
          />
          <Input
            label="Apellido"
            name="lastname"
            // placeholder={userInfo ? userInfo.lastname : ""}
            inputStyle={styles.colorInput}
            // value={input.lastname}
          />
          <Input
            label="DNI"
            name="dni"
            // placeholder={userInfo ? userInfo.name : ""}
            inputStyle={styles.colorInput}
            // value={input.name}
          />
          <Input
            label="Email"
            name="email"
            type="email"
            // value={userInfo ? userInfo.email : ""}
            disabled={true}
            inputStyle={styles.colorInput}
          />
          <Input
            label="Telefono"
            name="telefono"
            // placeholder={userInfo ? userInfo.name : ""}
            inputStyle={styles.colorInput}
            // value={input.name}
          />
          <Input
            label="Direccion"
            name="direccion"
            // placeholder={userInfo ? userInfo.name : ""}
            inputStyle={styles.colorInput}
            // value={input.name}
          />
        </Card>
        <View style={styles.fixToText}>
          <Button
            buttonStyle={styles.colores}
            title="Solicitar actualizacion de datos"
          ></Button>
          <Button
            buttonStyle={styles.colores}
            title="Historial de días trabajados"
            onPress={() => navigation.navigate("workedDaysHistory")}
          ></Button>
        </View>
        <View style={styles.signin}>
          <Button
            type="clear"
            title="¿Desea modificar su contraseña?"
            titleStyle={styles.clearButton}
          ></Button>
        </View>

        {/* <View style={styles.imagen}>
          <ImageBackground
          style={styles.stretch}
          source={{
            uri: "https://i.postimg.cc/mrWQN3x1/logo-final-8.png",
          }}
          />
        </View> */}
      </SafeAreaView>
    </ScrollView>
  );
};

export default adminProfile;
