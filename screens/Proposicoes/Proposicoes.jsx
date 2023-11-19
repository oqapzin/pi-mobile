import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { ActivityIndicator, Button, Card } from 'react-native-paper';
import axiosConnect from '../../services/api/ConsumeAPI';
import siglas from '../../complements/proposicoesSiglas';

const Proposicoes = () => {
    const [queryProposicoes, setQueryProposicoes] = useState([])
    useEffect(() => {
        axiosConnect.get(`/proposicoes?ano=2023&ano=2022&ano=2021&itens=50&ordem=ASC&ordenarPor=id`).then(result => {
            setQueryProposicoes(result.data.dados)
        })


    }, [])
    return (
        <View style={styles.container}>
            <FlatList
                data={queryProposicoes}
                renderItem={({ item }) =>
                    <Card>
                        <Card.Content>
                            <Text variant="titleLarge">{siglas[item.siglaTipo.toUpperCase() ?? "PL"] ?? item.siglaTipo} - {item.numero}</Text>
                            <Text variant="bodyMedium">{item.ementa}</Text>
                        </Card.Content>
                        <Card.Actions>
                            <Button>Cancel</Button>
                            <Button>Ok</Button>
                        </Card.Actions>
                    </Card>}
                ListFooterComponent={<ActivityIndicator size={50} animating={true} color="#ecb334" style={{ marginTop: 30 }} />}
                decelerationRate={0.1}
            />

            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Proposicoes