import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Text } from 'react-native-paper'
import axiosConnect from '../../services/api/ConsumeAPI'
import { StyleSheet } from 'react-native'
import PartidoData from '../../components/Partidos/partido/PartidoData'

const Partido = ({ navigation, route }) => {
  const [queryPartido, setQueryPartido] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [QuerryDepFem, setQuerryDepFem] = useState([])
  const [QuerryDepMas, setQuerryDepMas] = useState([])

  useEffect(() => {
    axiosConnect.get(`/deputados?siglaSexo=F&siglaPartido=${route.params.sigla}&ordenarPor=nome&ordem=asc`).then(result =>{
      setQuerryDepFem(result.data.dados)
    })
    axiosConnect.get(`/deputados?siglaSexo=M&siglaPartido=${route.params.sigla}&ordenarPor=nome&ordem=asc`).then(result =>{
      console.log(result.data.dados)
      setQuerryDepMas(result.data.dados)
    })
    axiosConnect.get(`/partidos/${route.params.id}`).then(result => {
      setQueryPartido(result.data.dados)

      setTimeout(() => {
        navigation.setOptions({ title: `Partido ${route.params.name}` })
        setIsLoading(false)
      }, 4000)
  
    })


  }, [])
  
  

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
          photo={queryPartido["status"]["lider"].urlFoto}
          siglaDp={queryPartido["status"]["lider"].uf}
          depFem={QuerryDepFem}
          depMas={QuerryDepMas}

          
          navigation={navigation}/>
          
      }
    </>
  )
}

export default Partido

export async function getServerSideProps(context) {
  const partidoId = context.params.id
  const resultPartido = await axiosConnect.get(`/partidos/${partidoId}`)
  const partido = resultPartido.data.dados

  const resultLider = await axiosConnect.get(`/partidos/${partidoId}/lideres`)
  const liderPartido = resultLider.data.dados
  const resultLiderDados = await axiosConnect.get(`/deputados/${liderPartido[0].id}`)
  const liderPartidoDados = resultLiderDados.data.dados

  const resultMembrosMasc = await axiosConnect.get(`/deputados?siglaSexo=M&siglaPartido=${partido["sigla"]}&ordenarPor=nome&ordem=asc`)
  const membrosPartidoMasc = resultMembrosMasc.data.dados
  const resultMembrosFem = await axiosConnect.get(`/deputados?siglaSexo=F&siglaPartido=${partido["sigla"]}&ordenarPor=nome&ordem=asc`)
  const membrosPartidoFem = resultMembrosFem.data.dados

  console.log(membrosPartidoMasc.length)

  return {
    props: { partido, liderPartidoDados, membrosPartidoMasc, membrosPartidoFem },
  }
}

const styles = StyleSheet.create({
  loading: {
    justifyContent: "center",
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  }
});