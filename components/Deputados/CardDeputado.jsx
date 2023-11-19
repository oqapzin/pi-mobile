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


    const AvatarImage = (imageUri) => {
        return (
            <View style={styles.AvatarView}>
                <Avatar.Image size={50} style={{ backgroundColor: '#101F41' }} source={{ uri: imageUri }} />
            </View>
        )
    }

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
        <View style={styles.Container}>
            <InputFilter setInputData={(value) => filter(value)} />
            {isLoading ?
                <ActivityIndicator style={styles.Loading} animating={true} color="#ecb334" />
                :
                <>
                    <FlatList
                        data={deputados}
                        renderItem={({ item }) => (
                            <Card.Title
                                key={item.id}
                                style={styles.Card}
                                title={`${item.nome}`}
                                subtitle={`${item.siglaPartido ? item.siglaPartido + " -" : ""} ${item.siglaUf}`}
                                titleStyle={{ color: "#101F41", marginLeft: 5, fontWeight: "bold" }}
                                subtitleStyle={{ color: "#101F41", marginLeft: 5, fontWeight: "600" }}
                                removeClippedSubviews={true}
                                left={() => AvatarImage(item.urlFoto)}
                                right={() => <IconButton icon="arrow-right" onPress={() => navigation.push("deputado", { id: item.id, name: item.nome })} />}
                            />
                        )}
                        keyExtractor={(item) => item.id.toString()}
                        style={styles.Scroll}
                    />
                </>
            }
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

export default CardDeputado