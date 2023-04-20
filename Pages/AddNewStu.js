import { View, Text, ImageBackground, StyleSheet, } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function ({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>

            <View>
                <ImageBackground style={styles.backgroundImg} source={require('../assets/Addnewstu.png')}></ImageBackground>
            </View>

            <View style={styles.hedText}>
                <Text style={styles.baseText}>ADD</Text>
                <Text style={styles.baseText}>New</Text>
                <Text style={styles.baseText}>Student</Text>
            </View>



            <View style={{ flex: 3, flexDirection: 'column', width: 300, marginLeft: '8%', marginTop: '10%', color: '#D9D9D9', }}>

                <View style={{ marginLeft:'-8%' }}>
                    <ImageBackground style={styles.Img4} source={require('../assets/addnewback4.png')}></ImageBackground>
                </View>

                <TextInput
                    style={{ height: 45, }}
                    placeholderTextColor={'#ffffff'}
                    placeholder="Name"
                    backgroundColor='#D9D9D9'
                />
                <View style={{ marginLeft: '94%', }}>
                    <ImageBackground style={styles.Img3} source={require('../assets/addnewback3.png')}></ImageBackground>
                </View>
                <TextInput
                    style={{ height: 50, }}
                    placeholderTextColor={'#ffffff'}
                    placeholder="Location"
                    backgroundColor='#D9D9D9'
                />
                <TextInput
                    style={{ height: 50, }}
                    placeholderTextColor={'#ffffff'}
                    placeholder="Birth Of Day"
                    backgroundColor='#D9D9D9'
                />
                <View style={{ marginLeft: '85%', }}>
                    <ImageBackground style={styles.Img2} source={require('../assets/addnewback2.png')}></ImageBackground>
                </View>

                <TextInput
                    style={{ height: 50, }}
                    placeholderTextColor={'#ffffff'}
                    placeholder="Email"
                    backgroundColor='#D9D9D9'
                />
                <View style={{ marginLeft: '-12%' }}>
                    <ImageBackground style={styles.Img} source={require('../assets/addnewback1.png')}></ImageBackground>
                </View>

                <TextInput
                    style={{ height: 50, }}
                    placeholderTextColor={'#ffffff'}
                    placeholder="Password"
                    backgroundColor='#D9D9D9'
                    right={<TextInput.Icon iconsss="eye" />}
                />


                <TouchableOpacity style={styles.btn}>
                    <Text style={{ fontSize: 17, color: '#ffffff', textAlign: 'center', fontWeight: 'bold', margin: '4%' }}>ADD NEW STUDENT</Text>
                </TouchableOpacity>

            </View>



        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
    },

    backgroundImg: {
        flex: 1,
        flexDirection: 'column',
        width: 280,
        height: 200,
        marginLeft: '25%',

    },
    hedText: {
        flex: 1,
        flexDirection: 'column',
        marginTop: '15%',
        marginLeft: '10%',
    },

    baseText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#292929',
        height: 44
    },
    btn: {

        backgroundColor: '#007DFE',
        padding: 6,
        borderRadius: 30,
        width: 225,
        marginLeft: '13%',
        marginTop: '8%'

    },
    Img: {
        flex: 1,
        flexDirection: 'column',
        height: 120,
        width: 100,

    },
    Img2: {
        flex: 1,
        flexDirection: 'column',
        height: 90,
        width: 80,

    },
    Img3: {
        flex: 1,
        flexDirection: 'column',
        height: 55,
        width: 38,

    },
    Img4: {
        flex: 1,
        flexDirection: 'column',
        height: 42,
        width: 32,

    },



})