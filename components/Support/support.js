import React,{useEffect} from "react";
import {
  View,
  SafeAreaView,
  ScrollView,
  _ScrollView,
  TextInput,
} from "react-native";
import { Card, Text, Button, Input } from "react-native-elements";
import { styles } from "./supportStyle";
import {useSelector} from 'react-redux'
import Icon from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import firebase from "../../back/db/firebase";


const support = () => {
    const [selectCall, setSelectCall] = React.useState(false)
    const [selectMessage, setSelectMessage] = React.useState(true)
    const [message,setMessage]=React.useState({Mensajes:'',AsuntoM:''})
    const [callMessage,setCallMessage]=React.useState({Asunto:''})
    const {adminId} = useSelector((state) => state.adminReducer);


    useEffect(()=>{
      firebase.db
      .collection('support')
      .doc(`${adminId}`)
      .get()
      .then((doc)=>{
        if (doc.exists) {console.log("Document data:", doc.data());}
        else{
          createSupport()
        } 
      })
      }
    ,[])

    const createSupport = ()=>{
      firebase.db
      .collection('support')
      .doc(`${adminId}`)
      .set({
        mensajeLlamada:[],
        mensaje:[]
      })
    }
    const wantMessage = () => {
        setSelectMessage(true)
        setSelectCall(false)
    }



    const wantCall = () => {
        setSelectCall(true)
        setSelectMessage(false)
    }
    const handleChangeTextCall = (name, value) => {
      setCallMessage({ ...callMessage, [name]: value });
      
    };
    const handleChangeTextMessage = (name, value) => {
      setMessage({ ...message, [name]: value });
       
    };

  const requestCall = ()=>{
    firebase.db
  .collection('support')
  .doc(`${adminId}`)
  .update({
    mensajeLlamada: firebase.firebase.firestore.FieldValue.arrayUnion(callMessage)
  })
  setCallMessage({Asunto:''})

  }
  const sendMessage = ()=>{
    firebase.db
    .collection('support')
    .doc(`${adminId}`)
    .update({
     mensaje:firebase.firebase.firestore.FieldValue.arrayUnion(message)
    })
    setMessage({Mensajes:'',AsuntoM:''})

  }


  return (
    <>
      {/* <ScrollView> */}
      <SafeAreaView style={styles.container}>
        <Card containerStyle={styles.card}>
          <Text style={styles.title}>
            ¿Necesitas comunicarte con el soporte técnico?
          </Text>
        </Card>

        <View
          style={styles.message}
        >
          <Icon
            name="comment-dots"
            size={60}
            color="#f9b233"
            style={{ marginRight: "5%" }}
            onPress= {()=>wantMessage()}
          />
        </View>
        <Text style={styles.title2}>Enviar mensaje</Text>

        <View
          style={styles.message}
        >
          <Icon
            name="phone-alt"
            size={50}
            color="#f9b233"
            style={{ marginRight: "5%", marginBottom: 8 }}
            onPress= {()=>wantCall()}
          />
        </View>
        <Text style={styles.title2}>Solicitar llamada</Text>

          {selectMessage ? (
        <Card
          containerStyle={styles.card1}
        >
          <TextInput
            placeholder="Asunto"
            label="AsuntoM"
            style={{
              color: "#f9b233",
              fontSize: 22,
              borderBottomWidth: 1,
              borderBottomColor: "grey",
              marginBottom: 15,
            }}
            maxLength={50}
            onChangeText={(value) => handleChangeTextMessage("AsuntoM", value)}
            value={message.AsuntoM}
          />
          <TextInput
            placeholder="Mensaje"
            label="Mensajes"
            style={{ color: "#f9b233", fontSize: 18 ,borderBottomColor: "grey", }}
            multiline
            numberOfLines={4}
            maxLength={250}
            onChangeText={(value) => handleChangeTextMessage("Mensajes", value)}
            value={message.Mensajes}
          />
          <Icon
            name="paper-plane"
            size={25}
            color="#f9b233"
            style={{
              marginRight: "8%",
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "8%",
            }}
            onPress={()=>sendMessage()}
          />
        </Card>
        ) : (
        <Card
        containerStyle={styles.card1}
        >
          <TextInput
            placeholder="Asunto"
            label="Llamada"
            style={{
              color: "#f9b233",
              fontSize: 22,
              marginBottom: 15,
            }}
            maxLength={50}
            onChangeText={(value) => handleChangeTextCall("Asunto", value)}
            value={callMessage.Asunto}
          />
          <Icon
            name="paper-plane"
            size={25}
            color="#f9b233"
            style={{
              marginRight: "8%",
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "8%",
            }}
            onPress={()=>requestCall()}
          />
        </Card>
        )}
        

        
      </SafeAreaView>
      {/* </ScrollView> */}
    </>
  );
};

export default support;
