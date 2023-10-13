import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Login } from './Screens/Login/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { EscogerCamion } from './Screens/Conductor/EscogerCamion';
import { NavigationContainer } from '@react-navigation/native';
import { DetalleBateria } from './Screens/Conductor/DetalleBateria';
import { SimpleBarChart } from './Screens/Conductor/Graficos';
import { CustomBottomTabBar } from './CustomBottomTabBar';
import { Redigirir } from './Screens/Login/Redirigir';
import { MenuCamiones } from './Screens/Common/MenuCamiones';



export default function App() {
  const Stack = createNativeStackNavigator();

  return (
 
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen
          name="Inicio"
          component={CustomBottomTabBar}
          options={{ headerShown: false }}
        />
        <Stack.Screen name='Muestra' component={SimpleBarChart} />
        <Stack.Screen name='Redirigir' component={Redigirir} />
        <Stack.Screen name='Detalle' component={DetalleBateria} />
        <Stack.Screen name='Escoger' component={EscogerCamion} />

        <Stack.Screen name='Listado' component={MenuCamiones}  options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
