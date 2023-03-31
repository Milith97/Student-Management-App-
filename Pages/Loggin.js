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

      <View style={styles.container2}>

      <Text style={{marginLeft:'5%', marginBottom:'-0%',marginTop:'-4%', color:'#D1D0D1',fontSize:18,}}>Email</Text>

        <View style={styles.input1}>
          <TextInput
          style={{marginBottom:'4%',borderRadius:'20%'}}
            placeholder="acpt@milithdesilva.com"
            underlineColorAndroid="transparent"
            backgroundColor="#000000"  
          />
        </View>

       <Text style={{marginLeft:'5%', marginBottom:'0%',marginTop:'5%', color:'#D1D0D1',fontSize:16,}}>Password</Text> 

        <View style={styles.input2}>
          <TextInput
             label=""
            onChangeText={text => setText(text)}
            underlineColorAndroid="transparent"
            backgroundColor="#FFFFFF"
          />
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

  backgroundImg3: {
    flex: 2,
    flexDirection: 'row',
    height: 250,
    width: 355,
  },
  baseText: {
    flex: 1,
    flexDirection: 'row',
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: '65%',
    marginBottom: '-15%',
    marginLeft: '8%',
    color: '#3F3E4C'
  },

  container2: {
    flex: 2,
    flexDirection: 'column',
    width: 300,
    marginLeft: '5%',
    
  
  },

  input1: {
    // flex: 1,
    // flexDirection: 'column',
    // marginLeft: '5%',
    // width: 300,
    // marginTop: '5%',

  },
  input2: {
    // marginLeft: '5%',
    // width: 300,
    // marginTop: '10%'
  },


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



