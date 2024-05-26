import {
  Button,
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const SignIn = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 4}}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#9370DB',
          borderBottomRightRadius: 100,
          borderBottomLeftRadius: 100,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../assets/images/cow3.png')}
          style={{
            width: 150,
            height: 100,
          }}
        />
        <Text
          style={{
            textAlign: 'center',
            fontSize: 25,
            color: 'white',
            marginVertical: 20,
            fontFamily: 'lucida grande',
          }}>
          Welcome..!
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          height: '100%',
          width: '100%',
          flex: 1,
        }}>
        <View
          style={{
            height: '100%',
            width: '100%',
            justifyContent: 'center',
          }}>
          <View style={{margin: 10}}>
            <View>
              <TextInput placeholder="Enter Your mail" style={styles.input} />
            </View>
            <View>
              <TextInput placeholder="*********" style={styles.input} />
            </View>
            <View style={{marginHorizontal: 10, marginVertical: 10}}>
              <Button
                onPress={() => navigation.navigate('Tab')}
                color={'#9370DB'}
                title="Signin"
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: 'black',
  },
});
