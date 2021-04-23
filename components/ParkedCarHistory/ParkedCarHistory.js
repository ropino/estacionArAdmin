import React, { useState, useEffect } from "react";
import { styles } from "./ParkedCarHistoryStyle";
import { View, SafeAreaView, ScrollView } from "react-native";
import { Button, Card, Text } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import firebase from "../../back/db/firebase";
import { useSelector } from "react-redux";

const parkedCarHistory = (props) => {
  const navigation = useNavigation();
  const { adminInfo } = useSelector((state) => state.adminReducer);
  const [autos, setAutos] = useState([]);

  useEffect(() => {
    getParkedCars();
  }, [adminInfo]);

  const getParkedCars = () => {
    return firebase.db
      .collection("zones")
      .doc(`${adminInfo.zone}`)
      .onSnapshot((querySnap) => {
        return setAutos(querySnap.data().history);
      });
  };

  let days = new Date();
  let date = `${days.getDate()}-${days.getMonth() + 1}-${days.getFullYear()}`;

  return (
    <ScrollView style={{ backgroundColor: "black", flex: 1 }}>
      <SafeAreaView>
        <View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Card containerStyle={styles.title}>
              <Text h5 style={{ textAlign: "center" }}>
                {`Manzana: ${adminInfo.zone} • ${date}`}
              </Text>
            </Card>
          </View>

          {autos.reverse().map((cars) => (
            <Card containerStyle={styles.card}>
              <View style={styles.view}>
                <Text style={{ fontWeight: "bold" }}>{cars.patente}</Text>
                <Text>{cars.modelo}</Text>
                <Text>{`${cars.inicio} a ${cars.final}`}</Text>
              </View>
            </Card>
          ))}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
export default parkedCarHistory;

{
  /* <View style={styles.view2}>
  <Text h5>{cars.date}</Text>
  <Text h5>{cars.modelo}</Text>
  <Text h5>{cars.marca}</Text>
  <Text h5>Tiempo: {cars.time}hs</Text>
</View> */
}
