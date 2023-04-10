import { View, Text } from 'react-native'
import React from 'react'
import Loggin from './Pages/Loggin';
import Home from './Home';
import Registation from './Pages/Registation';
import StuMangement from './Pages/StuMangement';
import StudentDetail from './Pages/StudentDetail';
import DrawerNav from './Pages/DrawerNav';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Loggin" component={Loggin} />
        <Stack.Screen name="DrawerNav" component={DrawerNav} />
        <Stack.Screen name="Registation" component={Registation} />
        <Stack.Screen name="StuMangement" component={StuMangement} />
        <Stack.Screen name="StudentDetail" component={StudentDetail} />
      </Stack.Navigator>
    
    </NavigationContainer>
  )
}
