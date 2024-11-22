import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import NavBar from '../components/NavBar';

const CalzadoMenuScreen = ({ navigation }) => {
  const calzadoCategories = [
    'Botas',
    'Balerinas',
    'Zapatillas',
    'Loafers'
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
        <Text style={styles.headerText}>Zapatos</Text>
      </View>
      <View style={styles.textContainer}>
        {calzadoCategories.map((category, index) => (
          <TouchableOpacity key={index} onPress={() => navigateToCategory(category)}>
            <View style={styles.categoryContainer}>
              <Text style={styles.menuCategory}>{category}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <NavBar navigation={navigation}  />
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
    fontFamily: 'Figtree-SemiBold', 
    fontSize: 15,
    fontWeight: '500',
    marginLeft: 10,
    textTransform: 'uppercase',
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
});

export default CalzadoMenuScreen;
