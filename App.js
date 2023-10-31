import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Deputados from "./screens/Deputados/Deputados"
import Partidos from "./screens/Partidos/Partidos"
import Proposicoes from "./screens/Proposicoes/Proposicoes"
import Eventos from "./screens/Eventos/Eventos"
import InitialPage from './screens/InitialPage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DeputadosStack from './screens/Deputados/DeputadosStack';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="InitialPage"
        screenOptions={{
          tabBarActiveTintColor: '#ecb334',
        }}
      >
        <Tab.Screen
          name="Deputados"
          component={DeputadosStack}
          options={{
            tabBarLabel: 'Deputados',
            tabBarIcon: ({ color, size }) => (
              <Fontisto name="persons" color={color} size={size} />
            ),
          }} />
        <Tab.Screen
          name="Partidos"
          component={Partidos}
          options={{
            tabBarLabel: 'Partidos',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="flag" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="InitialPage"
          component={InitialPage}
          options={{
            tabBarLabel: 'InitialPage',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="book" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Proposicoes"
          component={Proposicoes}
          options={{
            tabBarLabel: 'Proposicoes',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="book" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Eventos"
          component={Eventos}
          options={{
            tabBarLabel: 'Eventos',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="event-note" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}