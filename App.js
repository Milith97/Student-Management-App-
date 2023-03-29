import { View, Text } from 'react-native'
import React from 'react'
import Loggin from './Pages/Loggin';
import Home from './Home';
import Registation from './Pages/Registation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Loggin" component={Loggin} />
        <Stack.Screen name="Registation" component={Registation} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}