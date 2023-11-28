import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Text } from 'react-native-paper'
import DeputadoData from '../../components/Deputados/Deputado/DeputadoData'
import axiosConnect from '../../services/api/ConsumeAPI'
import { StyleSheet } from 'react-native'
import { View } from 'react-native'

const Deputado = ({ navigation, route }) => {
  const [queryDeputado, setQueryDeputado] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axiosConnect.get(`/deputados/${route.params.id}`).then(result => {
      setQueryDeputado(result.data.dados)
      setTimeout(() => {
        setIsLoading(false)
      }, 1000)
    })
    navigation.setOptions({ title: `Deputado ${route.params.name}` })

  }, [])

  return (
    <>
      {isLoading ?
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size={50} animating={true} color="#ecb334" style={{ marginTop: 30 }} />
        </View>
        :
        <DeputadoData id={queryDeputado["id"]} name={queryDeputado["ultimoStatus"].nome} state={queryDeputado["ultimoStatus"].siglaUf} school={queryDeputado.escolaridade} partido={queryDeputado["ultimoStatus"].siglaPartido} date={queryDeputado.dataNascimento} photo={queryDeputado["ultimoStatus"].urlFoto} navigation={navigation} />
      }
    </>
  )
}

export default Deputado
