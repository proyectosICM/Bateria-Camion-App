import React, { useCallback, useEffect, useState } from "react";
import { Text, View } from "react-native";
import { camionxtrabajadorURL, infoURL } from "../../API/apiurls";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useListarElementos } from "../../Hooks/CRUDHook";
import { MenuCamiones } from "../Common/MenuCamiones";
import { Cargando } from "../Common/Cargando";
import { general } from "../../Styles/general";

export function Redigirir({ navigation }) {
  const [info, setInfo] = useState();
  const [user, setUser] = useState(null);
  const [camionData, setCamionData] = useState();
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

  const CamionData = useListarElementos(`${camionxtrabajadorURL}${info && info.id_tra}`, setCamionData)
  console.log(`${camionxtrabajadorURL}${info && info.id_tra}`);
  useEffect(() => {
    ListarInfo();
  }, [ListarInfo]);

  useEffect(() => {
    const obtenerDatosUser = async () => {
      if (info) {
        await AsyncStorage.setItem("rol", info.rolesModel.name);
        await AsyncStorage.setItem("empresa", info.empresasModel.id_emp.toString());
        await AsyncStorage.setItem("usuario", info.id_tra.toString());
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
