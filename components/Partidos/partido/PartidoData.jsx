import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Avatar, Card, Text } from 'react-native-paper'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const PartidoData = ({ name = "", sigla = "", QntDeputados= "", photo= "", nameDep="", navigation }) => {

    function returnData() {
        return (
            <><View>
                <View style={styles.ViewData}>

                    <View style={styles.LeftData}>
                        <Text style={styles.LeftText}>Nome: <Text>{name}</Text></Text>
                        <Text style={styles.LeftText}>Sigla: <Text>{sigla}</Text></Text>
                        <Text style={styles.LeftText}>Quantidade de deputados: <Text>{QntDeputados}</Text></Text>
                    </View>
                    <Card.Title>
                        <Text></Text>
                    </Card.Title>
            <View>
                <Card>

                <Text>as</Text>
                </Card>
            </View>
                </View>
            </View>

            </>
        )

  
    }



    return (
        <View style={styles.Container}>
            <Card.Title
                style={styles.CardStyle}
                left={() => returnData()}
            />

        </View>
    )
}

export default PartidoData

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
        color: "#FFF",
        marginLeft: 50,
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
        backgroundColor: "#FFAD62",
        marginTop: 28,
        marginBottom: 48,
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