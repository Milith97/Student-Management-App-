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

      <TextInput
        label="Email"
        value={text}
        
      />

    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
  },

  backgroundImg3: {
    flex: 1,
    height: 250,
    width: 355,
  },
  baseText: {
    fontSize: 50,
    marginTop: '120%',
    justifyContent: 'center',

  },


})