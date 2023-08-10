import { View, Text, StyleSheet, Dimensions, StatusBar,TouchableOpacity } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from "lottie-react-native";
import { useNavigation } from '@react-navigation/native'

function Animation() {

}
export default function OnBoardingScreen() {
    const navigation = useNavigation();

    const handleDone = ()=>{
        navigation.navigate('Home');
        
    }
    const doneButton = ({...props})=>{
      return (
          <TouchableOpacity style={styles.doneButton} {...props}>
              <Text>Done</Text>
          </TouchableOpacity>
      )
      
  }
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#fff' />
      <Onboarding
       onDone={handleDone}
       onSkip={handleDone}
       DoneButtonComponent={doneButton}

        containerStyles={{ paddingHorizontal: 15 }}
        pages={[
          {
            backgroundColor: '#fbfbfc',
            image: (

              <LottieView autoPlay style={{ width: 350, height: 350, }}
                source={{ uri: "https://lottie.host/fe85f3b5-23ef-440d-af02-ac2502dd9cfb/MQrLZUkwzg.json" }} />
            ),
            title: 'Connect with us',
            subtitle: 'Subscribe this channel to boost your productivity level',
          },

          {
            backgroundColor: '#fbfbfc',
            image: (

              <LottieView autoPlay style={{ width: 300, height: 300, }}
                source={{ uri: "https://lottie.host/2124fe5f-dd33-4f95-9c35-40074c8b4107/HNBtTVQnKq.json" }} />
            ),
            title: 'Get Notified',
            subtitle: 'You can all infor about your devices',
          },

          {
            backgroundColor: '#fbfbfc',
            image: (
           
              <LottieView autoPlay style={{ width:  300, height: 300, }}
                source={{ uri: "https://lottie.host/4109e9d9-0673-44f7-ac87-b87db97904e6/2JffLxoxIs.json" }} />
            ),
            
            title: 'Lets Get Start',
            subtitle: 'Communicate with tutor',
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
  }, doneButton: {
    padding: 20,
    // backgroundColor: 'white',
    // borderTopLeftRadius: '100%',
    // borderBottomLeftRadius: '100%'
}


})