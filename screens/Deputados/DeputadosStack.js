import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Deputados from './Deputados';
import Deputado from './Deputado';
import Gastos from './Deputado/Gastos';

const Stack = createNativeStackNavigator();

const DeputadosStack = () => {
    return (
        <>
            <Stack.Navigator
                initialRouteName="deputados"
                screenOptions={{
                    tabBarActiveTintColor: '#ecb334',
                    headerStyle: { backgroundColor: "#ecb334" },
                    headerTintColor: "#101F41",
                    headerTitleStyle: {
                        fontWeight: "bold",
                    },

                }}>
                <Stack.Screen name="deputados" component={Deputados} options={{ title: 'Lista de Deputados' }} />
                <Stack.Screen name="deputado" component={Deputado} options={{ title: 'Deputado' }} />
                <Stack.Screen name="gastos-deputado" component={Gastos} options={{ title: 'Gastos' }} />
            </Stack.Navigator>
        </>
    )
}

export default DeputadosStack