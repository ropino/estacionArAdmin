import React from "react";
import { View, SafeAreaView } from "react-native";
import { Card, Text, Button } from "react-native-elements";
import { styles } from "./HomeStyle";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";


export const Home = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ backgroundColor: "black", height: "100%" }}>
    <View style={{ marginHorizontal: 15, marginVertical: 10 }}>
      <Card containerStyle={styles.card}>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-around",
            marginBottom: 10,
          }}
        >
          <Text h4>Bienvenido Lalo</Text>
          <Text h4>Admin cuadra: 182</Text>
        </View>
      </Card>
      <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginBottom: 10,
          }}
        >
        </View>
      {/* <Card containerStyle={styles.card}> */}
      <Button
      title="Controlar vehiculos" 
      buttonStyle={styles.button}
      titleStyle={{color: "black"}}
      icon={<Icon name='arrow-alt-circle-right' size={25} color='black' style={{marginRight:'5%'}}/>}
      />
      <Button
      title="Reportar vehiculo" 
      buttonStyle={styles.button}
      titleStyle={{color: "black", display: "flex", justifyContent: "flex-start"}}
      icon={<Icon name='arrow-alt-circle-right' size={25} color='black' style={{marginRight:'5%', display: "flex", justifyContent: "flex-end"}}/>}
      onPress={()=>navigation.navigate("carReport")}
      />
      {/* </Card> */}
    </View>
  </SafeAreaView>
  )
}

