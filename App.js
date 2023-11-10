import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Deputados from "./screens/Deputados/Deputados"
import Partidos from "./screens/Partidos/Partidos"
import Proposicoes from "./screens/Proposicoes/Proposicoes"
import Eventos from "./screens/Eventos/Eventos"
import InitialPage from './screens/InitialPage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DeputadosStack from './screens/Deputados/DeputadosStack';
import { Text } from 'react-native-paper';
import { View } from 'react-native';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Inicio"
        screenOptions={{
          tabBarActiveTintColor: '#ecb334',
          headerStyle: {backgroundColor: "#ecb334"},
          headerTintColor: "#101F41",
          headerTitleStyle: {
            textTransform: "uppercase"
          },
        }}
      >
        <Tab.Screen
          name="Deputados"
          component={DeputadosStack}
          options={{
            headerTitle: "Listagem dos Deputados",
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
          name="Inicio"
          component={InitialPage}
          headerStyle={{outerHeight: "100%"}}
     
          options={{
            headerTitleAlign: "center",
            /*headerTitleStyle*/ 
            headerTitle: () => <View style={{flexDirection: "row"}}><MaterialCommunityIcons name="book-open-variant" color="" size={32} /><Text variant="titleLarge" style={{fontWeight: 600, marginTop: 3}}>DEPUTADOS</Text></View>,
         
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
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