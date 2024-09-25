import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import NavBar from '../components/NavBar';

const RopaMenuScreen = ({ navigation }) => {
  const ropaCategories = [
    'Lo más vendido', 
    'Edición Denim', 
    'Cazadoras y abrigos', 
    'Jeans', 
    'Pantalones', 
    'Suéteres', 
    'Tops', 
    'Blusas', 
    'Faldas', 
    'Vestidos'
  ];

  const navigateToCategory = (category) => {
    console.log(category); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
          <Feather name="chevron-left" size={18} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Menú</Text>
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
    marginTop: 60,
    marginBottom: 30,
  },
  headerText: {
    fontFamily: 'Montserrat', 
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10,
    textTransform: 'uppercase',
  },
  textContainer: {
    alignItems: 'flex-start',
    marginTop: 10, 
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  menuCategory: {
    fontSize: 16,
    textTransform: 'uppercase',
    fontFamily: 'Montserrat', 
    fontWeight: '500',
  },
});

export default RopaMenuScreen;
