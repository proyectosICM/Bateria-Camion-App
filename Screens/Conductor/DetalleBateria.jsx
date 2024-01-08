import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Card } from "react-native-elements";
import { general } from "../../Styles/general";
import { LineChart } from "react-native-chart-kit";
import { useNavigation } from "@react-navigation/native";

export function DetalleBateria() {
  const navigation = useNavigation();
  const [selectedData, setSelectedData] = useState(null);

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

  console.log("sdd")
  return (
    < > 
      <Text>Placa: ABC</Text>
      <Text>Incidencias sin revisar: 0</Text>
      <Text>Registro en tiempo real</Text>
      <View style={general.cardContainer}>
        <TouchableOpacity onPress={() => handleCardClick(data1)}>
          <Card title="Bateria1">
            <View>
              <Text style={general.centerText}>Bateria 1</Text>
              <Text style={general.centerText}>Voltaje: 22 v</Text>
              <Text style={general.centerText}>Carga: 22 v</Text>
              <Text style={general.centerText}>Corriente: 22 v</Text>
            </View>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleCardClick(data2)}>
          <Card title="Bateria2">
            <View>
              <Text style={general.centerText}>Bateria 2</Text>
              <Text style={general.centerText}>Voltaje: 22 v</Text>
              <Text style={general.centerText}>Carga: 22 v</Text>
              <Text style={general.centerText}>Corriente: 22 v</Text>
            </View>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleCardClick(data3)}>
          <Card title="Bateria3">
            <View>
              <Text style={general.centerText}>Bateria 3</Text>
              <Text style={general.centerText}>Voltaje: 22 v</Text>
              <Text style={general.centerText}>Carga: 22 v</Text>
              <Text style={general.centerText}>Corriente: 22 v</Text>
            </View>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleCardClick(data4)}>
          <Card title="Bateria4">
            <View>
              <Text style={general.centerText}>Bateria 4</Text>
              <Text style={general.centerText}>Voltaje: 22 v</Text>
              <Text style={general.centerText}>Carga: 22 v</Text>
              <Text style={general.centerText}>Corriente: 22 v</Text>
            </View>
          </Card>
        </TouchableOpacity>

        <Card>
          {selectedData ? (
            <View>
              <Text style={{textAlign: "center"}}>{selectedData["title"]}</Text>
              <LineChart data={selectedData} width={300} height={300} chartConfig={chartConfig} />

            </View>
          ) : (
            <View style={{ width: 300, height: 300 }}></View>
          )}
        </Card>
      </View>
    </>
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
