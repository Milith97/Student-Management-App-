import { View, Text, StyleSheet, FlatList, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Card } from 'react-native-paper';


export default function StudentDetail() {
  const [data, setData] = useState([])

  const ViewStudentDetails = () => {

    fetch('http://192.168.1.164:3000/api/v1/student')
      .then((response) => response.json())
      .then((json) => {
        setData(json)
      });
  }
  useEffect(() => {
    ViewStudentDetails()
  }, [])

  return (
    <View style={styles.container}>
      <View style={{}}>
        <Text style={styles.topic1}>Student Details</Text>
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (

            <View >
              <Card style={styles.card}>
                <Card.Content>
                  <Text style={{ color: '#000', fontSize: 15 }} variant="id">ID : {item.id}</Text>
                  <Text style={{ color: '#000', fontSize: 15 }} variant="name">Name : {item.name}</Text>
                  <Text style={{ color: '#000', fontSize: 15 }} variant="address">Address : {item.address}</Text>
                  <Text style={{ color: '#000', fontSize: 15 }} variant="dob">dob : {item.dob}</Text>
                  <Text style={{ color: '#000', fontSize: 15 }} variant="email">email : {item.email}</Text>
                </Card.Content>
              </Card>
            </View>
          )
        }}
        keyExtractor={item => item.id}
      />

    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: "#ffffff"
  },
  topic1: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000000',
    marginLeft: '6%'
  },
  topic2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginLeft: '6%'
  },
  card: {
    backgroundColor: '#a8a8a8',
    marginLeft: 15,
    marginRight: 15,
    margin: 2
  }

})

