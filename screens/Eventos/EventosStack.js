import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Eventos from './Eventos';

const Stack = createNativeStackNavigator();

const EventosStack = () => {
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
                <Stack.Screen name="Eventos" component={Eventos} options={{ title: 'Eventos' }} />
            </Stack.Navigator>
        </>
    )
}

export default EventosStack