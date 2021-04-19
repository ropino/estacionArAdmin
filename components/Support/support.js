import React from 'react';
import { View, SafeAreaView } from "react-native";
import { Card, Text, Button } from "react-native-elements";
import { styles } from "./supportStyle";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";

const support = () => {
    return (
        <>
        <SafeAreaView>
            <Text>ESTAS EN SUPPORT </Text>
        </SafeAreaView>
        </>
    );
};

export default support;