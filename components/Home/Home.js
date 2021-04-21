import React from "react";
import { View, SafeAreaView } from "react-native";
import { Card, Text, Button } from "react-native-elements";
import { styles } from "./HomeStyle";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import firebase from "../../back/db/firebase";

export const Home = () => {
  const navigation = useNavigation();
  const [goWork, setGoWork] = React.useState(true);
  const [dateInicio, setDateInicio] = React.useState("");
  const {adminId} = useSelector((state) => state.adminReducer);
  const {adminInfo} = useSelector((state) => state.adminReducer);

  const pressToWork = () => {
    let initialDate = new Date();
    setDateInicio(initialDate);
    setGoWork(!goWork);
  };

  const pressToRest = (id) => {
    let finalDate = new Date();
    firebase.db
      .collection("admin")
      .doc(`${id}`)
      .update({
        workedDays: firebase.firebase.firestore.FieldValue.arrayUnion({
          inicio: dateInicio,
          final: finalDate,
          zone: adminInfo.zone,
          tiempoTrabajado: `${finalDate.getHours()-dateInicio.getHours()}hs`,
        }),
      });
    setGoWork(!goWork);
  };

  return goWork ? (
    <>
      <SafeAreaView style={{ backgroundColor: "black", height: "100%" }}>
        <Button
          icon={
            <Icon
              name="check"
              size={100}
              color="black"
              style={{
                marginRight: "5%",
                display: "flex",
                justifyContent: "flex-end",
              }}
            />
          }
          buttonStyle={styles.button}
          type="Solid Button"
          titleStyle={{
            color: "black",
            display: "flex",
            justifyContent: "flex-start",
          }}
          title="go WORK"
          onPress={() => pressToWork()}
        />
      </SafeAreaView>
    </>
  ) : (
    <>
      <SafeAreaView style={{ backgroundColor: "black", height: "100%" }}>
        <View style={{ marginHorizontal: 15, marginVertical: 10 }}>
          <Card containerStyle={styles.card}>
            <View
              style={{
                flexDirection: "column",
                justifyContent: "space-around",
                marginBottom: 10,
              }}
            >
              <Text h4>{`Bienvenido ${adminInfo.name}`}</Text>
              <Text h4>{`Admin cuadra: ${adminInfo.zone}`}</Text>
            </View>
          </Card>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginBottom: 10,
            }}
          ></View>
          {/* <Card containerStyle={styles.card}> */}
          <Button
            title="Controlar vehiculos"
            buttonStyle={styles.button}
            titleStyle={{ color: "black" }}
            icon={
              <Icon
                name="arrow-alt-circle-right"
                size={25}
                color="black"
                style={{ marginRight: "5%" }}
              />
            }
            onPress={() => navigation.navigate("carControl")}
          />
          <Button
            title="Reportar vehiculo"
            buttonStyle={styles.button}
            titleStyle={{
              color: "black",
              display: "flex",
              justifyContent: "flex-start",
            }}
            icon={
              <Icon
                name="arrow-alt-circle-right"
                size={25}
                color="black"
                style={{
                  marginRight: "5%",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              />
            }
            onPress={() => navigation.navigate("carReport")}
          />
          <Button
            title="Finalizar Jornada"
            buttonStyle={styles.button}
            titleStyle={{
              color: "black",
              display: "flex",
              justifyContent: "flex-start",
            }}
            icon={
              <Icon
                name="kiss-wink-heart"
                size={50}
                color="black"
                style={{
                  marginRight: "5%",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              />
            }
            onPress={() => pressToRest(adminId)}
          />
          {/* </Card> */}
        </View>
      </SafeAreaView>
    </>
  );
};
