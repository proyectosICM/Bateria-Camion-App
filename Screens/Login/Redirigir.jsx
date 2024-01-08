import React, { useCallback, useEffect, useState } from "react";
import { Text, View } from "react-native";
import { infoURL } from "../../API/apiurls";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useListarElementos } from "../../Hooks/CRUDHook";
import { Cargando } from "../Common/Cargando";
import { general } from "../../Styles/general";

export function Redigirir({ navigation }) {
  const [info, setInfo] = useState();
  const [user, setUser] = useState(null); 

  const fetchData = useCallback(async () => {
    const token = await AsyncStorage.getItem("token");
    const username = await AsyncStorage.getItem("username");
    setUser(username);
  }, []);

  const ListarInfo = useListarElementos(`${infoURL}${user}`, setInfo);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    ListarInfo();
  }, [ListarInfo]);

  useEffect(() => {
    const obtenerDatosUser = async () => {
      if (info) {
        await AsyncStorage.setItem("rol", info.rolesModel.name);
        await AsyncStorage.setItem("empresa", info.empresasModel.id.toString());
        await AsyncStorage.setItem("usuario", info.id.toString());
        navigation.navigate("Inicio");
      }
    };      
    obtenerDatosUser();
  }, [info, navigation]);

  return (
    <View style={general.container}>
      <Cargando />
    </View>
  ); 
}
