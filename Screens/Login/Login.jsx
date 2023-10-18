import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { base } from "../../API/apiurls";
import { login } from "../../Styles/loginStyle";
const backgroundImage = require("../Login/login1.jpg"); // Importa tu imagen de fondo

export function Login() {
  const [username, setUsername] = useState("");
  const [pass_tra, setPass_tra] = useState("");
  const [error, setError] = useState("");

  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${base}/login`, { username, pass_tra });
      await AsyncStorage.setItem("token", response.data.token);
      await AsyncStorage.setItem("username", response.data.Username);
      navigation.navigate("Redirigir");
    } catch (error) {
      setError("Error en la autenticación");
      Alert.alert("El usuario o contraseña ingresados son incorrectos");
      console.log(error);
    }
  };

  return (
    <ImageBackground source={backgroundImage} style={login.backgroundImage}>
      <View style={login.container}>
        <Text style={login.title}>Inicio de Sesión</Text>
        <TextInput style={login.input} placeholder="Nombre de usuario" onChangeText={(text) => setUsername(text)} value={username} />
        <TextInput style={login.input} placeholder="Contraseña" onChangeText={(text) => setPass_tra(text)} value={pass_tra} secureTextEntry />
        <TouchableOpacity style={login.button} onPress={handleLogin}>
          <Text style={login.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
        {error && <Text style={login.errorText}>{error}</Text>}
      </View>
    </ImageBackground>
  );
}

