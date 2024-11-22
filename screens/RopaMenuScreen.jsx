import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import NavBar from '../components/NavBar';

const RopaMenuScreen = ({ navigation }) => {
  const ropaCategories = [
    'Cazadoras y abrigos', 
    'Blazers', 
    'Jeans', 
    'Pantalones', 
    'Suéteres', 
    'Tops', 
    'Blusas', 
    'Faldas', 
    'Vestidos'
  ];

  const navigateToCategory = (category) => {
    
    navigation.navigate('ProductList', { category });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
          <Feather name="chevron-left" size={18} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Ropa</Text>
      </View>
      
      <View style={styles.textContainer}>
        {ropaCategories.map((category, index) => (
          <TouchableOpacity key={index} onPress={() => navigateToCategory(category)}>
            <View style={styles.categoryContainer}>
              <Text style={styles.menuCategory}>{category}</Text>
            </View>
          </TouchableOpacity>
        ))}
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    marginTop: 20,
    marginBottom: 30,
  },
  headerText: {
    fontFamily: 'Figtree-Bold', 
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center', 
    flex: 1, 
  },
  textContainer: {
    alignItems: 'flex-start',
    marginTop: 20, 
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  menuCategory: {
    fontSize: 15,
    textTransform: 'uppercase',
    fontFamily: 'Figtree-Medium', 
    fontWeight: '500',
  },
});

export default RopaMenuScreen;
