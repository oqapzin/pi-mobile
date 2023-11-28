import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import CardDeputado from '../../components/Deputados/CardDeputado';
import axiosConnect from "../../services/api/ConsumeAPI"
import { ActivityIndicator } from 'react-native-paper';
const Deputados = ({ navigation, route }) => {
    const [queryDeputados, setQueryDeputados] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axiosConnect.get(`/deputados?ordem=ASC&ordenarPor=nome`).then(result => {
            setQueryDeputados(result.data.dados)
            setIsLoading(false)
        })
    }, [])

    return (
        <View>
            {isLoading ?
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size={50} animating={true} color="#ecb334" style={{ marginTop: 30 }} />
                </View>
                :
                <CardDeputado arrayData={queryDeputados} navigation={navigation} />
            }
            <StatusBar style="auto" />
        </View>
    )
}


export default Deputados