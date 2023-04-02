import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

export default function StuMangement(navigation) {
    return (
        <ScrollView style={styles.container}>
            <View>
                <ImageBackground style={styles.backgroundImg} source={require('../assets/StuManag.jpg')}></ImageBackground>
                {/* <ImageBackground style={styles.backgroundImg2} source={require('../assets/StuMana2.png')}></ImageBackground> */}
            </View>
            <View style={styles.Text}>
                <Text style={{fontSize: 50,fontWeight:'bold',marginLeft:'7%',color:'#000000',backgroundColor:'#007DFE'}}>Student</Text>
                <Text style={{fontSize: 40,fontWeight:'bold',marginLeft:'7%',color:'#000000',backgroundColor:'#007DFE'}}>Managment</Text>
            </View>

        </ScrollView>

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
        height: 200,
        width: 360,
        justifyContent: 'center'
    },
    Text:{
        flex:1,
        flexDirection:'col',

    }
    // backgroundImg2: {
    //     flex: 2,
    //     flexDirection: 'row',
    //     height: 400,
    //     width: 390,

    // }


})