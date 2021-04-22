import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9B233",
    height: "100%",
  },

  stretch: {
    width: 200,
    height: 180,
    resizeMode: "stretch",
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    marginRight: 20,
  },
  imagen: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "35%",
  },
  labelstyle: {
    color: "black",
    textAlign: "center",
  },
  formStyle: {
    margin: 20,
  },
  itemStyle: {
    marginTop: 30,
    borderWidth: 1,
    borderColor: "black",
  },
  colores: {
    fontSize: 20,
    backgroundColor: "black",
  },
  input: {
    backgroundColor: "black",
    borderRadius: 10,
    opacity: 0.5,
    marginTop: 30,
  },
  colorInput: {
    color: "white",
  },
});
