import { View, Text, ImageBackground, StyleSheet, TouchableOpacity,Image } from 'react-native'
import { TextInput, Button } from 'react-native-paper';
import React from 'react'
import * as Animatable from 'react-native-animatable';

export default function ContactUs() {
  return (

    <View style={styles.container}>

      <ImageBackground style={styles.backgroundImg} source={require('../assets/ContactUS.png')}>

        <Text style={{ fontWeight: 'bold', color: '#000000', fontSize: 40, marginLeft: '10%', }}>Contact US</Text>

        <Animatable.View style={[styles.Popup]} animation="zoomIn">
          <View style={{ alignItems: 'center' }}  >

            <Image style={styles.Img} source={require('../assets/mapview.png')}></Image>

            <TextInput
              style={{ width: 280, }}
              placeholder="Name"
              backgroundColor='#e9e1e1'
            />
            <TextInput
              style={{ width: 280, }}
              placeholder="Email"
              backgroundColor='#e9e1e1'
            />
            <TextInput
              style={{ width: 280, }}
              placeholder="Contact Number"
              backgroundColor='#e9e1e1'
            />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignInScreen')}>
              <Text style={styles.textSign}>Submit</Text>
            </TouchableOpacity>

            <View style={{ flex: 1, flexDirection: 'row', marginTop: '3%', justifyContent: 'center' }}>
              <Image style={{ width: 25, height: 25 }} source={require('../assets/facebook.png')} />
              <Image style={{ width: 25, height: 25 }} source={require('../assets/google.png')} />
              <Image style={{ width: 25, height: 25 }} source={require('../assets/linkedin.png')} />
            </View>

          </View>
        </Animatable.View>

      </ImageBackground>

    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  backgroundImg: {
    flex: 1,
  },
  Img: {
    marginTop: '3%'
  },
  Popup: {
    flex: 1,
    backgroundColor: '#e9e1e1',
    borderRadius: 5,
   margin:50
  },
  button: {
    backgroundColor: '#007DFE',
    borderRadius: 8,
    width: 110,
    height: 35,
    marginTop: '3%'
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold',
    padding: 7,
    textAlign: 'center'
  }
});

