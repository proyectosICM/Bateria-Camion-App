import React from "react";
import { Text, View } from "react-native";
import { general } from "../../Styles/general";
import { Button, Card } from "react-native-elements";

export function MenuCamiones() {
  return (
    <View style={general.container}>
      <View style={general.cardContainer}>
        <Card>
          <View style={general.cardItem}>
            <Card.Title>Placa ABC</Card.Title>
            <Text  style={{textAlign: "center"}}>Cantidad de baterias 4</Text>
            <Button title={"Ver detalles"} buttonStyle={general.buttonStyle} />
            <Button title={"Incidencias"} buttonStyle={general.buttonStyle} />
            <Button title={"Arranques"} buttonStyle={general.buttonStyle} />
          </View>
        </Card>

        <Card>
          <View style={general.cardItem}>
            <Card.Title>Placa ABC</Card.Title>
            <Text>Cantidad de baterias</Text>
            <Button title={"Ver detalles"} buttonStyle={general.buttonStyle} />
            <Button title={"Incidencias"} buttonStyle={general.buttonStyle} />
            <Button title={"Arranques"} buttonStyle={general.buttonStyle} />
          </View>
        </Card>
      </View>
    </View>
  );
}
