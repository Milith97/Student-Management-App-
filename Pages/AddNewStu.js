import { View, Text, ImageBackground, StyleSheet, } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function ({ navigation }) {

    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [address, setaddress] = useState('')
    const [birthofddate, setBirthOfDate] = useState('')
    const [email, setEmail] = useState('')
    

    return (
        <View style={styles.container}>

            <ImageBackground style={styles.backgroundImg} source={require('../assets/addnewstu1.png')}>
            </ImageBackground >

            <View style={styles.hedText}>
                <Text style={styles.baseText}>ADD</Text>
                <Text style={styles.baseText}>New</Text>
                <Text style={styles.baseText}>Student</Text>
            </View>

            <View style={{ flex: 1, flexDirection: 'column', width: 300, marginLeft: '13%', color: '#D9D9D9', marginBottom: '8%' }}>

                <View style={{}}>
                    <ImageBackground style={styles.Img4} source={require('../assets/addnewback4.png')}></ImageBackground>
                </View>

                <TextInput
                    style={{ height: 50, }}
                    placeholderTextColor={'#ffffff'}
                    placeholder="Name"
                    backgroundColor='#D9D9D9'
                    value='Id'
                    onChangeText={x => setId(x)}
                />
                <View style={{ marginLeft: '94%', }}>
                    <ImageBackground style={styles.Img3} source={require('../assets/addnewback3.png')}></ImageBackground>
                </View>
                <TextInput
                    style={{ height: 50, }}
                    placeholderTextColor={'#ffffff'}
                    placeholder="Address"
                    backgroundColor='#D9D9D9'
                    value='Name'
                    onChangeText={x =>setName(x)}
                />
                <TextInput
                    style={{ height: 50, }}
                    placeholderTextColor={'#ffffff'}
                    placeholder="Birth Of Day"
                    backgroundColor='#D9D9D9'
                    value='Address'
                    onChangeText={x =>setaddress(x)}
                />
                <View style={{ marginLeft: '85%', }}>
                    <ImageBackground style={styles.Img2} source={require('../assets/addnewback2.png')}></ImageBackground>
                </View>

                <TextInput
                    style={{ height: 50, }}
                    placeholderTextColor={'#ffffff'}
                    placeholder="Email"
                    backgroundColor='#D9D9D9'
                    value='DOB'
                    onChangeText={x =>setBirthOfDate(x)}
                />
                <View style={{}}>
                    <ImageBackground style={styles.Img} source={require('../assets/addnewback1.png')}></ImageBackground>
                </View>

                <TextInput
                    style={{ height: 50, }}
                    placeholderTextColor={'#ffffff'}
                    placeholder="Email"
                    backgroundColor='#D9D9D9'
                    right={<TextInput.Icon iconsss="eye" />}
                    value='email'
                    onChangeText={x =>setEmail(x)}
                />

                <TouchableOpacity onPress={() => { navigation.navigate('SuccFullyReg') }} style={styles.btn}>
                    <Text style={{ fontSize: 15, color: '#ffffff', textAlign: 'center', fontWeight: 'bold', margin: '4%' }}>ADD NEW STUDENT</Text>
                </TouchableOpacity>

            </View>

        </View>

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
        marginLeft: '20%'
    },
    hedText: {
        marginTop: '33%',
        position: 'absolute',
        marginLeft: '4%',

    },

    baseText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#292929',
        height: 44
    },
    btn: {

        backgroundColor: '#007DFE',
        padding: 5,
        borderRadius: 30,
        width: 225,
        marginLeft: '13%',
        marginTop: '4%'

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