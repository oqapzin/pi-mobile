import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { ActivityIndicator, AnimatedFAB, Button, Card, PaperProvider, Portal } from 'react-native-paper';
import SimpleModal from "../../../components/Modal/SimpleModal"
import axiosConnect from "../../../services/api/ConsumeAPI"

const OrgaosDeputado = ({ navigation, route }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [openSimpleModal, setOpenSimpleModal] = useState(false)
  const [openProposicaoModal, setOpenProposicaoModal] = useState(false)
  const [orgaos, setOrgaos] = useState([])

  useEffect(() => {
    axiosConnect.get(`/deputados/${route.params.id}/orgaos`).then(result => {
      setOrgaos(result.data.dados)
      setIsLoading(false)
    })
  }, [])


  return (
    <PaperProvider>
      <View style={styles.Container}>
        <Portal>
          {isLoading ?
            <ActivityIndicator size={50} animating={true} color="#ecb334" style={{ marginTop: 30 }} />
            :
            <>
              <FlatList
                data={orgaos}
                renderItem={({ item }) =>
                  <Card style={styles.Card}>
                    <Card.Content>
                      <Text variant="titleLarge" style={{ fontWeight: "bold", marginBottom: 5 }}>{item["nomeOrgao"]} | {item["titulo"]}</Text>
                      <Text variant="bodyMedium">{` Ínicio: ${item["dataInicio"] || 2020} ${item["dataFim"]? "- Fim: "+item["dataFim"]:""} `}</Text>
                    </Card.Content>

                  </Card>}
                decelerationRate={0.1}
              />
              
            {/*   <AnimatedFAB
                icon={'alert-circle-outline'}
                color={"#101F41"}
                label={'Label'}
                onPress={() => setOpenSimpleModal(true)}
                animateFrom={'right'}
                iconMode={'static'}
                style={[styles.FabStyle]}
              /> */}

              <SimpleModal
                textValue={"A função retorna uma lista de informações básicas sobre os cargos para os quais o parlamentar foi eleito ao longo de sua carreira política fora da Câmara dos Deputados. Esses dados são fornecidos pelo Tribunal Superior Eleitoral e estão ordenados cronologicamente."}
                setVisible={openSimpleModal}
                returnVisibleStatus={() => setOpenSimpleModal(false)}
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

export default OrgaosDeputado