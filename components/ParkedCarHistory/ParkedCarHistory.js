import React from "react";
import { styles } from "./ParkedCarHistoryStyle";
import { View, SafeAreaView, ScrollView } from "react-native";
import { Button, Card, Text } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import firebase from "../../back/db/firebase";

const parkedCarHistory = () => {
  const navigation = useNavigation();

/* 
***traer vehiculos estacionados que ya finalizaron su estacionamiento ese mismo dia

TENGO QUE TRAER EL PARKINGHISTORY FILTRANDO EL DIA Y LA ZONA QUE MACHEAN CON EL DIA ACTUAL Y LA ZONA DEL ADMIN 

const getParkingCarsInfoNow = (zone) => {
    firebase.db
      .collection("parkings")
      .where("zone", "==", `${zone}`)
      .onSnapshot((querySnap) => {
        let cars = [];
        querySnap.forEach((doc) => {
          cars.push(doc.data());
        });
        return setParkedCars(cars);
      });
  };
***ordenarlos del mas reciente al mas antiguo
*/
//  const getParkedCar = (zone, date) => {
//    firebase.db
//    .collection ("users")
//    .doc()
//    .where("zone", "==", `${zone}`)
//   console.log("ZONA", zone);
   
//  }


  return (
    <ScrollView style={{ backgroundColor: "black", flex: 1 }}>
      <SafeAreaView>
        <View>
          <View style={{display: "flex", flexDirection:"row", justifyContent: "center"}}>
            <Card containerStyle={styles.title}>
              <Text h5 style={{ textAlign: "center" }}>
                Manzana: 182 15/04/2021
              </Text>
              {/* ESTA MUY HARCODEADO LOS STYLES, HAY QUE REVISAR */}
            </Card>
          </View>

          <Card containerStyle={styles.card}>
            <View style={styles.view}>
              <Text style={{ fontWeight: "bold" }}>AHR 015</Text>
              <Text>Corsita</Text>
              <Text>12:15 a 13:45</Text>
            </View>
          </Card>

          <Card containerStyle={styles.card}>
            <View style={styles.view}>
              <Text style={{ fontWeight: "bold" }}>YLF 642</Text>
              <Text>Ranger</Text>
              <Text>14:10 a 15:40</Text>
            </View>
          </Card>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
export default parkedCarHistory;
