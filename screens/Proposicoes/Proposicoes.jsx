import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { ActivityIndicator, AnimatedFAB, Button, Card, PaperProvider, Portal } from 'react-native-paper';
import axiosConnect from '../../services/api/ConsumeAPI';
import siglas from '../../complements/proposicoesSiglas';
import SimpleModal from '../../components/Modal/SimpleModal';
import ProposicaoModal from '../../components/Modal/ProposicaoModal';

const Proposicoes = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [queryProposicoes, setQueryProposicoes] = useState([])
    const [openSimpleModal, setOpenSimpleModal] = useState(false)
    const [openProposicaoModal, setOpenProposicaoModal] = useState(false)
    const [proposicaoData, setProposicaoData] = useState([])

    useEffect(() => {
        axiosConnect.get(`/proposicoes?ano=2023&ano=2022&ano=2021&itens=50&ordem=ASC&ordenarPor=id`).then(result => {
            setQueryProposicoes(result.data.dados)
            setIsLoading(false)
        })
    }, [])


    const getData = (id) => {
        axiosConnect.get(`/proposicoes/${id}`).then(result => {
            setProposicaoData(result.data.dados)
            setOpenProposicaoModal(true)
        })
    }

    return (
        <PaperProvider>
            <View style={styles.Container}>
                <Portal>
                    {isLoading ?
                        <ActivityIndicator size={50} animating={true} color="#ecb334" style={{ marginTop: 30 }} />
                        :
                        <>
                            <FlatList
                                data={queryProposicoes}
                                renderItem={({ item }) =>
                                    <Card style={styles.Card}>
                                        <Card.Content>
                                            <Text variant="titleLarge" style={{ fontWeight: "bold", marginBottom: 5 }}>{siglas[item.siglaTipo.toUpperCase() ?? "PL"] ?? item.siglaTipo} - {item.ano}</Text>
                                            <Text variant="bodyMedium">{item.ementa}</Text>
                                        </Card.Content>
                                        <Card.Actions>
                                            <Button textColor={"#101F41"} icon="bookmark" mode="text" onPress={() => getData(item.id)}>DETALHES</Button>
                                        </Card.Actions>
                                    </Card>}
                                decelerationRate={0.1}
                            />

                            <AnimatedFAB
                                icon={'alert-circle-outline'}
                                color={"#101F41"}
                                label={'Label'}
                                onPress={() => setOpenSimpleModal(true)}
                                animateFrom={'right'}
                                iconMode={'static'}
                                style={[styles.FabStyle]}
                            />


                            <SimpleModal
                                textValue={"Uma proposição na Câmara dos Deputados do Brasil é um documento que contém uma ideia legislativa apresentada pelos deputados, podendo se tornar lei após análise, discussão e votação."}
                                setVisible={openSimpleModal}
                                returnVisibleStatus={() => setOpenSimpleModal(false)}
                            />

                            <ProposicaoModal
                                title={proposicaoData["ementa"]}
                                subTitle={`${proposicaoData["siglaTipo"]} - ${proposicaoData["numero"]}`}
                                text={proposicaoData["ementaDetalhada"] || "Sem detalhes."}
                                setModalVisible={openProposicaoModal}
                                returnModalVisibleStatus={() => setOpenProposicaoModal(false)}
                            />
                            <StatusBar style="auto" />

                        </>
                    }
                </Portal>
            </View>
        </PaperProvider>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
    },

    FabStyle: {
        bottom: 16,
        right: 16,
        position: 'absolute',
        backgroundColor: "#ecb334"
    },

    Card: {
        margin: 10,
        backgroundColor: "#FFE2A3",
        borderRadius: 10,
    },
});

export default Proposicoes