import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import NavBar from '../components/NavBar';
import Feather from '@expo/vector-icons/Feather';

const MenuScreen = ({ navigation }) => {
  const navigateToCategory = (category) => {
    navigation.navigate(category); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.menuNew}>Novedades</Text>
        <Text style={styles.menuDenim}>Edición Denim</Text>
        
        <TouchableOpacity onPress={() => navigateToCategory('RopaMenuScreen')}>
          <View style={styles.categoryContainer}>
            <Text style={styles.menuCategory}>Ropa</Text>
            <Feather name="chevron-right" size={17} color="black" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigateToCategory('CalzadoMenuScreen')}>
          <View style={styles.categoryContainer}>
            <Text style={styles.menuCategory}>Zapatos</Text>
            <Feather name="chevron-right" size={17} color="black" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigateToCategory('Bolsos')}>
          <View style={styles.categoryContainer}>
            <Text style={styles.menuCategory}>Bolsos</Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.menuOffers}>Rebajas</Text>
      </View>
      <NavBar navigation={navigation} /> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 20, 
  },
  textContainer: {
    alignItems: 'flex-start', 
    marginTop: 150,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center', 
    marginBottom: 20,
  },
  menuOffers: {
    marginTop: 35,
    fontSize: 17,
    color: '#de1b35',
    textTransform: 'uppercase',
    fontFamily: 'MontserratSemiBold',  
    fontWeight: '500',
  },
  menuCategory: {
    fontSize: 17,
    textTransform: 'uppercase',
    fontFamily: 'MontserratSemiBold', 
    fontWeight: '100',
  },
  menuNew: {
    fontSize: 19,
    fontWeight: '500',
    textTransform: 'uppercase',
    marginBottom: 10,
    fontFamily: 'Montserrat', 
  },
  menuDenim: {
    fontSize: 19,
    fontWeight: '900',
    textTransform: 'uppercase',
    marginBottom: 30,
    fontFamily: 'Montserrat', 
    fontWeight: '500',
  }
});

export default MenuScreen;
