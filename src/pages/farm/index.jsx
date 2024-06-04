import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Farm = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, padding: 20}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Gider')}
          style={{
            width: '100%',
            height: 100,
            backgroundColor: '#ff4f00',
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 20}}>Farm Gider +</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 2}}>
        <Text>farm giderlere eklenen yer buraya gönderilecek</Text>
      </View>
    </View>
  );
};

export default Farm;

const styles = StyleSheet.create({});
