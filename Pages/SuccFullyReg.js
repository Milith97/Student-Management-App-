import { View, Image, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function SuccFullyReg() {
    return (
        <SafeAreaView style={styles.container}>
            <View  style={{ flex: 1, flexDirection: 'column' }}>
                <Image style={styles.Img} source={require('../assets/succfullyreg.png')} />
            </View>

            <View style={{ flex: 1, flexDirection: 'column',marginBottom:'5%' }}>
                <ImageBackground style={styles.backgroundImg} source={require('../assets/sccfullyregback1.png')}/> 
            </View>


        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffffff',
    },

    Img: {
        height: 250,
        width: 350,
    },
    backgroundImg: {
        height: 270,
        width: 340,
        marginLeft:'4%',
        
    }

})