import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View, ListRenderItemInfo } from 'react-native'
import { ActivityIndicator, Avatar, Card, IconButton } from 'react-native-paper'
import AsyncStorage from "@react-native-async-storage/async-storage"
import InputFilter from '../Deputados/InputFilter'


const CardPartido = ({ navigation, arrayData = [] }) => {
    const [partidos, setPartidos] = useState([])
    const [oldDataPartidos, setOldDataPartidos] = useState([])
    const [favPartidos, setFavPartidos] = useState([])

    useEffect(() => {
        setPartidos(arrayData)
        setOldDataPartidos(arrayData)

    }, [arrayData])






    function renderItem({ item }) {
        return <Card.Title
            key={item.id}
            style={styles.Card}
            title={`${item.nome}`}
            subtitle={`${item.sigla}`}
            titleStyle={{ color: "#101F41", marginLeft: 5, fontWeight: "bold" }}
            subtitleStyle={{ color: "#101F41", marginLeft: 5, fontWeight: "600" }}
            right={() => <View style={{ flexDirection: "row" }}>
            <IconButton icon="arrow-right" onPress={() => navigation.push("partido", { id: item.id, name: item.nome, sigla:item.sigla })} /></View>}
        />
    }
    console.log(IconButton)
    return (
        <View style={styles.Container}>
            <FlatList
                data={partidos}
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

export default CardPartido