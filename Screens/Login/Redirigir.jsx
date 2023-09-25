import React, { useCallback, useEffect, useState } from "react";
import { Text, View } from "react-native";
import { infoURL } from "../../API/apiurls";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useListarElementos } from "../../Hooks/CRUDHook";

export function Redigirir({ navigation } ) {
  const [info, setInfo] = useState();
  const [user, setUser] = useState(null);
  const [showText, setShowText] = useState(false);

  const fetchData = useCallback(async () => {
    const token = await AsyncStorage.getItem("token");
    const username = await AsyncStorage.getItem("username");
    setUser(username);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const ListarInfo = useListarElementos(`${infoURL}${user}`, setInfo);

  useEffect(() => {
    ListarInfo();
  }, [ListarInfo]);

  useEffect(() => {
    const obtenerDatosUser = async () => {
      if (info) {
        console.log(info)
        await AsyncStorage.setItem("rol", info.rolesModel.name);
        await AsyncStorage.setItem("empresa", info.empresasModel.id_emp.toString());
        await AsyncStorage.setItem("usuario", info.id_tra.toString());
        console.log("ua")
        navigation.navigate("Inicio");
// Navegar a la pantalla "Inicio" después de 2 segundos
      }
    };
    obtenerDatosUser();
  }, [info, navigation]);


  return (
    <View>
      <Text>Wel {info ? info.id_tra : "W"}</Text>
    </View>
  );
}
