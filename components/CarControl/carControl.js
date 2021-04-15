import React from "react";
import { styles } from "./carControlStyle";
import { View, SafeAreaView } from "react-native";
import { Button, Card, Text } from "react-native-elements";

const CarControl = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "black", flex: 1 }}>
      <View>
        <Card containerStyle={styles.card}>
          <Text h4>Vehiculo a estacionar</Text>
          <Text h5>{vehiculo.patenteId}</Text>
          <Text h5>{vehiculo.modeloId}</Text>
          <Text h5>{vehiculo.marcaId}</Text>
        </Card>
      </View>
    </SafeAreaView>
  );
};
