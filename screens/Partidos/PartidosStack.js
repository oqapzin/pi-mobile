import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Partidos from './Partidos';
import Partido from './Partido';


const Stack = createNativeStackNavigator();

const PartidosStack = () => {
    return (
        <>
            <Stack.Navigator
                initialRouteName="partidos"
                screenOptions={{
                    tabBarActiveTintColor: '#ecb334',
                    headerStyle: { backgroundColor: "#ecb334" },
                    headerTintColor: "#101F41",
                    headerTitleStyle: {
                        fontWeight: "bold",
                    },

                }}>
                <Stack.Screen name="partidos" component={Partidos} options={{ title: 'Lista de Partidos' }} />
                <Stack.Screen name="partido" component={Partido} options={{ title: 'Partido' }} />
                
            </Stack.Navigator>
        </>
    )
}

export default PartidosStack