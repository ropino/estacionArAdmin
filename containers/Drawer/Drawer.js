import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOutAdmin, signOutAdmin } from "../../redux/reducer/adminActions";
import { initialState } from "../../redux/reducer/adminReducer";

import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";

function CustomDrawerContent(props) {
  const dispatch = useDispatch();

  const logOutFirebase = () => {
    dispatch(logOutAdmin());
    dispatch(signOutAdmin()).then(() => {
      return props.navigation.navigate("login");
    });
  };

  function renderMainDrawer() {
    return (
      <View>
        {props.drawerItems.map((parent) => (
          <View key={parent.key}>
            <TouchableOpacity
              key={parent.key}
              testID={parent.key}
              onPress={() => {
                props.navigation.navigate(parent.key);
              }}
            >
              <View style={styles.parentItem}>
                <Text style={[styles.icon, styles.title]}>{parent.title}</Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
        {renderLogoutBtn()}
      </View>
    );
  }

  function renderLogoutBtn() {
    return initialState.isWorking ? (
      <Text style={styles.title}>
        {"No puedes cerrar sesión si aun estas trabajando, finaliza para continuar."}
      </Text>
    ) : (
      <View>
        <TouchableOpacity
          onPress={() => {
            logOutFirebase();
          }}
          testID="customDrawer-logout"
        >
          <View style={styles.parentItem}>
            <Text style={styles.title}>{"Cerrar sesión"}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView style={styles.drawerContainer}>
      <SafeAreaView
        style={styles.container}
        forceInset={{ top: "always", horizontal: "never" }}
      >
        <View style={styles.centered}>
          <Image
            source={{ uri: "https://i.postimg.cc/mrWQN3x1/logo-final-8.png" }}
            style={styles.logo}
          />
        </View>
        {renderMainDrawer()}
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 100,
    flexDirection: "row",
    paddingVertical: 28,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    marginTop: 75,
    width: 100,
    height: 90,
  },
  drawerContainer: {
    backgroundColor: "black",
    opacity: 0.9,
  },
  container: {
    flex: 1,
    zIndex: 1000,
  },
  centered: {
    alignItems: "center",
  },
  parentItem: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
    paddingTop: 4,
    paddingBottom: 4,
  },
  title: {
    margin: 16,
    fontWeight: "bold",
    color: "#F0F0F0",
    textAlign: "center",
  },
});

export default CustomDrawerContent;
