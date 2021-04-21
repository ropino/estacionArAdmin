import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  View,
  Alert,
  SafeAreaView,
  ActivityIndicator,
  KeyboardAvoidingView,
  ImageBackground,
  ScrollView,
} from "react-native";
import { Button, Input, Card, Image, Text } from "react-native-elements";
import { styles } from "./carReportStyle";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome5";

const carReport = () => {
  const navigation = useNavigation();

  return (
    <>
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <Card containerStyle={styles.input}>
            <Input
              label="Patente"
              name="patente"
              // placeholder={userInfo ? userInfo.name : ""}
              inputStyle={styles.colorInput}
              // value={input.name}
            />
            <Input
              label="Modelo"
              name="modelo"
              // placeholder={userInfo ? userInfo.name : ""}
              inputStyle={styles.colorInput}
              // value={input.name}
            />
            <Input
              label="Código de manzana"
              name="codigo"
              // placeholder={userInfo ? userInfo.lastname : ""}
              inputStyle={styles.colorInput}
              // value={input.lastname}
            />
            <Input
              label="Detalle de infracción"
              name="detalle"
              // placeholder={userInfo ? userInfo.name : ""}
              inputStyle={styles.colorInput}
              // value={input.name}
            />
          </Card>
          <View style={styles.fixToText}>
            <Button
              buttonStyle={styles.colores}
              title="Agregar foto"
              icon={
                <Icon
                  name="camera"
                  size={25}
                  color="white"
                  style={{
                    marginRight: "5%",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                />
              }
            ></Button>
            <Button
              buttonStyle={styles.colores}
              title="Enviar"
              icon={
                <Icon
                  name="paper-plane"
                  size={25}
                  color="white"
                  style={{
                    marginRight: "5%",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                />
              }
              // onPress={()=>navigation.navigate("WorkedDaysHistoryContainer")}
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
    </>
  );
};

export default carReport;
