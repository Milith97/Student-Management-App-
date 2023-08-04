import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from "lottie-react-native";

/* const {width, height} = Dimensions.get('window'); */

function Animation(){

}
export default function OnBoardingScreen() {
  return (
    <View style={styles.container}>
      <Onboarding
        pages={[
          {
            backgroundColor: '#fff',
            image:(
              <View style={styles.lottie}>
                  <LottieView source={require("../animation/one.json")} autoPlay loop />
              </View>
          ),
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },

          {
            backgroundColor: '#a7f3d0',
            image: (
                <View style={styles.lottie}>
                    <LottieView source={require("../animation/two.json")} autoPlay loop />
                </View>
            ),
            title: 'Boost Productivity',
            subtitle: 'Subscribe this channel to boost your productivity level',
        },
  ]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  lottie: {
    width: 100,
    height: 100,
  },
})