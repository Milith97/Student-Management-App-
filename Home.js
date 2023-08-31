import React from 'react'
import { Button } from 'react-native-paper';
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Home({ navigation }) {
  return (

    <ImageBackground source={require('./assets/img.jpg')} style={{ flex: 1, backgroundColor: '#ffffff', }}>

      <Text style={styles.baseText}>Hello !</Text>
      <Text style={styles.baseText}>Welcome To</Text>
      <Text style={styles.innerText}>ACPT</Text>


      <View style={{ flex: 1, flexDirection: 'row', marginLeft: '10%', gap: 20, marginTop: '90%' }} >
        <TouchableOpacity onPress={() => { navigation.navigate('Loggin') }} style={styles.btn1}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#E3E4E4', textAlign: 'center', marginTop: '5%' }}>Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { navigation.navigate('Registation') }} style={styles.btn2}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#E3E4E4', textAlign: 'center', marginTop: '5%' }}>Register</Text>
        </TouchableOpacity>


      </View>



    </ImageBackground>

  )
}

const styles = StyleSheet.create({
  baseText: {
    fontSize: 30,
    marginLeft: '3%',
    color: '#000000'
  },
  innerText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000000',
    marginLeft: '3%'
  },
  btn1: {
    width: 150,
    height: 50,
    backgroundColor: '#007DFE',
    borderRadius: 10,
  },
  btn2: {
    width: 150,
    height: 50,
    backgroundColor: '#007DFE',
    borderRadius: 10,
  },


})
