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
});
