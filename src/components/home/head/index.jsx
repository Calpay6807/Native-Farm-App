import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Title = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',

        padding: 20,
        alignItems: 'center',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          style={{width: 25, height: 25}}
          source={require('../../../assets/icons/add.png')}
        />
        <Text style={{marginLeft: 20, fontSize: 25, fontWeight: 'bold'}}>
          Welcome
        </Text>
      </View>
      <View>
        <Image
          style={{
            width: 50,
            height: 40,
            borderRadius: 50,
            borderWidth: 1,
            borderColor: 'white',
          }}
          source={require('../../../assets/images/cow3.png')}
        />
      </View>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({});
