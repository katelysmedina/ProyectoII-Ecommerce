import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, Dimensions } from 'react-native';

const { height } = Dimensions.get('window'); 

const Banner = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/img/BANNER3.jpeg')} 
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.bannerText}>Edición</Text>
        <Text style={styles.bannerText}>Invierno 24</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Compra ahora</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: height,
    marginBottom: 40, 
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  textContainer: {
    position: 'absolute', 
    bottom: '35%', 
    left: 20, 
    right: 20, 
    alignItems: 'center', 
  },
  bannerText: {
    fontSize: 35,
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
    fontSize: 15,
  },
});

export default Banner;
