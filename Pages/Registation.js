import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { TextInput, Button } from 'react-native-paper';

export default function Registation({ navigation }) {
  return (

    <View style={styles.container}>

      <Text style={{ fontSize: 35, fontWeight: 'bold', color: '#000000', marginLeft: '6%' }}>Sign Up</Text>

      <View>
        <ImageBackground style={styles.backgroundImg} source={require('../assets/register.png')}></ImageBackground>
      </View>

      <View style={{ flex: 1, marginTop: '40%' }}>
        <TextInput
          style={{ width: 300, marginLeft: '12%', }}
          placeholderTextColor={'#AAA7A9'}
          placeholder="Name"
          backgroundColor='#ffffff'
        />
        <TextInput
          style={{ width: 300, marginLeft: '12%', }}
          placeholderTextColor={'#AAA7A9'}
          placeholder="Location"
          backgroundColor='#ffffff'
        />
        <TextInput
          style={{ width: 300, marginLeft: '12%', }}
          placeholderTextColor={'#AAA7A9'}
          placeholder="Birth Of Day"
          backgroundColor='#ffffff'
        />
        <TextInput
          style={{ width: 300, marginLeft: '12%', }}
          placeholderTextColor={'#AAA7A9'}
          placeholder="Email"
          backgroundColor='#ffffff'
        />
        <TextInput
          style={{ width: 300, marginLeft: '12%', }}
          placeholderTextColor={'#AAA7A9'}
          placeholder="Password"
          backgroundColor='#ffffff'
        />

        <View style={{ marginTop: '2%' }}>

          <TouchableOpacity style={styles.btn} onPress={() => { navigation.navigate('DrawerNav') }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#E3E4E4', textAlign: 'center', marginTop: '4%' }}>Log In</Text>
          </TouchableOpacity>


          <Text style={{ textAlign: 'center', marginTop: '1%' }}>Already Have An Account ? Sign In</Text>
        </View>
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
    marginLeft: '8%',
    marginTop: '5%',
    height: 220,
    width: 340,
  },
  btn: {
    backgroundColor: '#007DFE',
    borderRadius: 30,
    width: 250,
    height: 50,
    marginTop: '1%',
    marginLeft: '20%'
  }
})