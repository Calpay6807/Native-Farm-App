import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const Search = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        borderRadius: 20,
        margin: 10,
        borderColor: 'gray',
        backgroundColor: 'white',
      }}>
      <Image
        style={{width: 20, height: 20, marginHorizontal: 10}}
        source={require('../../../assets/icons/search.png')}
      />

      <TextInput
        style={{backgroundColor: 'white'}}
        placeholder="Search here...."
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({});
