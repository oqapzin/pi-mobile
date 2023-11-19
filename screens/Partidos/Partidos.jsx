import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import CardPartido from '../../components/Partidos/CardPartido';
import axiosConnect from "../../services/api/ConsumeAPI"
const Partidos = ({ navigation, route }) => {
    const [queryPartidos, setQueryPartidos] = useState([])

    useEffect(() => {
        axiosConnect.get(`/partidos`).then(result => {
            setQueryPartidos(result.data.dados)
        })
    }, [])

    return (
        <View>
            <CardPartido arrayData={queryPartidos} navigation={navigation} />
            <StatusBar style="auto" />
        </View>
    )
}


export default Partidos