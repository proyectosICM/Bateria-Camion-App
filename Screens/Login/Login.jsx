import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useState } from "react";
import { ActivityIndicator, Alert, ImageBackground, Text, TextInput, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { base } from "../../API/apiurls";
import { login } from "../../Styles/loginStyle";
const backgroundImage = require("../Login/login1.jpg");

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  const validateUsername = () => {
    if (username.trim() === "") {
      setError("Por favor, ingrese un nombre de usuario.");
      Alert.alert("Error", "Por favor ingrese un nombre de usuario");
      return false;
    }
    return true;
  };

  const validatePassword = () => {
    if (password.trim() === "") {
      setError("Por favor, ingrese una contraseña.");
      Alert.alert("Error", "Por favor, ingrese una contraseña.");
      return false;
    }
    return true;
  };

  const loginToServer = async (username, pass_tra) => {
    const response = await axios.post(`${base}/login`, { username, password });
    return response.data;
  };

  // This function handles user login process including validation, server request, and navigation.
  const handleLogin = async () => {
    if (!validateUsername() || !validatePassword()) {
      return;
    }
    setIsLoading(true);
    try {
      const data = await loginToServer(username, password);
      await AsyncStorage.setItem("token", data.token);
      await AsyncStorage.setItem("username", data.Username);
      navigation.navigate("Redirigir");
    } catch (error) {
      if (error.response) {
        // Handle errors returned from the server.
        const message = error.response.data.message || "Error en la autenticación";
        setError(message);
        Alert.alert(message);
      } else if (error.request) {
        // Error for network o solicitud fail
        setError("Problema de conexión. Intente nuevamente");
        Alert.alert("Problema de conexión", "Por favor, verifique su conexión a Internet y vuelva a intentarlo.");
      } else {
        // Other errors
        setError("Ocurrió un error inesperado");
        Alert.alert("Error", "Ocurrió un error inesperado. Intente nuevamente");
      }
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ImageBackground source={backgroundImage} style={login.backgroundImage}>
      <View style={login.container}>
        <Text style={login.title}>Inicio de Sesión</Text>
        <TextInput
          style={login.input}
          placeholder="Nombre de usuario"
          accessibilityLabel="Campo de nombre de usuario"
          onChangeText={(text) => setUsername(text)}
          value={username}
        />
        <TextInput
          style={login.input}
          placeholder="Contraseña"
          accessibilityLabel="Campo de contraseña"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry
        />
        {isLoading ? (
          <ActivityIndicator size="large" color="#0000ff" /> // Indicador de carga
        ) : (
          <TouchableOpacity style={login.button} onPress={handleLogin} disabled={isLoading}>
            <Text style={login.buttonText}>Iniciar Sesión</Text>
          </TouchableOpacity>
        )}
        {error && <Text style={login.errorText}>{error}</Text>}
      </View>
    </ImageBackground>
  );
}
