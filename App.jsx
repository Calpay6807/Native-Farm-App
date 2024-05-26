import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SignIn from './src/pages/signIn';
import SplashScreen from './src/pages/splashScreen';
import Routes from './src/routes/Routes';
import {NavigationContainer} from '@react-navigation/native';
import {enableScreens} from 'react-native-screens';
enableScreens();
const App = () => {
  return (
    <>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
