import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5, MaterialIcons, Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { DetalleBateria } from "./Screens/Conductor/DetalleBateria";
import { EscogerCamion } from "./Screens/Conductor/EscogerCamion";
import { Cuenta } from "./Screens/Cuenta";
import { Incidencias } from "./Screens/Conductor/Incidencias";

const Tab = createBottomTabNavigator();

export function CustomBottomTabBar({ navigation }) {
  const [rol, setRol] = useState(null);

  useEffect(() => {
    // Función asincrónica para obtener el valor de 'user' de AsyncStorage
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
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#A69677", // Cambia este color al que prefieras para los íconos seleccionados
        tabBarInactiveTintColor: "#9CA4A6", // Cambia este color al que prefieras para los íconos no seleccionados
      }}
    >
      <Tab.Screen
        name="Home"
        component={DetalleBateria}
        options={{
          tabBarIcon: ({ color, size }) => <FontAwesome5 name="home" color={color} size={size} />,
        }}
      />

      <Tab.Screen
        name="Incidencias"
        component={Incidencias}
        options={{
          tabBarIcon: ({ color, size }) => <FontAwesome5 name="exclamation-circle" color={color} size={size} />,
        }}
      />

      <Tab.Screen
        name="Cuenta"
        component={Cuenta}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="person-circle" color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
}
