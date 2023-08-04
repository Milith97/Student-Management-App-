import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { createDrawerNavigator } from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();

export default function StuMangement({ navigation }) {
    return (
        <ScrollView style={styles.container}>

            <View>
                <ImageBackground style={styles.backgroundImg} source={require('../assets/StuManag.jpg')}></ImageBackground>
                <ImageBackground style={styles.backgroundImg2} source={require('../assets/StuMana2.png')}></ImageBackground>
            </View>

            <View style={{ flex: 1, flexDirection: 'column', marginTop: '-105%' }}>
                <View style={styles.Text}>
                    <Text style={{ fontSize: 40, fontWeight: 'bold', marginLeft: '7%', color: '#000000', }}>Student</Text>
                    <Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft: '7%', color: '#000000', }}>Managment</Text>
                </View>
            </View>



            <View style={{ flex: 3, flexDirection: 'column', }}>

                <View style={{ flex: 1, flexDirection: 'row', }}>

                    <View style={{ flex: 1, marginLeft: '5%' }}>
                        <TouchableOpacity style={styles.btn1} onPress={() => { navigation.navigate('StudentDetail') }} >
                            <Text style={styles.btnText}>View</Text>
                            <Text style={styles.btnText}>  Profile </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: 1, marginRight: '7%', marginBottom: '-150%' }}>
                        <TouchableOpacity style={styles.btn1}>
                            <Text style={styles.btnText}>Delete</Text>
                            <Text style={styles.btnText}>Student</Text>
                        </TouchableOpacity>
                    </View>


                </View>

                <View style={{ flex: 1, flexDirection: 'row' }}>

                    <View style={{ flex: 1, marginLeft: '5%' }}>
                        <TouchableOpacity style={styles.btn2} >
                            <Text style={styles.btnText}>Update</Text>
                            <Text style={styles.btnText}>  Details </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: 1, marginRight: '7%'  }}>
                        <TouchableOpacity style={styles.btn2} onPress={() => { navigation.navigate('AddNewStu') }}  >
                            <Text style={styles.btnText}>Add New</Text>
                            <Text style={styles.btnText}>Student</Text>
                        </TouchableOpacity>
                    </View>


                </View>


            </View>

        </ScrollView>

    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,


        backgroundColor: '#FFFFFF',

    },

    backgroundImg: {

        resizeMode: "cover",
        height: 200,
        width: 360,

    },
    backgroundImg2: {

        height: 380,
        width: 390,

    },

    Text: {


    },
    btn1: {
        padding: 20,
        backgroundColor: '#007DFE',
        margin: '5%',
        borderRadius: 8,
        width: 150,
        height: 100,

    },

    btn2: {
        padding: 20,
        backgroundColor: '#007DFE',
        margin: '5%',
        borderRadius: 8,
        width: 150,
        height: 100
    },

    btnText: {
        fontSize: 23,
        color: '#E3E4E4',
        textAlign: 'center',
        fontFamily: 'PTSerif_Bold',
    },




})