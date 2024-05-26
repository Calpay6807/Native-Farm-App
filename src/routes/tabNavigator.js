import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../pages/home';
import Farm from '../pages/farm';
import Veterinary from '../pages/veterinary/Veterinary';
import Sales from '../pages/sales/Sales';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerStyle: {backgroundColor: 'black'},
        headerTitleStyle: {color: 'white', fontWeight: 'bold'},
        tabBarStyle: {
          backgroundColor: 'white',
          borderRadius: 20,
          marginHorizontal: 10,
          marginBottom: 10,
          height: 60,
          paddingBottom: 5,
        },

        tabBarIcon: ({focused, color, size}) => {
          switch (route.name) {
            case 'Home':
              return (
                <Image
                  width={10}
                  source={require('../../src/assets/icons/home.png')}
                />
              );
            case 'Farm':
              return (
                <Image
                  width={10}
                  source={require('../../src/assets/icons/pet.png')}
                />
              );
            case 'Veterinary':
              return (
                <Image
                  width={10}
                  source={require('../../src/assets/icons/health.png')}
                />
              );

            case 'Sales':
              return (
                <Image
                  width={10}
                  source={require('../../src/assets/icons/milk.png')}
                />
              );
          }
        },
      })}>
      <Tab.Screen options={{headerShown: false}} name="Home" component={Home} />
      <Tab.Screen name="Farm" component={Farm} />
      <Tab.Screen name="Veterinary" component={Veterinary} />
      <Tab.Screen name="Sales" component={Sales} />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
