import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Categories from '../../components/home/categories';
import Title from '../../components/home/head';
import Info from '../../components/home/info';
import Search from '../../components/home/search';

const Home = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#f1f1f1', margin: 10}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Title />
        </View>
        <View>
          <Search />
        </View>
        <View>
          <Info />
        </View>
        <View>
          <Categories />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
