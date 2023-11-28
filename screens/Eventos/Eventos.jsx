import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import axiosConnect from "../../services/api/ConsumeAPI"
import Agend from '../../components/Eventos/Eventos';
const Eventos = ({ navigation, route }) => {
    const [querryEventos, setQueryEventos] = useState([])

    useEffect(() => {
        axiosConnect.get(`/eventos`).then(result => {
            setQueryEventos(result.data.dados)
        })
    }, [])

    return (
        <View>
            <Agend/>
        </View>
    )
}


export default Eventos