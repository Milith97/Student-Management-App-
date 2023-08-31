import React from 'react'
import Loggin from './Pages/Loggin';
import Home from './Home';
import Registation from './Pages/Registation';
import StuMangement from './Pages/StuMangement';
import StudentDetail from './Pages/StudentDetail';
import AddNewStu from './Pages/AddNewStu';
import SuccFullyReg from './Pages/SuccFullyReg';
import DrawerNav from './Pages/DrawerNav';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnBoardingScreen from './Pages/OnBoardingScreen';

const Stack = createStackNavigator();


export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Onbording'>
        <Stack.Screen name="Onboarding" options={{ headerShown: false }} component={OnBoardingScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Loggin" component={Loggin} />
        <Stack.Screen name="Registation" component={Registation} />
        <Stack.Screen name="DrawerNav" component={DrawerNav} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>

  )
}
