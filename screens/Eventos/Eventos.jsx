import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import axiosConnect from "../../services/api/ConsumeAPI"
import Agend from '../../components/Eventos/Eventos';
import { Card, Text } from 'react-native-paper';
const Eventos = ({ navigation, route }) => {
    const [querryEventos, setQueryEventos] = useState([])

    useEffect(() => {
        axiosConnect.get(`/eventos`).then(result => {
            setQueryEventos(result.data.dados)
        })
    }, [])
    console.log(querryEventos)

    function renderItem({ item }) {
        return <Card style={styles.Card}>
            <Card.Content>
                <Text variant="titleLarge">{item.descricaoTipo}</Text>
                <Text variant="bodyMedium">Data: {item.dataHoraInicio.slice(0, -6)} as {item.dataHoraInicio.slice(11)}Hrs</Text>
                <Text variant="bodySmall">{item.descricao}</Text>
            </Card.Content>
        </Card>


    }

    return (
        <View>
            <FlatList
                data={querryEventos}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )

}
const styles = StyleSheet.create({
    Container: {
        justifyContent: "center",
        alignItems: 'center',
        justifyContent: 'center'
    },

    Card: {
        backgroundColor: "#FFE2A3",
        marginTop: 5,
        marginHorizontal: 12,
        borderRadius: 5
    },

    Scroll: {
        width: "100%",
    },

    Loading: {
        justifyContent: "center",
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50
    },

    AvatarView: {
        backgroundColor: "#D58C00",
        width: 54,
        height: 54,
        borderRadius: 58,
        paddingTop: 1.7,
        paddingLeft: 2
    }
});
export default Eventos
