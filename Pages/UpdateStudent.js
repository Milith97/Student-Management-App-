import { View, Text, StyleSheet, FlatList, TouchableOpacity, Modal, Pressable, Alert } from 'react-native'
import React, { useState, useEffect } from 'react';
import { TextInput } from 'react-native-paper';
import { Swipeable } from 'react-native-gesture-handler';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';


import { Card } from 'react-native-paper';

export default function DeleteStudent() {
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);

    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [address, setaddress] = useState('')
    const [dob, setDob] = useState('')
    const [email, setEmail] = useState('')


    const GetData = () => {

        fetch('http://192.168.1.164:3000/api/v1/student')
            .then((response) => response.json())
            .then((json) => {
                setData(json)
            });
    }

    const viewModel = (val) => {
        console.log(val);
        setId(val.id.toString());
        setName(val.name);
        setaddress(val.address);
        setDob(val.dob);
        setEmail(val.email);
        setShow(true)
    }

    const UpdateData = () => {
        console.log('====================================');
        console.log("update");
        console.log('====================================');

        fetch('http://192.168.1.164:3000/api/v1/student', {
            method: 'PUT',
            body: JSON.stringify({
                id: parseInt(id),
                name: name,
                address: address,
                dob: dob,
                email: email,
            }), 
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                setShow(false);
                GetData()
            })
            .catch((err) => console.log("=========", err));
    }

    useEffect(() => {
        GetData()

    }, [])



    return (
        <View style={styles.container}>
            <View>
                <Text style={{ fontSize: 40, fontFamily: 'PTSerif_Bold', marginLeft: '12%', color: '#000000', }}>Update Student</Text>
            </View>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (

                    <Swipeable
                        renderLeftActions={() => (
                            <TouchableOpacity
                                style={styles.updateButton}
                                onPress={() => viewModel(item)}
                            >
                                <Icon2 name="update" size={25} color="white" />
                            </TouchableOpacity>
                        )}
                    >
                        <View >
                            <Card style={styles.card}>
                                <Card.Content>
                                    <Text style={{ color: '#000', fontSize: 15 }} variant="id">ID : {item.id}</Text>
                                    <Text style={{ color: '#000', fontSize: 15 }} variant="name">Name : {item.name}</Text>
                                    <Text style={{ color: '#000', fontSize: 15 }} variant="address">Address : {item.address}</Text>
                                    <Text style={{ color: '#000', fontSize: 15 }} variant="dob">dob : {item.dob}</Text>
                                    <Text style={{ color: '#000', fontSize: 15 }} variant="email">email : {item.email}</Text>
                                </Card.Content>
                                <TouchableOpacity style={styles.btn} onPress={() => { navigation.navigate('Updatedata') }}>
                                    <Text style={styles.btntext}>SWIP TO UPDATE <Icon2 name="gesture-swipe-right" size={25} color="white" /></Text>
                                </TouchableOpacity>

                            </Card>
                        </View>
                    </Swipeable>
                )}
            />
            <Modal
                animationType="slide"
                transparent={true}
                visible={show}
                onRequestClose={() => {
                    setShow(false)
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.TextInput}>
                            <TextInput
                                disabled={true}
                                style={{ height: 50, }}
                                placeholderTextColor={'#ffffff'}
                                placeholder="Id"
                                backgroundColor='#D9D9D9'
                                value={id}
                                onChangeText={x => setId(x)}
                            />
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
                                value={address}
                                backgroundColor='#D9D9D9'

                                onChangeText={x => setaddress(x)}
                            />
                            <TextInput
                                style={{ height: 50, }}
                                placeholderTextColor={'#ffffff'}
                                placeholder="DOB"
                                backgroundColor='#D9D9D9'
                                value={dob}
                                onChangeText={x => setDob(x)}
                            />
                            <TextInput
                                style={{ height: 50, }}
                                placeholderTextColor={'#ffffff'}
                                placeholder="Email"
                                backgroundColor='#D9D9D9'
                                value={email}
                                onChangeText={x => setEmail(x)}
                            />

                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => UpdateData()}>
                                <Text style={styles.textStyle}>UPDATE</Text>
                            </Pressable>

                            <Pressable
                                style={[styles.button, styles.buttonClose2]}
                                onPress={() => setShow(false)}>
                                <Text style={styles.textStyle}>CLOSE</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        backgroundColor: 'white',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    updateButton: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
    },
    card: {
        backgroundColor: '#a8a8a8',
        marginLeft: 15,
        marginRight: 15,
        margin: 2
    },
    btn: {
        backgroundColor: 'green',
        borderRadius: 5,
        width: 380,
        marginTop: '1%',
    },
    btntext: {
        fontSize: 17,
        color: '#ffffff',
        textAlign: 'center',
        fontWeight: 'bold',
        margin: '2%'

    }, centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 25,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        elevation: 5,
    },
    button: {
        marginTop: '5%',
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    buttonClose2: {
        backgroundColor: '#525252',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 30
    },
    TextInput: {
        flex: 1,
        width: 250,
        color: '#D9D9D9',
    }

});