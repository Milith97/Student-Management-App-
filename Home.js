import { View, Text,StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from 'react-native-paper';



export default function Home({ navigation }) {
  return (

<SafeAreaView style={[styles.container, { flexDirection: 'column' }]}>

<Text style={styles.baseText}>Hello ! Welcome To</Text>
<Text style={styles.innerText}>ACPT</Text>

<View>
  <ImageBackground style={styles.backgroundImg} source={require('./assets/img.jpg')}>
  </ImageBackground>

  <ImageBackground style={styles.backgroundImg2} source={require('./assets/img2.jpg')}>
  </ImageBackground>
</View>

<Button  mode="contained" onPress={() => {navigation.navigate('Loggin')}} style={styles.btn}>
  Log In
</Button>

<Button mode="contained" onPress={() => {navigation.navigate('Registation')}} style={styles.btn2}>
  Register
</Button>




</SafeAreaView>


  )
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
  },
  baseText: {
    fontSize: 50
  },
  innerText: {
    marginTop: '0%',
    fontSize: 50,
    fontWeight: 'bold'
  },
  backgroundImg: {
    flex: 1,
    justifyContent: 'center',
    height: 250,

  },
  backgroundImg2: {
    flex: 1,
    justifyContent: 'center',
    height: 200,
    width: 200,
    marginTop: '80%',
  },

  btn: {
    height: 50,
    width: 150,
    marginTop: '5%',
    borderRadius: 4,

  },
  btn2: {
    marginLeft: '55%',
    height: 50,
    width: 150,
    borderRadius: 4,
    marginTop: '-16%',

  }
})
