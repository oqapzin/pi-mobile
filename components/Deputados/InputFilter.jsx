import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';

const InputFilter = ({ setInputData }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const colors = "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;"
    useEffect(() => {
        setInputData(searchQuery)
    }, [searchQuery])

    return (
        <Searchbar
            style={{ backgroundColor: '#D9D9D994', margin: 12, borderRadius: 5 }}
            placeholder="Buscar"
            onChangeText={(e) => setSearchQuery(e)}
            value={searchQuery}
        />
    );
}

export default InputFilter

const styles = StyleSheet.create({
    color: {
        backgroundColor: "#D9D9D994",
        borderRadius: "5px"
    }
});