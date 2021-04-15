import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#F9B233",
  },
  card: {
    backgroundColor: "#F9B233",
    borderRadius: 10,
    margin: 10,
    padding: 10,
    display: "flex",
  },
  map: {
    width: "100%",
    height: 500,
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
    marginHorizontal: 10,
    marginVertical: 5,
    elevation: 2,
    borderRadius: 10,
    backgroundColor: "#F9B233",
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
  colorInput: {
    color: "white",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color: "white",
    fontSize: 20,
  },
});
