import React from "react";
import { styles } from "./carControlStyle";
import { View, SafeAreaView, ScrollView } from "react-native";
import { Button, Card, Text } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import ParkedCarHistoryContainer from "../../containers/ParkedCarHistoryContainer"


const CarControl = () => {
    const navigation = useNavigation();

  return (
    <ScrollView style={{ backgroundColor: "black", flex: 1 }}>
      <SafeAreaView>
        <View>
          <Card containerStyle={styles.title}>
            <Text h4>Autos estacionados</Text>
            <Text h5 style={{ textAlign: "center" }}>
              Cuadra: 182
            </Text>
            {/* ESTA MUY HARCODEADO LOS STYLES, HAY QUE REVISAR */}
          </Card>
          <Card containerStyle={styles.card}>
            <View style={styles.view}>
              <Icon name="check-circle" size={25} color="green" />

              <Text h4 style={{ paddingRight: 40 }}>
                DCM207
              </Text>
              <Text h4 style={{ paddingRight: 20 }}>
                VW Gol
              </Text>
            </View>
            <View style={styles.view2}>
              <Text h5>15/04/2021</Text>
              <Text h5>Libre</Text>
            </View>
          </Card>

          <Card containerStyle={styles.card}>
            <View style={styles.view}>
              <Icon name="check-circle" size={25} color="green" />

              <Text h4 style={{ paddingRight: 40 }}>
                AUX642
              </Text>
              <Text h4 style={{ paddingRight: 20 }}>
                BMW 323
              </Text>
            </View>
            <View style={styles.view2}>
              <Text h5>15/04/2021</Text>
              <Text h5>14:10 a 15:40</Text>
            </View>
          </Card>
        </View>
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
