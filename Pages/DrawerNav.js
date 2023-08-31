import React from 'react'
import StuMangement from './StuMangement';
import StudentDetail from './StudentDetail';
import SuccFullyReg from './SuccFullyReg';
import ContactUs from './ContactUs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AddNewStu from './AddNewStu';

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
    return (

        <Drawer.Navigator>
            <Drawer.Screen name="StuMangement" component={StuMangement} />
            <Drawer.Screen name="StudentDetail" component={StudentDetail} />
            <Drawer.Screen name="SuccFullyReg" component={SuccFullyReg} />
            <Drawer.Screen name="AddNewStu" component={AddNewStu} />
            <Drawer.Screen name="ContactUs" component={ContactUs} />
        </Drawer.Navigator>

    )
} 