import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput } from 'react-native-paper';

export default function Registation(navigation) {
  return (
    <SafeAreaView style={styles.container}>

      <Text style={{ fontSize: 35, fontWeight: 'bold', color: '#000000', marginLeft: '6%' }}>Sign Up</Text>

      <View>
        <ImageBackground style={styles.backgroundImg} source={require('../assets/register.png')}></ImageBackground>
      </View>

      <View style={{ flex: 1, flexDirection: 'column', width: 300, marginLeft: '6%', marginTop: '43%', }}>
        <TextInput
          style={{ borderColor: '#D1D0D1', height: 45, }}
          placeholderTextColor={'#AAA7A9'}
          placeholder="Name"
          backgroundColor='#ffffff'
        />
        <TextInput
          style={{ borderColor: '#D1D0D1', height: 50, }}
          placeholderTextColor={'#AAA7A9'}
          placeholder="Location"

          backgroundColor='#ffffff'
        />
        <TextInput
          style={{ borderColor: '#D1D0D1', height: 50, }}
          placeholderTextColor={'#AAA7A9'}
          placeholder="Birth Of Day"
          backgroundColor='#ffffff'
        />
        <TextInput
          style={{ borderColor: '#D1D0D1', height: 50, }}
          placeholderTextColor={'#AAA7A9'}
          placeholder="Email"
          backgroundColor='#ffffff'
        />
        <TextInput
          style={{ borderColor: '#D1D0D1', height: 50, }}
          placeholderTextColor={'#AAA7A9'}
          placeholder="Password"
          backgroundColor='#ffffff'
        />

        <TouchableOpacity style={styles.btn} >
          <Text style={{ fontSize: 22, color: '#E3E4E4', textAlign: 'center', fontWeight: 'bold' }}>Register Now</Text>
        </TouchableOpacity>

        <Text style={{ textAlign: 'center', marginTop: '2%' }}>Already Have An Account ? Sign In</Text>

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
    flex: 2,
    flexDirection: "row",
    marginLeft: '0%',
    marginTop: '2%',
    height: 220,
    width: 340,
    justifyContent: 'center'
  },
  btn: {
    alignItems: 'center',
    backgroundColor: '#007DFE',
    padding: 10,
    fontWeight: 'bold',
    borderRadius: 30,
    width: 250,
    marginLeft: '10%',
    marginTop: '5%'


  }

})