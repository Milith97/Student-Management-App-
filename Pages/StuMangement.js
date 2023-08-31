import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

export default function StuMangement({ navigation }) {
    return (

        <View style={styles.container}>

            <ImageBackground style={styles.backgroundImg} source={require('../assets/StuManag.jpg')}></ImageBackground>
            <View style={{marginTop:'40%'}}>
                <Text style={{ fontSize: 40, fontWeight: 'bold', marginLeft: '7%', color: '#000000', }}>Student</Text>
                <Text style={{ fontSize: 35, fontWeight: 'bold', marginLeft: '10%', color: '#000000', }}>Managment</Text>
            </View>
         {/*    <ImageBackground style={styles.backgroundImg2} source={require('../assets/StuMana2.png')}> */}

                <View style={{ flex: 1, flexDirection: 'row', }}>

                    <View style={{ marginLeft: '5%', }}>
                        <TouchableOpacity style={styles.btn1} onPress={() => { navigation.navigate('StudentDetail') }} >
                            <Text style={styles.btnText}>View</Text>
                            <Text style={styles.btnText}>  Profile </Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity style={styles.btn1}>
                            <Text style={styles.btnText}>Delete</Text>
                            <Text style={styles.btnText}>Student</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flex: 1, flexDirection: 'row', }}>

                    <View style={{ marginLeft: '5%' }}>
                        <TouchableOpacity style={styles.btn2} >
                            <Text style={styles.btnText}>Update</Text>
                            <Text style={styles.btnText}>  Details </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{}}>
                        <TouchableOpacity style={styles.btn2} onPress={() => { navigation.navigate('AddNewStu') }}  >
                            <Text style={styles.btnText}>Add New</Text>
                            <Text style={styles.btnText}>Student</Text>
                        </TouchableOpacity>
                    </View>

                </View>


          {/*   </ImageBackground> */}

        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },

    backgroundImg: {
        flex: 1,
        height: 305
    },
    backgroundImg2: {
        flex: 1,

    },

    btn1: {
        backgroundColor: '#007DFE',
        margin: '5%',
        borderRadius: 8,
        width: 160,
        height: 90,
        padding: 8
    },

    btn2: {
        backgroundColor: '#007DFE',
        margin: '5%',
        borderRadius: 8,
        width: 160,
        height: 90,
        padding: 8
    },

    btnText: {
        fontSize: 25,
        color: '#E3E4E4',
        textAlign: 'center',
        fontFamily: 'PTSerif_Bold',
    },




})