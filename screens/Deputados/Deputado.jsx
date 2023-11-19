import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Text } from 'react-native-paper'
import DeputadoData from '../../components/Deputados/Deputado/DeputadoData'
import axiosConnect from '../../services/api/ConsumeAPI'
import { StyleSheet } from 'react-native'

const Deputado = ({ navigation, route }) => {
  const [queryDeputado, setQueryDeputado] = useState([])
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    axiosConnect.get(`/deputados/${route.params.id}`).then(result => {
      setQueryDeputado(result.data.dados)
      setIsLoading(false)
    })

    navigation.setOptions({ title: `Deputado ${route.params.name}` })
  }, [])

  return (
    <>
      {
        isLoading ?
          <ActivityIndicator style={styles.loading} animating={true} color="#ecb334" />
          :
          <DeputadoData name={queryDeputado["ultimoStatus"].nome} state={queryDeputado["ultimoStatus"].siglaUf} school={queryDeputado.escolaridade} partido={queryDeputado["ultimoStatus"].siglaPartido} date={queryDeputado.dataNascimento}  photo={queryDeputado["ultimoStatus"].urlFoto} navigation={navigation} />
      }
    </>
  )
}

export default Deputado

const styles = StyleSheet.create({
  loading: {
    justifyContent: "center",
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  }
});