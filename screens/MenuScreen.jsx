import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import NavBar from '../components/NavBar';
import Feather from '@expo/vector-icons/Feather';

const MenuScreen = ({ navigation }) => {
  const navigateToCategory = (category) => {
    navigation.navigate('ProductList', { category });
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.menuNew}>NEW IN</Text>
        <Text style={styles.menuDenim}>Edición Invierno 24</Text>
        <Text style={styles.menuMasVendido}>Lo más vendido</Text>
        
        <TouchableOpacity onPress={() => navigation.navigate('RopaMenuScreen')}>
          <View style={styles.categoryContainer}>
          <Text style={styles.menuCategory}>Ropa</Text>
          <Feather name="chevron-right" size={17} color="black" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('CalzadoMenuScreen')}>
          <View style={styles.categoryContainer}>
          <Text style={styles.menuCategory}>Zapatos</Text>
          <Feather name="chevron-right" size={17} color="black" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('ProductList', { category: 'Bolsos' })}>
          <View style={styles.categoryContainer}>
          <Text style={styles.menuCategory}>Bolsos</Text>
          </View>
        </TouchableOpacity>


        <Text style={styles.menuOffers}>Rebajas</Text>
        <Text style={styles.menuOffers2}>Hasta 50% de descuento</Text>
      </View>
      <NavBar navigation={navigation} activeScreen="Menu" />
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
    fontFamily: 'Figtree-SemiBold',  
    fontWeight: '500',
  },
  menuCategory: {
    fontSize: 16,
    textTransform: 'uppercase',
    fontFamily: 'Figtree-Medium', 
    fontWeight: '100',
  },
  menuNew: {
    fontSize: 18,
    textTransform: 'uppercase',
    marginBottom: 10,
    fontFamily: 'Figtree-SemiBold', 
    
  },
  menuDenim: {
    fontSize: 18,
    textTransform: 'uppercase',
    marginBottom: 10,
    fontFamily: 'Figtree-SemiBold', 
    
  },
  menuMasVendido: {
    fontSize: 18,
    textTransform: 'uppercase',
    marginBottom: 36,
    fontFamily: 'Figtree-SemiBold', 
    
  },
  menuOffers2: {
    fontSize: 13,
    marginTop: 4,
    color: '#909090',
    fontFamily: 'Figtree',  

  },
});

export default MenuScreen;
