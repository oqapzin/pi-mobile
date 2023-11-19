import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Deputados from './Deputados';
import Deputado from './Deputado';
import GastosDeputado from './Deputado/Gastos';
import EventosDeputado from './Deputado/Eventos';
import FrentesDeputado from './Deputado/Frentes';
import DiscursosDeputado from './Deputado/Discursos';
import MandatosDeputado from './Deputado/Mandatos';
import OrgaosDeputado from './Deputado/Orgaos';

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
                <Stack.Screen name="discursos-deputado" component={DiscursosDeputado} options={{ title: 'Discursos' }} />
                <Stack.Screen name="eventos-deputado" component={EventosDeputado} options={{ title: 'Eventos' }} />
                <Stack.Screen name="frentes-deputado" component={FrentesDeputado} options={{ title: 'Frentes' }} />
                <Stack.Screen name="gastos-deputado" component={GastosDeputado} options={{ title: 'Gastos' }} />
                <Stack.Screen name="mandatos-deputado" component={MandatosDeputado} options={{ title: 'Mandatos' }} />
                <Stack.Screen name="orgaos-deputado" component={OrgaosDeputado} options={{ title: 'Orgãos' }} />
            </Stack.Navigator>
        </>
    )
}

export default DeputadosStack