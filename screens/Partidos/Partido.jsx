import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Text } from 'react-native-paper'
import axiosConnect from '../../services/api/ConsumeAPI'
import { StyleSheet } from 'react-native'
import PartidoData from '../../components/Partidos/partido/PartidoData'

const Partido = ({ navigation, route }) => {
  const [queryPartido, setQueryPartido] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axiosConnect.get(`/partidos/${route.params.id}`).then(result => {
      setQueryPartido(result.data.dados)
      setIsLoading(false)

      setTimeout(() => {
        navigation.setOptions({ title: `Deputado ${route.params.name}` })
        setIsLoading(false)
      }, 1000)
  
    })
  }, [])

  return (
    <>
      {
        isLoading ?
          <ActivityIndicator style={styles.loading} animating={true} color="#ecb334" />
          :
          <PartidoData name={queryPartido["ultimoStatus"].nome} navigation={navigation}/>
          
      }
    </>
  )
}

export default Partido

const styles = StyleSheet.create({
  loading: {
    justifyContent: "center",
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  }
});