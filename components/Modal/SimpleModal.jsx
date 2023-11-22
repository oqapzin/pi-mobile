import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { Modal, Text } from "react-native-paper"

const SimpleModal = ({ textValue = "", setVisible = false, returnVisibleStatus }) => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(setVisible)
    }, [setVisible])


    const containerStyle = { backgroundColor: "white", padding: 20, alignSelf: "center", width: "80%"};
    return (
        <Modal visible={isVisible} onDismiss={() => (setIsVisible(false), returnVisibleStatus(isVisible))} contentContainerStyle={containerStyle}>
            <Text style={{fontSize: 20}}>{textValue}</Text>
        </Modal>
    )
}

export default SimpleModal