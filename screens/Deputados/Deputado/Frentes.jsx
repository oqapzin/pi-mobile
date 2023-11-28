import React from 'react'
import { useEffect } from 'react'
import { ActivityIndicator, AnimatedFAB, Card, PaperProvider, Portal, Text } from 'react-native-paper'
import axiosConnect from "../../../services/api/ConsumeAPI"
import { useState } from 'react'
import { View } from 'react-native'
import { FlatList } from 'react-native'
import { StyleSheet } from 'react-native'

const Frentes = ({ route }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [queryFrentes, setQueryFrentes] = useState([])
    useEffect(() => {
        axiosConnect.get(`/deputados/${route.params.id}/frentes`).then(result => {
            setQueryFrentes(result.data.dados)
            setIsLoading(false)
            /*  setTimeout(() => {
                 setIsLoading(false)
             }, 1000) */
        })

    }, [])
    return (
        <PaperProvider>
           
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

export default Frentes