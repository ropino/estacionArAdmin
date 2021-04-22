import React, { useState, useEffect } from "react";
import { styles } from "./carControlStyle";
import { View, SafeAreaView, ScrollView } from "react-native";
import { Button, Card, Text } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useLinkProps, useNavigation } from "@react-navigation/native";
import ParkedCarHistoryContainer from "../../containers/ParkedCarHistoryContainer";
import { SearchBar } from "react-native-elements";
import firebase from "../../back/db/firebase";
import { useSelector } from "react-redux";


const CarControl = () => {
  const navigation = useNavigation();
  const [filterParkedCars, setFilterParkedCars] = useState([]);
  const [patente, setPatente] = useState("");
  const [parkedCars, setParkedCars] = useState([]);
  const { adminId } = useSelector((state) => state.adminReducer);
  const { adminInfo } = useSelector((state) => state.adminReducer);

  useEffect(()=>{
    if(!patente.length) setFilterParkedCars(parkedCars)
    else setFilterParkedCars( parkedCars.filter((car) => car.patente.match(patente)));
  },[patente, parkedCars])
  
  useEffect(() => {
    getParkingCarsInfoNow(adminInfo.zone);
  }, [adminInfo]);
  

  const handleChangeText = (value) => {
    setPatente(value)
  };

// se puede hacer cuando carga la app 
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

  return (
    <ScrollView style={{ backgroundColor: "black", flex: 1 }}>
      <SafeAreaView>
        <SearchBar
          placeholder="Buscar patente"
          onChangeText={(value) => handleChangeText(value)}
          value={patente}
          containerStyle={styles.searchBar}
          inputStyle={styles.barra}
        />
        <View>
          <Text
            h4
            style={{
              textAlign: "center",
              color: "#f9b233",
              marginVertical: 10,
            }}
          >
            {`Manzana: ${adminInfo.zone}`}
          </Text>
        
        </View>
        {filterParkedCars.map((cars) => (
          <Card containerStyle={styles.card} key={cars.patente}>
            <View style={styles.view}>
              <Icon name="check-circle" size={25} color="green" />
              <Text h4 style={{ paddingRight: 40 }}>
                {cars.patente}
              </Text>
              <Text h4 style={{ paddingRight: 20 }}>
                {cars.mode}
              </Text>
            </View>
            <View style={styles.view2}>
              <Text h5>{cars.date}</Text>
              <Text h5>{cars.modelo}</Text>
              <Text h5>{cars.marca}</Text>
              <Text h5>Tiempo: {cars.time}hs</Text>
            </View>
          </Card>
        ))}
        <View style={{ flex: 1 }}>
          <Button
            title="Historial"
            buttonStyle={styles.button}
            titleStyle={{ color: "black" }}
            onPress={() => navigation.navigate("parkedCarHistoryContainer")}
            icon={
              <Icon
                name="arrow-alt-circle-right"
                size={25}
                color="black"
                style={{ marginRight: "5%" }}
              />
            }
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
export default CarControl;
