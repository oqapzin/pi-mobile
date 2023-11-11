import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ButtonDeputado from '../components/Button/Button';

const InitialPage = () => {
    return (
        <View style={styles.container}>
            <ButtonDeputado />
            <ButtonDeputado />
            <ButtonDeputado />
            <ButtonDeputado />
            <ButtonDeputado />
            <ButtonDeputado />

            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start'
    },
});

export default InitialPage