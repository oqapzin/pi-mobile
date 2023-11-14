import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import CardDeputado from '../../components/Deputados/CardDeputado';
import axiosConnect from "../../services/api/ConsumeAPI"
import { Text } from 'react-native-paper';
const Deputados = ({ navigation, route }) => {
    const [queryDeputados, setQueryDeputados] = useState([])

    useEffect(() => {
        axiosConnect.get(`/deputados`).then(result => {
            setQueryDeputados(result.data.dados)
        })
    }, [])

    return (
        <View>
            <CardDeputado arrayData={queryDeputados} navigation={navigation} />
            <StatusBar style="auto" />
        </View>
    )
}


export default Deputados