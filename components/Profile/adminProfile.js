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
  const {adminInfo} = useSelector((state) => state.adminReducer);


  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Card containerStyle={styles.input}>
          <Input
            label="Nombre"
            name="name"
            placeholder={adminInfo ? adminInfo.name : ""}
            inputStyle={styles.colorInput}
            disabled={true}
          />
          <Input
            label="Apellido"
            name="lastname"
            placeholder={adminInfo ? adminInfo.lastname : ""}
            inputStyle={styles.colorInput}
            disabled={true}
          />
          <Input
            label="DNI"
            name="dni"
            disabled={true}
            placeholder={adminInfo ? adminInfo.dni: ""}
            inputStyle={styles.colorInput}
          />
          <Input
            label="Email"
            name="email"
            type="email"
            disabled={true}
            placeholder={adminInfo ? adminInfo.email : ""}
            inputStyle={styles.colorInput}
            // onChangeText={value => handleChangeText("email", value)}
            // value={input.email}
          />
          <Input
            label="Telefono"
            name="telefono"
            disabled={true}
            // placeholder={userInfo ? userInfo.name : ""}
            inputStyle={styles.colorInput}
            // value={input.phone}
            // onChangeText={value => handleChangeText("phone", value)}
          />
          <Input
            label="Direccion"
            name="direccion"
            disabled={true}
            // placeholder={userInfo ? userInfo.name : ""}
            inputStyle={styles.colorInput}
            // onChangeText={value => handleChangeText("adress", value)}
            // value={input.adress}
          />
        </Card>
        <View style={styles.fixToText}>
          <Button
            buttonStyle={styles.colores}
            title="Solicitar actualización de datos"
            onPress={()=>navigation.navigate("support")}
          ></Button>
          <Button
            buttonStyle={styles.colores}
            title="Historial de días trabajados"
            onPress={()=>navigation.navigate("WorkedDaysHistoryContainer")}

          ></Button>
        </View>
        <View style={styles.signin}>
          <Button
            type="clear"
            title="¿Desea modificar su contraseña?"
            titleStyle={styles.clearButton}
            onPress={() => {
              navigation.navigate("editPassword");
            }}
          ></Button>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default adminProfile;
