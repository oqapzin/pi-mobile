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
        navigation.setOptions({ title: `Partido ${route.params.name}` })
        setIsLoading(false)
      }, 1000)
  
    })
  }, [])

  console.log(queryPartido)

  return (
    <>
      {
        isLoading ?
          <ActivityIndicator style={styles.loading} animating={true} color="#ecb334" />
          :
          <PartidoData 
          name={queryPartido.nome}
          QntDeputados={queryPartido["status"].totalPosse}
          sigla={queryPartido.sigla}
          nameDep={queryPartido["status"].lider.nome}
          photo={queryPartido["status"].lider.urlFoto}

          
          navigation={navigation}/>
          
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