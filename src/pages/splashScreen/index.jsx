import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import SignIn from '../signIn';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <LottieView
        source={require('../../assets/animation/splash.json')}
        autoPlay
        loop={false}
        style={{flex: 1}}
        onAnimationFinish={() => {
          setTimeout(() => {
            navigation.navigate('SignIn');
          }, 100);
        }}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
