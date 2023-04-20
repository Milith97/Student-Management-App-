import { View, Text, ImageBackground,Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function ({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <ImageBackground style={styles.backgroundImg} source={require('../assets/Addnewstu.png')}></ImageBackground>
            </View>
        </SafeAreaView>
    )
}

 const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: '#FFFFFF',
      },
      backgroundImg:{
        
      }

 })