import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const AnimalDetail = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f2f2f2'}}>
      <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
        <View style={{flex: 1}}>
          <View
            style={{
              backgroundColor: '#D8BFD8',
              flex: 1,
              borderBottomRightRadius: 150,
              borderBottomLeftRadius: 150,
            }}>
            <Image
              style={{
                width: width * 1,
                height: (height * 2) / 5,

                resizeMode: 'contain',
              }}
              source={require('../../../assets/images/cow3.png')}
            />
          </View>
          <View style={{flex: 1}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 10,
              }}>
              <View>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Name</Text>

                <Text style={{fontSize: 17, color: '#9370DB', marginTop: 10}}>
                  1.6 km away
                </Text>
              </View>
              <View>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>$180</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                padding: 10,
              }}>
              <View
                style={{
                  backgroundColor: '#fde910',
                  borderRadius: 20,
                  padding: 10,
                  alignItems: 'center',
                  width: width * 0.25,
                  height: height * 0.12,
                  justifyContent: 'center',
                }}>
                <Text
                  style={{fontSize: 15, fontWeight: 'bold', color: 'black'}}>
                  9 Months
                </Text>
                <Text style={{fontSize: 18, color: 'gray'}}>Age</Text>
              </View>
              <View
                style={{
                  backgroundColor: '#ff9f31',
                  borderRadius: 20,
                  padding: 10,
                  alignItems: 'center',
                  width: width * 0.25,
                  height: height * 0.12,
                  justifyContent: 'center',
                }}>
                <Text
                  style={{fontSize: 15, fontWeight: 'bold', color: 'black'}}>
                  Female
                </Text>
                <Text style={{fontSize: 15, color: 'gray'}}> Gender</Text>
              </View>
              <View
                style={{
                  backgroundColor: '#ffc4d8',
                  borderRadius: 20,
                  padding: 10,
                  alignItems: 'center',
                  width: width * 0.25,
                  height: height * 0.12,
                  justifyContent: 'center',
                }}>
                <Text
                  style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
                  100kg
                </Text>
                <Text style={{fontSize: 18, color: 'gray'}}>Weight</Text>
              </View>
            </View>
            <View style={{padding: 10}}>
              <Text
                style={{fontSize: 20, fontWeight: 'bold', marginVertical: 7}}>
                About
              </Text>
              <Text style={{fontSize: 17, color: 'gray'}}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                cum ea, mollitia rem sapiente est.
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                padding: 5,
              }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Gallery')}
                style={{
                  borderRadius: 20,
                  backgroundColor: '#E0B0FF',
                  flex: 1,
                  padding: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                {/* <Text style={{color: 'white', textAlign: 'center'}}>İcon</Text> */}
                <Image
                  style={{
                    width: 30,
                    height: 30,
                  }}
                  source={require('../../../assets/icons/gallery.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  borderRadius: 20,
                  backgroundColor: '#6A5ACD',
                  flex: 2,
                  marginHorizontal: 10,
                  padding: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: 'white', fontSize: 18, color: 'black'}}>
                  Expense Info
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AnimalDetail;

const styles = StyleSheet.create({});
