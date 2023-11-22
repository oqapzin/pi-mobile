import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Modal, Text } from 'react-native-paper'

const ProposicaoModal = ({ title = "", subTitle = "", text = "", setModalVisible = false, returnModalVisibleStatus }) => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(setModalVisible)
    }, [setModalVisible])

    return (
        <Modal visible={isVisible} onDismiss={() => (setIsVisible(false), returnModalVisibleStatus(isVisible))} contentContainerStyle={styles.ModalStyle}>
            <Text variant="titleLarge" style={styles.Title}>{title}</Text>
            <Text variant="titleSmall" style={styles.SubTitle}>{subTitle}</Text>
            <Text style={styles.TextInver}>{text}</Text>
        </Modal>
    )
}


const styles = StyleSheet.create({
    ModalStyle: {
        backgroundColor: "white",
        padding: 20,
        alignSelf: "center",
        width: "90%",
        height: "80%",
    },

    Title: {
        marginBottom: 8,
        marginTop: -260,
        fontSize: 20
    },

    SubTitle: {
        marginBottom: 35,
    },

    TextInver: {
        fontSize: 16
    }
});

export default ProposicaoModal