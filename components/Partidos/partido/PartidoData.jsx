import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Avatar, Card, Text } from 'react-native-paper'
import ButtonPartido from '../../Button/Button'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const PartidoData = ({ name = "", sigla = "", numeroEleitoral = "", navigation }) => {

    function returnData() {
        return (
            <View style={styles.View}>
                <View style={styles.LeftData}>
                    <Text style={styles.LeftText}>Nome: <Text>{name}</Text></Text>
                    <Text style={styles.LeftText}>Sigla: <Text>{sigla}</Text></Text>
                    <Text style={styles.LeftText}>Numero Eleitoral: <Text>{numeroEleitoral}</Text></Text>
                </View>
            </View>
        )
    }


    return (
        <View>
            <Card.Title
                style={styles.cardStyle}
                left={() => returnData()}
            />
            <ButtonPartido labelText={situacaoText()} routeName={"situacao-partido"} navigation={navigation} />
        </View>
    )
}

export default PartidoData

const styles = StyleSheet.create({
    View: {
        flexDirection: "row",
    },

    LeftData: {
        marginHorizontal: -40,
        width: 200
    },

    LeftText: {
        color: "#E19500",
        margin: 1
    },

    cardStyle: {
        backgroundColor: "#D9D9D9",
        marginHorizontal: 27,
        marginTop: 28,
        borderRadius: 20,
        padding: 60,
    }
});