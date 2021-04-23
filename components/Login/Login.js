import React, { useState, createRef } from "react";
import {
  View,
  Alert,
  SafeAreaView,
  ActivityIndicator,
  Modal,
  Text,
  Pressable,
} from "react-native";
import { Button, Input, Card, Image } from "react-native-elements";
import { styles } from "./LoginStyle";
import { useNavigation } from "@react-navigation/native";
import { validateEmail, validatePassword } from "../../utils/validations";
import Icon from "react-native-vector-icons/FontAwesome5";

//importamos dispatch
import { useDispatch } from "react-redux";
// importamos la funcion para guardar el newUser
import { logAdmin } from "../../redux/reducer/adminActions";
// importamos firebase
import firebase from "../../back/db/firebase";
import Firebase from "firebase";

const Login = () => {
  const pass = createRef();
  const mails = createRef();
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [mistake, setMistake] = useState(false);
  const [message, setMessage] = useState("");
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [resetPassword, setResetPassword] = useState({ recoveryEmail: "" });
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [isOkEmail, setIsOkEmail] = useState(false);
  const [isOkPassword, setIsOkPassword] = useState(false);
  let isOk = false;

  const loginUserAdmin = () => {
    const { email, password } = input;
    dispatch(logAdmin({ email, password }))
      .then(() => {
        {
          return navigation.navigate("home");
        }
      })
      .catch((error) => console.log("catch del loggin ----->", error));
    setInput({
      email: "",
      password: "",
    });
  };

  const onBlurValidateEmail = (e) => {
    console.log("valid email", validateEmail(e));
    if (validateEmail(e)) {
      setIsOkEmail(true);
      setErrorEmail("");
    } else {
      setErrorEmail("ingresa un email valido");
      setIsOkEmail(false);
    }
  };

  const onBlurValidatePassword = (e) => {
    if (validatePassword(e) !== false) {
      setIsOkPassword(true);
      setErrorPassword("");
    } else {
      setErrorPassword("ingresa una contraseña de mas de 6 caracteres");
      setIsOkPassword(false);
    }
  };

  const isOkFunction = () => {
    if (isOkEmail && isOkPassword) {
      return (isOk = !isOk);
    }
  };

  const handleChangeText = (name, value) => {
    setInput({ ...input, [name]: value });
    setResetPassword({ ...resetPassword, [name]: value });
    setMistake(false);
    setMessage("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imagen}>
        <Image
          style={styles.stretch}
          source={{ uri: "https://i.postimg.cc/mrWQN3x1/logo-final-8.png" }}
          PlaceholderContent={<ActivityIndicator />}
        />
      </View>

      <Card containerStyle={styles.input}>
        <Input
          ref={mails}
          label="Email"
          placeholder="email@address.com"
          inputStyle={styles.colorInput}
          onChangeText={(value) => handleChangeText("email", value)}
          onBlur={(e) => {
            onBlurValidateEmail(e.nativeEvent.text);
          }}
          value={input.email}
          errorMessage={!isOkEmail && errorEmail}
        />
        <Input
          ref={pass}
          label="Contraseña"
          placeholder="password"
          secureTextEntry={true}
          inputStyle={styles.colorInput}
          onChangeText={(value) => handleChangeText("password", value)}
          errorStyle={{ fontSize: 15 }}
          onBlur={(e) => {
            onBlurValidatePassword(e.nativeEvent.text);
          }}
          value={input.password}
          errorMessage={
            (!isOkPassword && errorPassword) || (mistake && message)
          }
        />
      </Card>

      <View style={styles.fixToText}>
        <Button
          disabled={!isOkFunction()}
          buttonStyle={styles.colores}
          title="Iniciar sesión"
          onPress={() => {
            loginUserAdmin();
          }}
        ></Button>
      </View>
    </SafeAreaView>
  );
};

export default Login;
