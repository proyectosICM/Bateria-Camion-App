import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Alert } from "react-native";
import { general } from "../../Styles/general";
import { Card, Icon } from "react-native-elements"; // Asegúrate de importar los componentes correctos
import { useState } from "react";
import { useListarElementos } from "../../Hooks/CRUDHook";
import { IncidenciasxCamionR, IncidenciasxCamionSR } from "../../API/apiurls";
import { useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

export function Incidencias() {
  const navigation = useNavigation();
  const handleCardClick = (data) => {
    setSelected(data);
  };

  const [selected, setSelected] = useState("Sin Revisar");
  const [urlIncidencia, setUrlIncidencia] = useState("");

  useEffect(() => {
    if (selected == "Sin Revisar") {
      setUrlIncidencia(`${IncidenciasxCamionSR}2`);
    } else if (selected == "Revisadas") {
      setUrlIncidencia(`${IncidenciasxCamionR}2`);
    }
  }, [selected]);

  const [incidenciasL, setIncidenciasL] = useState();

  const ListarIncidencias = useListarElementos(`${urlIncidencia}`, setIncidenciasL);

  useEffect(() => {
    const intervalId = setInterval(() => {
      ListarIncidencias();
    }, 500);

    return () => clearInterval(intervalId);
  }, [ListarIncidencias]);

  return (
    <View style={general.container}>
      <Text>Incidencias del vehiculo</Text>

      <View style={general.cardContainer}>
        <TouchableOpacity onPress={() => handleCardClick("Sin Revisar")}>
          <Card title="Bateria1">
            <View>
              <Text style={general.centerText}>Incidencias sin revisar</Text>
            </View>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleCardClick("Revisadas")}>
          <Card title="Bateria2">
            <View>
              <Text style={general.centerText}>Incidencias revisadas</Text>
            </View>
          </Card>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {incidenciasL &&
          incidenciasL.map((dato, index) => (
            <Card key={index}>
              <TouchableOpacity onPress={() => navigation.navigate("Detalle Incidencia", {dataid: dato.id_inc})}>
                <View style={{ width: 300 }}>
                  <Text style={general.centerText}>{dato.estado ? "Revisada" : "No revisada"}</Text>
                  {dato.estado == false && (
                    <Icon
                      name="dot-circle-o"
                      type="font-awesome"
                      size={20}
                      color="red"
                      containerStyle={{ position: "absolute", top: 10, left: 10 }}
                    />
                  )}
                  <Text style={general.centerText}>{dato.id_inc}</Text>
                  <Text style={general.centerText}>{dato.nom_inc}</Text>
                </View>
              </TouchableOpacity>
            </Card>
          ))}
      </ScrollView>
    </View>
  );
}
