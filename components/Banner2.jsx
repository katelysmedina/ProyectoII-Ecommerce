import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, Dimensions } from 'react-native';

const { height } = Dimensions.get('window'); 

const Banner2 = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/img/BANNER1.jpeg')} 
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.bannerText}>NEW IN</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ver todo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: height * 0.5,
    marginBottom: 40,
    marginTop: 80
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  textContainer: {
    position: 'absolute', 
    bottom: '25%', 
    left: 20, 
    right: 20, 
    alignItems: 'center', 
  },
  bannerText: {
    fontSize: 28,
    color: '#f3f3f3', 
    fontFamily: 'Figtree-Bold',
    textTransform: 'uppercase',
  },
  button: {
    backgroundColor: '#f1f1f1',
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  buttonText: {
    color: 'black',
    textTransform: 'uppercase',
    fontFamily: 'Figtree-Bold',
  },
});

export default Banner2;
