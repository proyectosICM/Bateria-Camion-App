import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { general } from "../../Styles/general";
import { Card } from "react-native-elements";
import { useState } from "react";
import { useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { useListarElementos } from "../../Hooks/CRUDHook";
import { IncidenciasURL } from "../../API/apiurls";

export function DetalleIncidencias() {
  const route = useRoute();
  const dataid = route.params.dataid;
  const [token, setToken] = useState();
  const [user, setUser] = useState();

  const fetchData = useCallback(async () => {
    const token = await AsyncStorage.getItem("token");
    const username = await AsyncStorage.getItem("username");
    setUser(username);
    setToken(token);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const [datos, setDatos] = useState();

  useListarElementos(`${IncidenciasURL}${dataid}`, setDatos);

  return (
    <View style={general.container}>
      <Text>Bateria que lanzo la incidencia: {datos && datos.bateriasModels.nom_bat} </Text>
      <Text>Incidencia: {datos && datos.nom_inc}</Text>
      <Text>Valores registrados</Text>
      {datos && (
        <View style={general.cardContainer}>
          <TouchableOpacity>
            <Card title="Bateria1">
                <Text style={general.centerText}>Voltaje: 22 v</Text>
            </Card>
          </TouchableOpacity>

          <TouchableOpacity>
            <Card title="Bateria2">
              <View>
                <Text style={general.centerText}>Carga: 22 v</Text>
              </View>
            </Card>
          </TouchableOpacity>

          <TouchableOpacity>
            <Card title="Bateria3">
              <View>
                <Text style={general.centerText}>Corriente: 22 v</Text>
              </View>
            </Card>
          </TouchableOpacity>


        </View>
      )}
    </View>
  );
}
