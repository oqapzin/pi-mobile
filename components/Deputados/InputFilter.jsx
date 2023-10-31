import React, { useEffect, useState } from 'react'
import { Searchbar } from 'react-native-paper';

const InputFilter = ({setInputData}) => {
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(()=> {
        setInputData(searchQuery)
    },[searchQuery])

    return (
        <Searchbar
            placeholder="Buscar"
            onChangeText={(e) => setSearchQuery(e)}
            value={searchQuery}
        />
    );
}

export default InputFilter 