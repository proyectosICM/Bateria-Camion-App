import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { DetalleBateria } from "../Conductor/DetalleBateria";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MenuCamiones } from "./MenuCamiones";

export function Home() {
  const [rol, setRol] = useState(null);

  useEffect(() => {
    const getUserFromAsyncStorage = async () => {
      try {
        const rolValue = await AsyncStorage.getItem("rol");
        if (rolValue !== null) {
          setRol(rolValue);
        }
      } catch (error) {
        console.log("Error al obtener el usuario de AsyncStorage:", error);
      }
    };
    getUserFromAsyncStorage();

    const interval = setInterval(getUserFromAsyncStorage, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {rol === "CONDUCTOR" ? <DetalleBateria /> : rol === "SUPERVISOR" ? <MenuCamiones /> : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
});
