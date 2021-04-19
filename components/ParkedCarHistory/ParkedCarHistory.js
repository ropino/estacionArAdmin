import React from "react";
import { styles } from "./ParkedCarHistoryStyle";
import { View, SafeAreaView, ScrollView } from "react-native";
import { Button, Card, Text } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";

const parkedCarHistory = () => {
  const navigation = useNavigation();

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
