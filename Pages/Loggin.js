import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput } from 'react-native-paper';



export default function Loggin({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <ImageBackground style={styles.backgroundImg} source={require('../assets/img3.png')}></ImageBackground>
      </View>

      <Text style={styles.baseText}>Log in</Text>

      <View style={styles.container2}>

        <Text style={{ marginLeft: '5%', marginBottom: '0%', marginTop: '1%', color: '#D1D0D1', fontSize: 18, }}>Email</Text>

        <View style={styles.input1}>
          <TextInput
            style={{ borderColor: '#D1D0D1' }}
            placeholderTextColor={'#AAA7A9'}
            placeholder="acpt@milithdesilva.com"
            underlineColorAndroid="transparent"
            backgroundColor="#FFFFFF"


          />
        </View>

        <Text style={{ marginLeft: '5%', marginBottom: '0%', marginTop: '5%', color: '#D1D0D1', fontSize: 16, }}>Password</Text>

        <View style={styles.input2}>
          <TextInput
            style={{ borderColor: '#D1D0D1' }}
            onChangeText={text => setText(text)}
            underlineColorAndroid="transparent"
            backgroundColor="#FFFFFF"

          />
        </View>

        <View style={{ flex: 1, justifyContent: 'center', marginTop:'20%' }}>
          <TouchableOpacity  onPress={() => {navigation.navigate('StuMangement')}} style={styles.btn} >
            <Text style={{ fontSize: 20, color: '#E3E4E4', textAlign: 'center', fontWeight: 'bold' }}>Login Now</Text>
          </TouchableOpacity>

          <Text style={{ textAlign: 'center', marginTop: '3%' }}>Forget Password</Text>
        </View>

        <View style={{ flex: 1, flexDirection: 'row',marginTop:'10%', marginLeft:'39%' }}>
          <Image style={{ width: 25, height: 25 }} source={require('../assets/facebook.png')} />
          <Image style={{ width: 25, height: 25 }} source={require('../assets/google.png')} />
          <Image style={{ width: 25, height: 25 }} source={require('../assets/linkedin.png')} />
        </View>



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
    flexDirection: 'row',
    height: 190,
    width: 320,
    justifyContent: 'center'
  },
  baseText: {
    flex: 1,
    flexDirection: 'row',
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: '50%',
    marginBottom: '-15%',
    marginLeft: '8%',
    color: '#3F3E4C'
  },

  container2: {
    flex: 3,
    flexDirection: 'column',
    width: 300,
    marginLeft: '5%',


  },

  input1: {

    // marginLeft: '5%',
    // width: 300,
    // marginTop: '5%',

  },
  input2: {
    // marginLeft: '5%',
    // width: 300,
    marginTop: '-1%',
    marginBottom: '-10%',

  },
  btn: {
    alignItems: 'center',
    backgroundColor: '#007DFE',
    padding: 10,
    fontWeight: 'bold',
    borderRadius: 30,
    width: 200,
    marginLeft: '18%',


  }


  //  mail: {

  //    marginLeft: '5%',
  //    marginTop: '1%',
  //    marginBottom: '1%',
  //    color: '#D1D0D1'
  //  },
  //  psw: {
  //    marginLeft: '5%',
  //    marginTop: '2%',
  //    marginBottom: '0sss%',
  //    color: '#D1D0D1'
  //  }

  // 

  // <Text style={styles.psw}>Password</Text>
});



