import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Alert, SafeAreaView, ActivityIndicator } from "react-native";
import { Button, Input, Card, Image, Text } from "react-native-elements";
import { validatePassword } from "../../utils/validations";
import firebase from "../../back/db/firebase";
import { styles } from "./editPasswordStyle";

const editPassword = (props) => {
  const dispatch = useDispatch();
  const {adminId} = useSelector((state) => state.adminReducer);
  const {adminInfo} = useSelector((state) => state.adminReducer);
  const admin = firebase.firebase.auth().currentUser
  const [errorPassword, setErrorPassword] = useState("");
  const [errorPassword2, setErrorPassword2] = useState("");
  const [isOkPassword, setIsOkPassword] = useState(false);
  const [isOkPassword2, setIsOkPassword2] = useState(false);
  const [password, setPassword] = useState("");
  const [repeatPassword, setrepeatPassword] = useState("");
  let everythingIsOk = false;

  const [input, setInput] = useState({
    password: "",
    password2: "",
  });

  const editPasswordAdmin = () => {
    const { password } = input
    admin.updatePassword(password).then(() => {
      console.log('Updateo de password correcto');
    })
    .catch((err) => console.log('Error en updateo de password', err))
    setInput({
      password: "",
      password2: "",
    })
  };

  const handleChangeText = (name, value) => {
    setInput({ ...input, [name]: value });
  };

  const onBlurValidatePassword = (e) => {
    if (validatePassword(e) !== false) {
      setIsOkPassword(true);
      setPassword(e);
    } else {
      setErrorPassword("ingresa una contraseña de mas de 6 caracteres");
    }
  };

  const onBlurValidatePassword2 = (e) => {
    if (validatePassword(e) !== false) {
      setIsOkPassword2(true);
      setrepeatPassword(e);
    } else {
      setErrorPassword2("ingresa una contraseña de mas de 6 caracteres");
    }
  };

  const isOkFunction = () => {
    return (everythingIsOk =
      isOkPassword && isOkPassword2 && password == repeatPassword);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Card containerStyle={styles.input}>
        <Input
          label="Contraseña"
          name="password"
          secureTextEntry={true}
          placeholder="*********"
          inputStyle={styles.colorInput}
          onChangeText={(value) => handleChangeText("password", value)}
          onBlur={(e) => {
            onBlurValidatePassword(e.nativeEvent.text);
          }}
          errorMessage={!isOkPassword && errorPassword}
          value={input.password}
        />
        <Input
          label="Repetir contraseña"
          placeholder="*********"
          secureTextEntry={true}
          inputStyle={styles.colorInput}
          onChangeText={(value) => handleChangeText("password2", value)}
          onBlur={(e) => {
            onBlurValidatePassword2(e.nativeEvent.text);
          }}
          errorMessage={
            (!isOkPassword2 && errorPassword2) ||
            (password != repeatPassword && "las contraseñas no coinciden")
          }
          value={input.password2}
        />
      </Card>
      <View style={styles.fixToText}>
        <Button
          disabled={!isOkFunction()}
          buttonStyle={styles.colores}
          title="Guardar cambios"
          onPress={() => {
            editPasswordAdmin();
            props.navigation.goBack();
          }}
        ></Button>
      </View>
      <View style={styles.fixToText}>
      </View>
      <View style={styles.imagen}>
        <Image
          style={styles.stretch}
          source={{
            uri: "https://i.postimg.cc/mrWQN3x1/logo-final-8.png",
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default editPassword;
