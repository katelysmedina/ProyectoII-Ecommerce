
import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Banner from '../components/Banner';
import NavBar from '../components/NavBar';
import Destacados from '../components/MasVendidos';
import Banner2 from '../components/Banner2';
import Rebajas from '../components/Rebajas';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Banner />
        <Destacados navigation={navigation} />
        <Banner2 />
        <Rebajas  navigation={navigation}/>
      </ScrollView>
      
      <NavBar navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
});

export default HomeScreen;

