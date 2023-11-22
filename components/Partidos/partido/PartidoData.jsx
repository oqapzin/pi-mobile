import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { ActivityIndicator, Avatar, Card, IconButton } from 'react-native-paper'
import InputFilter from '../../Deputados/InputFilter'

const CardPartido = ({ navigation, arrayData = [] }) => {
    const [partidos, setPartidos] = useState([])
    const [oldDataPartidos, setOldDataPartidos] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        setPartidos(arrayData)
        setOldDataPartidos(arrayData)
        setIsLoading(false)
    }, [arrayData])


    const filter = (inputValue) => {
        if (inputValue !== '') {
            const filteredData = partidos.filter((item) => {
                return item.nome.toLowerCase().includes(inputValue.toLowerCase());
            });
            setPartidos(filteredData)
        }
        else {
            setPartidos(oldDataPartidos)
        }
    }

    return (
        <View>
            <InputFilter setInputData={(e) => filter(e)} />
            {isLoading ?
                <ActivityIndicator style={styles.loading} animating={true} color="#ecb334" />
                :
                <>
                    <FlatList
                        data={partidos}
                        renderItem={({ item }) => (
                            <Card.Title
                                key={item.id}
                                title={`${item.nome}`}
                                subtitle={`${item.sigla}`}
                                right={() => <IconButton icon="arrow-right" onPress={()=> navigation.push("Partido", { Id: item.id})} />}
                            />
                        )}
                        keyExtractor={(item) => item.id.toString()}
                        style={styles.scroll}
                    />
                </>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    scroll: {
        width: "100%"
    },
    loading: {
        justifyContent: "center",
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50
    }
});

export default CardPartido