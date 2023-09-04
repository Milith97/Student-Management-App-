import { View, Text, ImageBackground, StyleSheet, } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function AddNewStu () {

    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [address, setaddress] = useState('')
    const [dob, setDob] = useState('')
    const [email, setEmail] = useState('')

    const AddStudent = () => {
        fetch('http://192.168.1.164:3000/api/v1/student', {
            method: 'POST',
            body: JSON.stringify({
                id: id,
                name: name,
                address:  address,
                dob: dob,
                email: email
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json))
            .catch((error)=> console.log(error));
    }

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
                    placeholder="Id"
                    backgroundColor='#D9D9D9'
                    value={id}
                    onChangeText={x => setId(x)}
                />
                <View style={{ marginLeft: '94%', }}>
                    <ImageBackground style={styles.Img3} source={require('../assets/addnewback3.png')}></ImageBackground>
                </View>

                <TextInput
                    style={{ height: 50, }}
                    placeholderTextColor={'#ffffff'}
                    placeholder="Name"
                    backgroundColor='#D9D9D9'
                    value={name}
                    onChangeText={x => setName(x)}
                />
                <TextInput
                    style={{ height: 50, }}
                    placeholderTextColor={'#ffffff'}
                    placeholder="Address"
                    backgroundColor='#D9D9D9'
                    value={address}
                    onChangeText={x => setaddress(x)}
                />
                <View style={{ marginLeft: '85%', }}>
                    <ImageBackground style={styles.Img2} source={require('../assets/addnewback2.png')}></ImageBackground>
                </View>

                <TextInput
                    style={{ height: 50, }}
                    placeholderTextColor={'#ffffff'}
                    placeholder="DOB"
                    backgroundColor='#D9D9D9'
                    value={dob}
                    onChangeText={x => setDob(x)}
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
                    value={email}
                    onChangeText={x => setEmail(x)}
                />

                <TouchableOpacity onPress={AddStudent} style={styles.btn}>
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