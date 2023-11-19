import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Proposicoes from './Proposicoes';

const Stack = createNativeStackNavigator();

const ProposicoesStack = () => {
    return (
        <>
            <Stack.Navigator
                initialRouteName="eventos"
                screenOptions={{
                    tabBarActiveTintColor: '#ecb334',
                    headerStyle: { backgroundColor: "#ecb334" },
                    headerTintColor: "#101F41",
                    headerTitleStyle: {
                        fontWeight: "bold",
                    },

                }}>
                <Stack.Screen name="proposicoes" component={Proposicoes} options={{ title: 'Proposições' }} />
            </Stack.Navigator>
        </>
    )
}

export default ProposicoesStack