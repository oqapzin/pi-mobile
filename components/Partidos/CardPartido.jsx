import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { ActivityIndicator, Avatar, Card, IconButton } from 'react-native-paper'
import InputFilter from './InputFilter'

const CardDeputado = ({ navigation, arrayData = [] }) => {
    const [deputados, setDeputados] = useState([])
    const [oldDataDeputados, setOldDataDeputados] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        setDeputados(arrayData)
        setOldDataDeputados(arrayData)
        setIsLoading(false)
    }, [arrayData])


    const filter = (inputValue) => {
        if (inputValue !== '') {
            const filteredData = deputados.filter((item) => {
                return item.nome.toLowerCase().includes(inputValue.toLowerCase());
            });
            setDeputados(filteredData)
        }
        else {
            setDeputados(oldDataDeputados)
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
                        data={deputados}
                        renderItem={({ item }) => (
                            <Card.Title
                                key={item.id}
                                title={`${item.nome}`}
                                subtitle={`${item.siglaPartido ? item.siglaPartido + " -" : ""} ${item.siglaUf}`}
                                left={() => <Avatar.Image size={40} source={{ uri: item.urlFoto }} />}
                                right={() => <IconButton icon="more" onPress={() => navigation.push("deputado", { id: item.id })} />}
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

export default CardDeputado