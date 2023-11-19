import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View, ListRenderItemInfo } from 'react-native'
import { ActivityIndicator, Avatar, Card, IconButton } from 'react-native-paper'
import AsyncStorage from "@react-native-async-storage/async-storage"
import InputFilter from './InputFilter'

const CardDeputado = ({ navigation, arrayData = [] }) => {
    const [deputados, setDeputados] = useState([])
    const [oldDataDeputados, setOldDataDeputados] = useState([])
    const [favDeputados, setFavDeputados] = useState([])

    useEffect(() => {
        setDeputados(arrayData)
        setOldDataDeputados(arrayData)
        getFavDeputados()

    }, [arrayData])

    useEffect(() => {
        favDeputados.map(item => {
            const newDeputados = JSON.parse(JSON.stringify(deputados))

            if (newDeputados.length > 0) {
                let indexList = newDeputados.filter(item2 => item2.id == item)
                newDeputados.splice(0, 0, newDeputados.splice(newDeputados.indexOf(indexList[0]), 1)[0])
                setDeputados(newDeputados)
                setOldDataDeputados(newDeputados)
            }
        })
    }, [favDeputados])


    const AvatarImage = (imageUri) => {
        return (
            <View style={styles.AvatarView}>
                <Avatar.Image size={50} style={{ backgroundColor: '#101F41' }} source={{ uri: imageUri }} />
            </View>
        )
    }

    const filter = (inputValue) => {
        /*Desconectar as 'arrays' para que não tenha conflitos entre arrays.*/
        let array = JSON.parse(JSON.stringify(oldDataDeputados))
        setDeputados(array.filter((v) => v.nome.includes(inputValue)))
    }

    const isFavorite = (deputadoId) => {
        return (
            favDeputados.toString().indexOf(deputadoId.toString()) == -1 ?
                <IconButton icon="star-outline" iconColor="#825600" onPress={() => addFavoriteButton(deputadoId)} />
                :

                <IconButton icon="star" iconColor="#825600" onPress={() => remFavoriteButton(deputadoId)} />
        )
    }


    const getFavDeputados = async () => {
        const response = await AsyncStorage.getItem("favDeputados2")
        const deputados = response ? JSON.parse(response) : []
        setFavDeputados(deputados)
    }

    const addFavoriteButton = async (deputadoId) => {
        const deputadosFav = JSON.parse(JSON.stringify(favDeputados))
        if (!deputadosFav.toString().indexOf(deputadoId) > -1) {
            deputadosFav.push(deputadoId)
            setFavDeputados(deputadosFav)
            await AsyncStorage.setItem("favDeputados2", JSON.stringify(deputadosFav))
        }
    }

    const remFavoriteButton = async (deputadoId) => {
        const deputadosFav = JSON.parse(JSON.stringify(favDeputados))
        const favDeputadosId = deputadosFav.toString().indexOf(deputadoId)
        if (favDeputadosId >= 0) {
            deputadosFav.splice(favDeputadosId, 1)
            setFavDeputados(deputadosFav)
            await AsyncStorage.setItem("favDeputados2", JSON.stringify(deputadosFav))
        }
    }

    function renderItem({ item }) {
        return <Card.Title
            key={item.id}
            style={styles.Card}
            title={`${item.nome}`}
            subtitle={`${item.siglaPartido ? item.siglaPartido + " -" : ""} ${item.siglaUf}`}
            titleStyle={{ color: "#101F41", marginLeft: 5, fontWeight: "bold" }}
            subtitleStyle={{ color: "#101F41", marginLeft: 5, fontWeight: "600" }}
            left={() => AvatarImage(item.urlFoto)}
            right={() => <View style={{ flexDirection: "row" }}>{
                isFavorite(item.id)
            }<IconButton icon="arrow-right" onPress={() => navigation.push("deputado", { id: item.id, name: item.nome })} /></View>}
        />
    }
    return (
        <View style={styles.Container}>
            <InputFilter setInputData={(value) => filter(value)} />
            <FlatList
                data={deputados}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                ListFooterComponent={<ActivityIndicator size={50} animating={true} color="#ecb334" style={{ marginTop: 30 }} />}
                decelerationRate={0.1}
                style={styles.Scroll}
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

export default CardDeputado