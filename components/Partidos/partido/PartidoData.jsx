import React from 'react'
import { StyleSheet, View } from 'react-native'
import {Avatar, Card, Text } from 'react-native-paper'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import axiosConnect from '../../../services/api/ConsumeAPI';

const PartidoData = ({ name = "", sigla = "", QntDeputados= "", photo= "", nameDep="", siglaDp="", depFem="",depMas="", navigation }) => {

    function returnData() {
        return (
            <><View>
                <View style={styles.ViewData}>

                    <View style={styles.LeftData}>
                        <Text style={styles.LeftText}>Nome: <Text>{name}</Text></Text>
                        <Text style={styles.LeftText}>Sigla: <Text>{sigla}</Text></Text>
                        <Text style={styles.LeftText}>Deputados em exercicio: <Text>{QntDeputados}</Text></Text>
                        <Text style={styles.LeftText}>Quantidade de deputadas: <Text>{depFem.length}</Text></Text>
                        <Text style={styles.LeftText}>Quantidade de deputados: <Text>{depMas.length}</Text></Text>
                    </View>
                    


                </View>
            </View>

            </>
        )

  
    }

    function returnlider(){

        return(

            <>
        
            <View style={styles.ViewData}>
                <View style={styles.AvatarView}>
                    <Avatar.Image style={{ marginRight: 10, backgroundColor: '#101F41' }} source={{ uri: photo }} />
                </View>
                <View style={styles.LeftData}>

                        <Text style={styles.LeftText}>Lider do partido</Text>
                            <Text></Text>
                        <Text style={styles.LeftText}>Nome:</Text>
                            <Text>{nameDep}</Text>
                        <Text style={styles.LeftText}>Estado:</Text>
                            <Text> {siglaDp}</Text>
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

            <Card.Title
                style={styles.CardStyle}
                left={() => returnlider()}
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
    ViewData1: {
        flexDirection: "column",
        textAlign: "center"
    },

    LeftData: {
        marginHorizontal: 10,
        width: 200
    },

    LeftText: {
        textTransform: "uppercase",
        fontWeight: "700",
        color: "#FFF",
        marginLeft: 5,
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
        marginRight: 5,
        textAlign:"center"
    }
});