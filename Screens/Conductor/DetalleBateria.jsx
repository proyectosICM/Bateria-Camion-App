import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Card } from "react-native-elements"; // Importa Card de react-native-elements
import { ColorTexto } from "../../Styles/paletaDeColores";
import { general } from "../../Styles/general";

export function DetalleBateria() {
  return (
    <ScrollView contentContainerStyle={general.container}>
      <Text>Placa: ABC</Text>
      <Text>Incidencias sin revisar: 0</Text>
      <Text>Registro en tiempo real</Text>
      <View style={general.cardContainer}>
        <Card title="Bateria1">
          <View>
            <Text style={general.centerText}>Bateria 1</Text>
            <Text style={general.centerText}>Voltaje: 22 v</Text>
            <Text style={general.centerText}>Carga: 22 v</Text>
            <Text style={general.centerText}>Corriente: 22 v</Text>
          </View>
        </Card>

        <Card title="Bateria2">
          <View>
            <Text style={general.centerText}>Bateria 2</Text>
            <Text style={general.centerText}>Voltaje: 22 v</Text>
            <Text style={general.centerText}>Carga: 22 v</Text>
            <Text style={general.centerText}>Corriente: 22 v</Text>
          </View>
        </Card>

        <Card title="Bateria3">
          <View>
            <Text style={general.centerText}>Bateria 3</Text>
            <Text style={general.centerText}>Voltaje: 22 v</Text>
            <Text style={general.centerText}>Carga: 22 v</Text>
            <Text style={general.centerText}>Corriente: 22 v</Text>
          </View>
        </Card>

        <Card title="Bateria4">
          <View>
            <Text style={general.centerText}>Bateria 4</Text>
            <Text style={general.centerText}>Voltaje: 22 v</Text>
            <Text style={general.centerText}>Carga: 22 v</Text>
            <Text style={general.centerText}>Corriente: 22 v</Text>
          </View>
        </Card>
      </View>
    </ScrollView>
  );
}

