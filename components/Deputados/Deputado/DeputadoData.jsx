import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Avatar, Card, Text } from 'react-native-paper'
import ButtonDeputado from '../../Button/Button'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const DeputadoData = ({ name = "", state = "", school = "", partido = "", photo = "", navigation }) => {

    function returnData() {
        return (
            <View style={styles.View}>
                <Avatar.Image style={{ marginRight: 50 }} source={{ uri: photo }} />
                <View style={styles.LeftData}>
                    <Text style={styles.LeftText}>Nome: <Text>{name}</Text></Text>
                    <Text style={styles.LeftText}>Idade: <Text>{state}</Text></Text>
                    <Text style={styles.LeftText}>Estado: <Text>{state}</Text></Text>
                    <Text style={styles.LeftText}>Escolaridade: <Text>{school}</Text></Text>
                </View>
            </View>
        )
    }

    function gastosText() {
        return (
            <View style={{ flex: 1, flexDirection: "column", justifyContent: "center", alignContent: 'center', alignItems: "center" }}>
                <FontAwesome name="dollar" color="" size={20} />
                <Text>Gastos</Text>
            </View>
        )
    }

    return (
        <View>
            <Card.Title
                style={styles.cardStyle}
                left={() => returnData()}
            />
            <ButtonDeputado labelText={gastosText()} routeName={"gastos-deputado"} navigation={navigation} />
        </View>
    )
}

export default DeputadoData

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