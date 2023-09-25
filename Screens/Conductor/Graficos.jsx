import React from "react";
import { View, StyleSheet } from "react-native";
import { Card } from "react-native-elements";
import { BarChart, LineChart } from "react-native-chart-kit";

export function SimpleBarChart() {
  const data = {
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: "#ffffff",
    backgroundGradientTo: "#ffffff",
    color: (opacity = 1) => `rgba(123, 0, 0, ${opacity})`,
    strokeWidth: 2, // opcional, valor predeterminado 3
  };

  return (
    <View style={styles.container}>
      <Card>
        <LineChart
          data={data}
          width={350}
          height={220}
          chartConfig={chartConfig}
        />
      </Card>
    </View>
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
