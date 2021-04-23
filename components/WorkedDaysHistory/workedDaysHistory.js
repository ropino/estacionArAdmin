import React, { useState, useEffect }  from "react";
import { styles } from "./workedDaysHistoryStyle";
import { View, ScrollView } from "react-native";
import { Card, Text, Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useSelector } from "react-redux";


const workedDaysHistory = () => {
  const navigation = useNavigation();
  const { adminInfo } = useSelector((state) => state.adminReducer);


  // useEffect(() => {
  //   getParkedCars();
  // }, [adminInfo]);



  let days = new Date();
  let date = `${days.getDate()}-${days.getMonth() + 1}-${days.getFullYear()}`;



  return (
    <>
      <ScrollView style={{ backgroundColor: "black" }}>
        <View>
       
          <Card containerStyle={styles.card}>
            <Text h6>{`Aca va la hora`}</Text>
            <Text h5>Hora ingreso: 08:00</Text>
            <Text h5>Hora egreso: 16:00</Text>
            <Text h5>Admin manzana: Aca la manzana</Text>
          </Card>
        </View>
      </ScrollView>
    </>
  );
};

export default workedDaysHistory;
