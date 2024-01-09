import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Card } from "react-native-elements";
import { general } from "../../Styles/general";
import { LineChart } from "react-native-chart-kit";
import { useNavigation } from "@react-navigation/native";
import { useListarElementos } from "../../Hooks/CRUDHook";
import { bateriasxCamion, camionesURL } from "../../API/apiurls";

export function DetalleBateria() {
  const navigation = useNavigation();
  const [selectedData, setSelectedData] = useState(null);

  const [baterias, setBaterias] = useState();
  const [camion, setCamion] = useState();

  const ListarBaterias = useListarElementos(`${bateriasxCamion}1`, setBaterias);
  const ListarCamion = useListarElementos(`${camionesURL}1`, setCamion);

  useEffect(() => {
    ListarBaterias();
  }, [ListarBaterias]);

  useEffect(() => {
    ListarCamion();
  }, [ListarCamion]);

  

  const data1 = {
    title: "Bateria 1",
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };

  const data2 = {
    title: "Bateria 2",
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
    datasets: [
      {
        data: [55, 41, 38, 60, 39, 43],
      },
    ],
  };

  const data3 = {
    title: "Bateria 3",
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
    datasets: [
      {
        data: [78, 28, 28, 36, 22, 82],
      },
    ],
  };

  const data4 = {
    title: "Bateria 4",
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
    datasets: [
      {
        data: [15, 36, 89, 70, 35, 25],
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: "#ffffff",
    backgroundGradientTo: "#ffffff",
    color: (opacity = 1) => `rgba(123, 0, 0, ${opacity})`,
    strokeWidth: 2,
  };

  const handleCardClick = (data) => {
    setSelectedData(data);
  };

  console.log("sdd");
  return (
    <ScrollView>
      <Text>Placa: {camion.placa}</Text>
      <Text>Incidencias sin revisar: 0</Text>
      <Text>Registro en tiempo real</Text>

      <View style={general.cardContainer}>
        {baterias &&
          baterias.map((bateria, index) => {
            return (
              <TouchableOpacity onPress={() => handleCardClick(data1)}>
                <Card title="Bateria1">
                  <View>
                    <Text style={general.centerText}>Bateria {index + 1} </Text>
                    <Text style={general.centerText}>Voltaje: {bateria.voltaje}</Text>
                    <Text style={general.centerText}>Carga: {bateria.carga}</Text>
                    <Text style={general.centerText}>Corriente: {bateria.corriente}</Text>
                  </View>
                </Card>
              </TouchableOpacity>
            );
          })}

        <Card>
          {selectedData ? (
            <View>
              <Text style={{ textAlign: "center" }}>{selectedData["title"]}</Text>
              <LineChart data={selectedData} width={300} height={300} chartConfig={chartConfig} />
            </View>
          ) : (
            <View style={styles.inicial}>
              <Text style={styles.texto}>Seleccione una bateria para ver los datos</Text>
            </View>
          )}
        </Card>
      </View>
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
  inicial: {
    fontSize: 120,
    width: 300,
    height: 300,
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
  texto: {
    fontSize: 20,
    textAlign: "center",
  },
});
