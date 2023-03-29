import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput } from 'react-native-paper';


export default function Loggin(navigation) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <ImageBackground style={styles.backgroundImg3} source={require('../assets/img3.png')}></ImageBackground>
      </View>

      <Text style={styles.baseText}>Log in</Text>

      <View>
        <Text style={styles.mail}>Email</Text>
      </View>

      <View style={styles.input1}>
        <TextInput
          label="Enter Your Email"
          onChangeText={text => setText(text)}
          mode="Flat"
          backgroundColor="#FFFFFF"

        />
      </View>

      <View>
        <Text style={styles.psw}>Password</Text>
      </View>

      <View style={styles.input2}>
        <TextInput
          label="Enter Your Password"
          onChangeText={text => setText(text)}
          mode="Outlined(disabled)"
          backgroundColor="#FFFFFF"
        />
      </View>


    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
  },

  backgroundImg3: {
    flex: 4,
    height: 250,
    width: 355,
  },
  baseText: {
    fontSize: 50,
    marginTop: '60%',
    justifyContent: 'center',
    fontWeight: 'bold',
    marginLeft: '5%',
    color: '#3F3E4C'
  },
  input1: {
    marginLeft: '5%',
    width: 300,
    marginTop: '5%',


  },
  input2: {

    marginTop: '10%'
  },
  mail: {

    marginLeft: '5%',
    marginTop: '1%',
    marginBottom: '1%',
    color: '#D1D0D1'
  },
  psw: {
    marginLeft: '5%',
    marginTop: '2%',
    marginBottom: '0sss%',
    color: '#D1D0D1'
  }


});



