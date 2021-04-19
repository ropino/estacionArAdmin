import React from "react";
import { styles } from "./workedDaysHistoryStyle";
import { View, ScrollView } from "react-native";
import { Card, Text, Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome5";

const workedDaysHistory = () => {
  const navigation = useNavigation();
  return (
    <>
      <ScrollView style={{ backgroundColor: "black" }}>
        <View>
          
          <Card containerStyle={styles.card}>
            <Text h6>15/4/2021</Text>
            <Text h5>Hora ingreso: 08:00</Text>
            <Text h5>Hora egreso: 16:00</Text>
            <Text h5>Admin de manzana n°: 182</Text>
          </Card>
        </View>
      </ScrollView>
    </>
  );
};

export default workedDaysHistory;
