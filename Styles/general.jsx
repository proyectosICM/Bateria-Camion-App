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
    marginHorizontal: 30,
  },
  centerText: {
    textAlign: "center", // Centra el texto horizontalmente
  },
});
