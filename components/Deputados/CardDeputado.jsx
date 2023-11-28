import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View, ListRenderItemInfo } from 'react-native'
import { ActivityIndicator, Avatar, Card, IconButton } from 'react-native-paper'
import AsyncStorage from "@react-native-async-storage/async-storage"
import InputFilter from './InputFilter'
import { useCallback } from 'react'

const CardDeputado = ({ navigation, arrayData = [] }) => {
    const [deputados, setDeputados] = useState([])
    const [oldDataDeputados, setOldDataDeputados] = useState([])
    const [favDeputados, setFavDeputados] = useState([])

    useEffect(() => {
        setDeputados(arrayData)
        setOldDataDeputados(arrayData)
        getFavDeputados()

    }, [arrayData])


    const updateFav = () => {
        const deputadosFav = JSON.parse(JSON.stringify(favDeputados))
        deputadosFav.map(item => {
            const newDeputados = JSON.parse(JSON.stringify(deputados))
            if (newDeputados.length > 0) {
                let indexList = newDeputados.filter(item2 => item2.id == item)
                newDeputados.splice(0, 0, newDeputados.splice(newDeputados.indexOf(indexList[0]), 1)[0])
                setDeputados(newDeputados)
                setOldDataDeputados(newDeputados)
            }
        })
    }

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

   /*  const isFavorite = useCallback((deputadoId, deputadoName) => {
        const updatedFavDeputados = favDeputados.filter((id) => id == deputadoId);

        if (!updatedFavDeputados) {
            return <View style={{ flexDirection: "row" }}>
                <IconButton icon="star" iconColor="#825600" onPress={() => remFavoriteButton(deputadoId)} />
                <IconButton icon="arrow-right" onPress={() => navigation.push("deputado", { id: deputadoId, name: deputadoName })} /></View>
        } else {
            return <View style={{ flexDirection: "row" }}>
                <IconButton icon="star-outline" iconColor="#825600" onPress={() => addFavoriteButton(deputadoId)} />
                <IconButton icon="arrow-right" onPress={() => navigation.push("deputado", { id: deputadoId, name: deputadoName })} />
            </View>
        }
    }, [favDeputados]); */


    const getFavDeputados = async () => {
        const response = await AsyncStorage.getItem("DeputadosFav")
        const deputados = response ? JSON.parse(response) : []
        setFavDeputados(deputados)
        updateFav()
    }

    const addFavoriteButton = useCallback(async (deputadoId) => {
        const updatedFavDeputados = [...favDeputados, deputadoId];
        setFavDeputados(updatedFavDeputados);
        await AsyncStorage.setItem("DeputadosFav", JSON.stringify(updatedFavDeputados));
    }, [favDeputados, setFavDeputados]);

    const remFavoriteButton = useCallback(async (deputadoId) => {
        const updatedFavDeputados = favDeputados.filter((id) => id !== deputadoId);
        setFavDeputados(updatedFavDeputados);
        await AsyncStorage.setItem("DeputadosFav", JSON.stringify(updatedFavDeputados));
    }, [favDeputados, setFavDeputados]);


    const RenderItem = React.memo(({ item }) => {
        return (
            <Card.Title
                key={item.id}
                style={styles.Card}
                title={`${item.nome}`}
                subtitle={`${item.siglaPartido ? item.siglaPartido + " -" : ""} ${item.siglaUf}`}
                titleStyle={{ color: "#101F41", marginLeft: 5, fontWeight: "bold" }}
                subtitleStyle={{ color: "#101F41", marginLeft: 5, fontWeight: "600" }}
                left={() => AvatarImage(item.urlFoto)}
                right={() => <IconButton icon="arrow-right" onPress={() => navigation.push("deputado", { id: item.id, name: item.nome })} />}
            />
        );
    });

    return (
        <View style={styles.Container}>
            <InputFilter setInputData={(value) => filter(value)} />
            <FlatList
                data={deputados}
                renderItem={({ item }) => <RenderItem item={item} />}
                keyExtractor={(item) => item.id.toString()}
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