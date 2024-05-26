import {Button, Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const Info = () => {
  return (
    <View
      style={{
        backgroundColor: '#9370DB',
        height: height * 0.2,
        marginVertical: 10,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 7,
      }}>
      <View style={{padding: 10}}>
        <Text style={{color: 'white', fontSize: 20, marginBottom: 5}}>
          Street pets needs
        </Text>
        <Button title="Button" />
      </View>
      <View>
        <Image
          style={{width: 150, height: 100}}
          source={require('../../../assets/images/cow3.png')}
        />
      </View>
    </View>
  );
};

export default Info;

const styles = StyleSheet.create({});
