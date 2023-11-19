import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Avatar, Card, Text } from 'react-native-paper'
import ButtonDeputado from '../../Button/Button'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import states from '../../../complements/stateNames';
import calculateAge from '../../../complements/ageCalc';

const DeputadoData = ({ name = "", state = "", school = "", partido = "", date = "", photo = "", navigation }) => {

    function returnData() {
        return (
            <View>
                <View style={styles.ViewData}>
                    <View style={styles.AvatarView}>
                        <Avatar.Image style={{ marginRight: 50, backgroundColor: '#101F41' }} source={{ uri: photo }} />
                    </View>
                    <View style={styles.LeftData}>
                        <Text style={styles.LeftText}>Nome: <Text>{name}</Text></Text>
                        <Text style={styles.LeftText}>Idade: <Text>{calculateAge(date)}</Text></Text>
                        <Text style={styles.LeftText}>Estado: <Text>{states[state.toUpperCase() || "DF"]}</Text></Text>
                        <Text style={styles.LeftText}>Escolaridade: <Text>{school}</Text></Text>
                        <Text style={styles.TextPartido}>Partido {partido}</Text>
                    </View>
                </View>
            </View>
        )
    }

    function gastosText() {
        return (
            <View style={{ flex: 1, flexDirection: "column", justifyContent: "center", alignContent: 'center', alignItems: "center" }}>
                <FontAwesome name="dollar" size={20} />
                <Text>Gastos</Text>
            </View>
        )
    }

    return (
        <View style={styles.Container}>
            <Card.Title
                style={styles.CardStyle}
                left={() => returnData()}
            />
            <ButtonDeputado labelText={gastosText()} routeName={"gastos-deputado"} navigation={navigation} />
        </View>
    )
}

export default DeputadoData

const styles = StyleSheet.create({
    Container: {
        marginHorizontal: 27,
    },

    ViewData: {
        flexDirection: "row",
    },

    LeftData: {
        marginHorizontal: -40,
        width: 200
    },

    LeftText: {
        textTransform: "uppercase",
        fontWeight: "700",
        color: "#E19500",
        margin: 1
    },

    TextPartido: {
        textAlign: "center",
        color: "#D06605",
        fontWeight: "700",
        fontSize: 20,
        textTransform: "uppercase",
        marginTop: 15,
        marginLeft: -40
    },

    CardStyle: {
        backgroundColor: "#D9D9D9",
        marginTop: 28,
        borderRadius: 20,
        padding: 60,
    },

    AvatarView: {
        backgroundColor: "#D58C00",
        width: 70,
        height: 70,
        borderRadius: 58,
        paddingTop: 3.1,
        paddingLeft: 3.1,
        marginRight: 50
    }
});