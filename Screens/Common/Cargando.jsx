import React from "react";
import { ActivityIndicator, View, Text } from "react-native";

export function Cargando({ showText }) {
  const handleLogout = async () => {
    try {
      await AsyncStorage.clear();
      setUser("");
      console.log("Sesión cerrada. Todos los datos eliminados de AsyncStorage.");
      navigation.navigate("Login");
    } catch (error) {
      console.log("Error al cerrar la sesión:", error);
    }
  };

  return (
    <View>
      <ActivityIndicator size={100} color="black" style={{ marginVertical: 15 }} />
      {showText && (
        <>
          <Text style={styles.tittleText}>Algo a fallado en su inico de sesion</Text>
          <Text style={styles.tittleText}>Por favor cierra sesion </Text>
          <Text style={styles.tittleText}>y comunicate con tu administrador</Text>
          <Button title="Cerrar Sesión" buttonStyle={styles.styleButton} titleStyle={styles.tittleText} onPress={() => handleLogout()} />
        </>
      )}
      <Text>Cargando datos...</Text>
    </View>
  );
}
