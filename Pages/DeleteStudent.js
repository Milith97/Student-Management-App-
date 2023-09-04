import { View, Text, FlatList, TouchableOpacity, StyleSheet, data } from 'react-native'
import React, { useState, useEffect } from 'react';
import { Swipeable } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import Icon2 from 'react-native-vector-icons/dist/MaterialCommunityIcons';

import { Card } from 'react-native-paper';

export default function DeleteStudent() {
    const [data, setData] = useState([])

    const GetData = () => {

        fetch('http://192.168.1.164:3000/api/v1/student')
            .then((response) => response.json())
            .then((json) => {
                setData(json)
            });
    }

    const DeleteData = (id) => {

        fetch('http://192.168.1.164:3000/api/v1/student/'+id, {
            method: 'DELETE',
        }).then((response) => response.json())
            .then((json) => {
                GetData()
            }).catch((err)=>console.log("=========",err))
    }

    useEffect(() => {
        GetData()
        // DeleteData()

    }, [])
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (

                    <Swipeable
                        renderRightActions={() => (
                            <TouchableOpacity
                                style={styles.deleteButton}
                                onPress={() => DeleteData(item.id)}
                            >
                                <Icon name="trash" size={25} color="white" />
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
                                <TouchableOpacity style={styles.btn}>
                                    <Text style={styles.btntext}>SWIP TO DELETE <Icon2 name="gesture-swipe-left" size={25} color="white" /></Text>
                                </TouchableOpacity>

                            </Card>
                        </View>
                    </Swipeable>
                )}
            />
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
    deleteButton: {
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
    }
});