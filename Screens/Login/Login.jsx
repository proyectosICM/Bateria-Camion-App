import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { base } from "../../API/apiurls";
const backgroundImage = require("../Login/login1.jpg"); // Importa tu imagen de fondo

export function Login() {
  const [username, setUsername] = useState("");
  const [pass_tra, setPass_tra] = useState("");
  const [error, setError] = useState("");

  const [user, setUser] = useState(null);

  const ListarUser = async () => {
    const rolValue = await AsyncStorage.getItem("rol");
    setUser(rolValue);
  };

  useEffect(() => {
    ListarUser();
  }, [ListarUser]);

  const navigation = useNavigation();
  const handleLogin = async () => {
    try {
      const response = await axios.post(`${base}/login`, {
        username,
        pass_tra,
      });
      await AsyncStorage.setItem("token", response.data.token);
      await AsyncStorage.setItem("username", response.data.Username);
      navigation.navigate("Escoger");
    } catch (error) {
      setError("Error en la autenticación");
      console.log(error);
    }
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Inicio de Sesión</Text>
        <TextInput style={styles.input} placeholder="Nombre de usuario" onChangeText={(text) => setUsername(text)} value={username} />
        <TextInput style={styles.input} placeholder="Contraseña" onChangeText={(text) => setPass_tra(text)} value={pass_tra} secureTextEntry />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
        {error && <Text style={styles.errorText}>{error}</Text>}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
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