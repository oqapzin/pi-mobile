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
import { Image, StyleSheet, View } from 'react-native';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Inicio"
        screenOptions={{
          tabBarActiveTintColor: '#ecb334',
          headerStyle: { backgroundColor: "#ecb334", height: 173 },
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
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Fontisto name="persons" color={color} size={size} />
            ),
          }} />
        <Tab.Screen
          name="Partidos"
          component={Partidos}
          options={{
            headerShown: false,
            tabBarLabel: 'Partidos',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="flag" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Inicio"
          component={InitialPage}

          options={{
            tabBarStyle: { display: "none" },
            headerTitleAlign: "center",
            headerTitle: () => <Image style={styles.logoStyle} source={{uri:"https://cdn.discordapp.com/attachments/1118283305628995694/1174015599798652999/image.png?ex=65660e3b&is=6553993b&hm=91bf80d6bd8c709c67ada2c69be636c9b7e0214ef05bace05fd93ed0928c3ea8&"}}/>,
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
            headerShown: false,
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
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="event-note" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  logoStyle: {
      width: 240,
      height: 30,
  }
});