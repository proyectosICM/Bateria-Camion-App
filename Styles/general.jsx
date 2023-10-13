import { StyleSheet } from "react-native";
import { ColorTexto } from "./paletaDeColores";

export const general = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  tittleText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: ColorTexto
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  centerText: {
    textAlign: "center", // Centra el texto horizontalmente
  },
  buttonStyle: {
    backgroundColor: "#3498db", 
    borderRadius: 10, 
    paddingHorizontal: 15,
    margin: 5
  },
  cardItem: {
    width: 130,
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center"
  }

});
