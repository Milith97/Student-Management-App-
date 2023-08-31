import { View, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'

export default function SuccFullyReg() {
    return (
        <View style={styles.container}>

            <ImageBackground style={styles.backgroundImg1} source={require('../assets/succfullyreg.png')}>
            </ImageBackground >

            <ImageBackground style={styles.backgroundImg1} source={require('../assets/sccfullyregback1.png')}>
            </ImageBackground >
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
     
    },

    backgroundImg1: {
        flex: 1,
       
    },

    backgroundImg2: {
        flex: 1,

    },


})