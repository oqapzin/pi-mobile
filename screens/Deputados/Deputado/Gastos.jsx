import React, { useEffect } from 'react'
import { Text } from 'react-native-paper'
import { LineChart } from "react-native-gifted-charts"
import { useState } from 'react';
import { Dimensions, View } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import axiosConnect from "../../../services/api/ConsumeAPI"


const GastosDeputado = ({navigation,route}) => {
  const [gastos, setGastos] = useState([])
  const [valores, setValores] = useState({})
  const screenWidth = Dimensions.get("window").width;
  const data = {
    labels: ['Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',],
      datasets: [
        {
          data: [20, 45, 28, 80, 99, 43],
          color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
          strokeWidth: 2 // optional
        },
      ],
      bezier: true
  };

  useEffect(() => {
    let id = route.params.id
    axiosConnect.get(`/deputados/${id}/despesas`).then(result => {
      setGastos(result.data.dados)
    })  
  }, [])


  useEffect(() => {

    const totais = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < gastos.length; i++) {
      const mes = gastos[i].mes;
      totais[mes] += gastos[i].valorLiquido;
    }

    const mostrar = [];
    totais.forEach((valor) => {
      if (valor > 0) {
        mostrar.push(valor.toFixed(2));
      }
    });

    setValores(mostrar);
  }, [gastos]);


  const chartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2, // optional, default 3
  };
  return (
    <View style={{width: "100%"}}>
      <LineChart
        data={data}
        height={256}
        width={150}
        chartConfig={chartConfig}
      />

    </View>
  );
}

export default GastosDeputado