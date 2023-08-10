import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import Loggin from './Pages/Loggin';
import Home from './Home';
import Registation from './Pages/Registation';
import StuMangement from './Pages/StuMangement';
import StudentDetail from './Pages/StudentDetail';
import AddNewStu from './Pages/AddNewStu';
import SuccFullyReg from './Pages/SuccFullyReg';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnBoardingScreen from './Pages/OnBoardingScreen';


const Stack = createStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName='OnBoarding'>
        <Stack.Screen name="OnBoarding" options={{headerShown: false}} component={OnBoardingScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Loggin" component={Loggin} />
        <Stack.Screen name="Registation" component={Registation} />
        <Stack.Screen name="StuMangement" component={StuMangement} />
        <Stack.Screen name="StudentDetail" component={StudentDetail} />
        <Stack.Screen name="AddNewStu" component={AddNewStu} />
        <Stack.Screen name="SuccFullyReg" component={SuccFullyReg} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}
