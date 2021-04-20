import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    height: "100%",
  },
  card: {
    backgroundColor: "#F9B233",
    borderRadius: 10,
    margin: 10,
    padding: 10,
    display: "flex",
    borderColor: "#F9B233",
    height: 70,
  },
  title: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    fontSize: 18,
    textAlign: "center",
  },
  title2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    fontSize: 18,
    textAlign: "center",
    color: "#f9b233",
  },
  message: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 30,
  },
  card1: {
    width: "90%",
    backgroundColor: "black",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    borderColor: "#f9b233",
    borderWidth: 2,
  },
});
