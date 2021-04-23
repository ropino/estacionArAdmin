import React, { useState, useEffect } from "react";
import { styles } from "./ParkedCarHistoryStyle";
import { View, SafeAreaView, ScrollView } from "react-native";
import { Button, Card, Text, SearchBar } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import firebase from "../../back/db/firebase";
import { useSelector } from "react-redux";


const parkedCarHistory = (props) => {
  const navigation = useNavigation();
  const { adminInfo } = useSelector((state) => state.adminReducer);
  const [autos, setAutos] = useState([]);
  const [patente, setPatente] = useState("");


  useEffect(() => {
    getParkedCars();
  }, [adminInfo]);


  const handleChangeText = (value) => {
    setPatente(value)
  };

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
      <SearchBar
          placeholder="Buscar patente"
          onChangeText={(value) => handleChangeText(value)}
          value={patente.toUpperCase()}
          containerStyle={styles.searchBar}
          inputStyle={styles.barra}
        />
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
                <Text style={{ fontWeight: "bold" }}>{cars.patente.toUpperCase()}</Text>
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