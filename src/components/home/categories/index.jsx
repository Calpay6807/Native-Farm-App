import {
  Dimensions,
  Image,
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
const Categories = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text style={{fontSize: 20, marginVertical: 10}}>Categories</Text>
      <View style={{flexDirection: 'row'}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity
            style={{
              width: width * 0.3,
              backgroundColor: 'white',
              padding: 5,
              borderRadius: 20,
              marginHorizontal: 10,
            }}>
            <View
              style={{
                padding: 5,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  backgroundColor: '#e9e9e9',
                  borderRadius: 10,
                  width: 50,
                  height: 40,
                }}
                source={require('../../../assets/images/cow3.png')}
              />
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: 'gray',
                }}>
                İnek
              </Text>
            </View>
          </TouchableOpacity>
          <View
            style={{
              width: width * 0.3,
              backgroundColor: 'white',
              padding: 5,
              borderRadius: 20,
            }}>
            <View
              style={{
                padding: 5,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  backgroundColor: '#e9e9e9',
                  borderRadius: 10,
                  width: 50,
                  height: 40,
                }}
                source={require('../../../assets/images/cow3.png')}
              />
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: 'gray',
                }}>
                Düve
              </Text>
            </View>
          </View>
          <View
            style={{
              width: width * 0.3,
              backgroundColor: 'white',
              padding: 5,
              borderRadius: 20,
              marginHorizontal: 10,
            }}>
            <View
              style={{
                padding: 5,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  backgroundColor: '#e9e9e9',
                  borderRadius: 10,
                  width: 50,
                  height: 40,
                }}
                source={require('../../../assets/images/cow3.png')}
              />
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: 'gray',
                }}>
                Buzağ
              </Text>
            </View>
          </View>
          <View
            style={{
              width: width * 0.3,
              backgroundColor: 'white',
              padding: 5,
              borderRadius: 20,
              marginHorizontal: 10,
            }}>
            <View
              style={{
                padding: 5,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  backgroundColor: '#e9e9e9',
                  borderRadius: 10,
                  width: 50,
                  height: 40,
                }}
                source={require('../../../assets/images/cow3.png')}
              />
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: 'gray',
                }}>
                Tosun
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
      {/* diffrant alan */}
      <View
        style={{
          flexDirection: 'row',
        }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Animal-Detail')}
            style={{marginHorizontal: 10}}>
            <View>
              <Image
                style={{
                  width: 180,
                  height: 150,
                  backgroundColor: '#f1f1f1',
                  borderRadius: 10,
                  backgroundColor: 'white',

                  borderRadius: 15,
                  marginVertical: 13,
                  padding: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                source={require('../../../assets/images/cow3.png')}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 5,
              }}>
              <View>
                <Text style={{fontWeight: 'bold', fontSize: 16}}>Simental</Text>
                <Text style={{color: 'gray'}}>9 mounth old</Text>
              </View>
              <View>
                <Text style={{fontWeight: 'bold', fontSize: 16}}>180$</Text>
                <Text style={{color: 'gray'}}>1.6 km away</Text>
              </View>
            </View>
          </TouchableOpacity>

          <View style={{marginHorizontal: 10}}>
            <View>
              <Image
                style={{
                  width: 180,
                  height: 150,
                  backgroundColor: '#f1f1f1',
                  borderRadius: 10,
                  backgroundColor: 'white',

                  borderRadius: 15,
                  marginVertical: 13,
                  padding: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                source={require('../../../assets/images/cow3.png')}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 5,
              }}>
              <View>
                <Text style={{fontWeight: 'bold', fontSize: 16}}>Simental</Text>
                <Text style={{color: 'gray'}}>9 mounth old</Text>
              </View>
              <View>
                <Text style={{fontWeight: 'bold', fontSize: 16}}>180$</Text>
                <Text style={{color: 'gray'}}>1.6 km away</Text>
              </View>
            </View>
          </View>

          <View style={{marginHorizontal: 10}}>
            <View>
              <Image
                style={{
                  width: 180,
                  height: 150,
                  backgroundColor: '#f1f1f1',
                  borderRadius: 10,
                  backgroundColor: 'white',

                  borderRadius: 15,
                  marginVertical: 13,
                  padding: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                source={require('../../../assets/images/cow3.png')}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 5,
              }}>
              <View>
                <Text style={{fontWeight: 'bold', fontSize: 16}}>Simental</Text>
                <Text style={{color: 'gray'}}>9 mounth old</Text>
              </View>
              <View>
                <Text style={{fontWeight: 'bold', fontSize: 16}}>180$</Text>
                <Text style={{color: 'gray'}}>1.6 km away</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({});
