import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper';

export default function Loggin({ navigation }) {
  return (

    <ImageBackground source={require('../assets/img33.png')} style={{ flex: 1, backgroundColor: '#ffffff', height: 250, width: 420 }}>

      <Text style={styles.baseText}>Log in</Text>

      <Text style={{ marginLeft: '10%', marginTop: '1%', color: '#D1D0D1', fontSize: 18, }}>Email</Text>

      <View style={styles.input1}>
        <TextInput
          style={{ borderColor: '#D1D0D1' }}
          placeholderTextColor={'#AAA7A9'}
          placeholder="acpt@milithdesilva.com"
          underlineColorAndroid="transparent"
          backgroundColor="#FFFFFF"
        />
      </View>
      <Text style={{ marginLeft: '10%', marginTop: '0.5%', color: '#D1D0D1', fontSize: 16, }}>Password</Text>

      <View style={styles.input2}>
        <TextInput
          style={{ borderColor: '#D1D0D1' }}
          placeholderTextColor={'#AAA7A9'}
          placeholder="******"
          underlineColorAndroid="transparent"
          backgroundColor="#FFFFFF"
        />
      </View>

      <TouchableOpacity onPress={() => { navigation.navigate('DrawerNav') }} style={styles.btn} >
        <Text style={{ fontSize: 20, color: '#E3E4E4', textAlign: 'center', fontWeight: 'bold', }}>Login Now</Text>
      </TouchableOpacity>

      <Text style={{ textAlign: 'center', marginTop: '2%' }}>Forget Password</Text>

      <View style={{ flex: 1, flexDirection: 'row', marginTop: '3%', justifyContent: 'center' }}>
        <Image style={{ width: 25, height: 25 }} source={require('../assets/facebook.png')} />
        <Image style={{ width: 25, height: 25 }} source={require('../assets/google.png')} />
        <Image style={{ width: 25, height: 25 }} source={require('../assets/linkedin.png')} />
      </View>
    </ImageBackground>

  )
}


const styles = StyleSheet.create({

  baseText: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: '58%',
    marginLeft: '8%',
    color: '#3F3E4C'
  },
  input1: {
    marginLeft: '10%',
    marginRight: '10%'
  },
  input2: {
    marginLeft: '10%',
    marginRight: '10%'
  },
  btn: {
    marginTop: '2%',
    alignItems: 'center',
    backgroundColor: '#007DFE',
    padding: 10,
    fontWeight: 'bold',
    borderRadius: 30,
    height: 50,
    width: 200,
    marginLeft: '25%',
  }
});



