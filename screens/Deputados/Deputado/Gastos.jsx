import React from 'react'
import { Text } from 'react-native-paper'
import { LineChart } from "react-native-gifted-charts"
import { useState } from 'react';
import { Dimensions, View } from 'react-native';


const GastosDeputado = () => {
  const screenWidth = Dimensions.get("window").width;
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2 // optional
      }
    ],
    legend: ["Rainy Days"] // optional
  };
  return (
    <View
      style={{
        paddingVertical: 100,
        paddingLeft: 20,
      }}>
      <LineChart
        data={data}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
      />
    </View>
  );
}

export default GastosDeputado