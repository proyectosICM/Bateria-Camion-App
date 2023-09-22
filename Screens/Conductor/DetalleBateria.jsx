import React from "react";
import { View } from "react-native";
import { general } from "../../Styles/general";

export function DetalleBateria() {
  return (
    <View style={general.container}>
      <Text>Placa: ABC</Text>
      <Text>Incidencias sin revisar: 0</Text>
    </View>
  );
}
