import React, { useEffect, useState } from "react"
import { StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";

const InputFilter = ({ setInputData, whitePlaceHolder = false }) => {
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        setInputData(searchQuery)
    }, [searchQuery])

    return (
        <Searchbar
            style={{ backgroundColor: whitePlaceHolder ? "#D9D9D994" : "#D9D9D9", margin: 12, borderRadius: 5 }}
            iconColor={whitePlaceHolder ? "#FFF" : "#000"}
            placeholderTextColor={whitePlaceHolder ? "#FFF" : "#000"}
            placeholder={"Buscar"}
            mode={"bar"}
            autoCapitalize={"none"}
            onChangeText={(s) => setSearchQuery(s)}
            value={searchQuery}
        />
    );
}

export default InputFilter