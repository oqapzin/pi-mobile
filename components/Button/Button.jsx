import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';

const ButtonDeputado = ({ labelText = "", routeName = "", navigation }) => {
    return (
        <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.push(routeName)}>
            <View style={styles.buttonSpace}>
                <Text style={styles.buttonText}>{labelText}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ButtonDeputado

const styles = StyleSheet.create({
    buttonStyle: {
        width: 100,
        height: 87,
        margin: 8,
        backgroundColor: "#D9D9D9",
        borderRadius: 20
    },
    buttonSpace: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000'
    }
});