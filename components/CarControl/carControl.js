import React from "react";
import { styles } from "./carControlStyle";
import { View, SafeAreaView } from "react-native";
import { Button, Card, Text } from "react-native-elements";

{
  /*  CarControl: Autos estacionados (Fecha-Tiempo-Patente-Modelo) - Historial de estacionamiento que machea con el qr y la fecha.

Checklist
Eliminar
0%
mostrar la el codigo de cuadra


mostrar una lista de los autos estacionados con fecha(en q puso activo el estacionamiento), tiempo, patente, modelo.
estaria bueno que se separe en la pagina los autos que estan proximos a que se termine el tiempo de estacionamiento
Navegar al ParkedCarHistory  */
}

const CarControl = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "black", flex: 1 }}>
      <View>
        <Card containerStyle={styles.card}>
          <Text h4>Autos estacionados</Text>
        </Card>
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
