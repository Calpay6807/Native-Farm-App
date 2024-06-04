import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Gider = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={{backgroundColor: '#f3f3f3'}}>
        <View
          style={{
            padding: 10,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <TextInput
            style={{
              backgroundColor: 'white',
              padding: 15,
              borderRadius: 10,
              flex: 1,
            }}
            placeholder="Category"
          />

          <TextInput
            style={{
              backgroundColor: 'white',
              padding: 15,
              flex: 1,
              marginHorizontal: 5,
              borderRadius: 10,
            }}
            placeholder="Weight"
          />
        </View>
        <View
          style={{
            padding: 10,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <TextInput
            style={{
              backgroundColor: 'white',
              padding: 15,
              flex: 1,
              marginHorizontal: 5,
              borderRadius: 10,
            }}
            placeholder="Price"
          />

          <TextInput
            style={{
              backgroundColor: 'white',

              padding: 15,
              flex: 1,
              marginHorizontal: 5,
              borderRadius: 10,
            }}
            placeholder="Date"
          />
        </View>
        <View style={{padding: 10}}>
          <TextInput
            style={{backgroundColor: 'white', padding: 20, borderRadius: 20}}
            placeholder="Search"
          />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Farm')}
          style={{
            backgroundColor: '#ff4f00',
            padding: 10,
            marginHorizontal: 20,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 20}}>Add +</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Gider;

const styles = StyleSheet.create({});
