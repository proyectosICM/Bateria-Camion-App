import { StyleSheet } from "react-native";

export const login = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
      },
      container: {
        flex: 1, 
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Fondo semi-transparente
        alignItems: "center",
        justifyContent: "center",
      },
      title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        color: "white",
      },
      input: {
        width: 240,
        height: 40,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 20,
        backgroundColor: "white", // Color de fondo del input
        opacity: 0.9, // Opacidad del input
      },
      button: {
        backgroundColor: "#007bff",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        elevation: 3, // Sombra en Android
        shadowColor: "black", // Sombra en iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
      buttonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
      },
      errorText: {
        color: "red",
        fontSize: 16,
        marginTop: 10,
      },
});
