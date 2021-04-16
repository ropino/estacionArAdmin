import React from "react";
import { styles } from "./workedDaysHistoryStyle";
import { View, ScrollView } from "react-native";
import { Card, Text, Button } from "react-native-elements";
import { useNavigation } from '@react-navigation/native'
import Icon from "react-native-vector-icons/FontAwesome5";


const workedDaysHistory = () => {
    const navigation = useNavigation();
  return (
    <>
      <ScrollView style={{ backgroundColor: "black" }}>
        <View>
          <View style={styles.view}>
            <Text h4 style={{ fontWeight: "bold" }}>
              Historial dias trabajados
            </Text>
          </View>
          <Card containerStyle={styles.card} >
            <Text h6>15/4/2021</Text>
            <Text h4>Hora ingreso: 08:00</Text>
            <Text h4>Hora egreso: 16:00</Text>
            <Text h4>Admin de manzana n°: 182</Text>
          </Card>
          <Button
            title="Atras"
            buttonStyle={styles.button}
            titleStyle={{ color: "black" }}
            icon={<Icon name='arrow-circle-left' size={25} color='black' style={{marginRight:'5%'}}/>}
            onPress={()=>navigation.goBack()}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default workedDaysHistory;
