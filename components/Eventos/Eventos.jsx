import React from 'react'
import { useEffect, useState } from "react";
import axiosConnect from "../../services/api/ConsumeAPI";
import { View } from "react-native";
import { Agenda, Calendar } from 'react-native-calendars';
import { Text } from 'react-native-paper';

function Agend() {
  const [querryEventos, setQueryEventos] = useState([])
  useEffect(() => {
    axiosConnect.get(`/eventos`).then(result => {
      setQueryEventos(result.data.dados)
    })
  }, [])


  /*function getData() {
    var obj
    const objsContat = []
    querryEventos.map(item => {
      obj = {
        id: item.id,
        title: item.descricaoTipo,
        start: item.dataHoraInicio,
        end: item.dataHoraFim,
      };

      objsContat.push(obj)
    })

    return objsContat;
  }
  console.log(getData())
*/


  return (
    <View>
      <Text>agenda</Text>
      <Agenda
        renderItem={{'2023-11-26':[{name: 'test 1'}]}}
        theme={{
          agendaDayTextColor: 'yellow',
          agendaDayNumColor: 'green',
          agendaTodayColor: 'red',
          agendaKnobColor: 'blue'
        }}
      />

    </View>
  )

}

export default Agend
