import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9B233",
  },

  fixToText: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
    marginRight: 20,
  },
  signin: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  stretch: {
    width: 300,
    height: 270,
    resizeMode: "stretch",
  },
  imagen: {
    flex: 0.8,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "85%",
  },
  colores: {
    fontSize: 20,
    backgroundColor: "black",
  },
  input: {
    backgroundColor: "black",
    borderRadius: 10,
    opacity: 0.5,
  },
  clearButton: {
    color: "black",
  },
  colorInput: {
    color: "white",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 10,
    backgroundColor: "black",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    width: "80%",
    opacity: 0.9,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    padding: 10,
    elevation: 2,
    borderRadius: 10,
  },

  buttonClose: {
    backgroundColor: "black",
    borderWidth: 2,
    borderColor: "white",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color: "white",
    fontSize: 20,
  },
});