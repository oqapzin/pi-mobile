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
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen name="deputados" component={Deputados} />
                <Stack.Screen name="deputado" component={Deputado} />
                <Stack.Screen name="gastos-deputado" component={Gastos} />
            </Stack.Navigator>
        </>
    )
}

export default DeputadosStack