import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

const NavBar = ({ navigation, activeScreen }) => {
  return (
    <View style={styles.tabBar}>
      <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate('Home')}>
        <Feather name="home" size={18} color={activeScreen === 'Home' ? '#000' : '#555'} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate('Search')}>
        <Feather name="search" size={18} color={activeScreen === 'Search' ? '#000' : '#555'} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate('Menu')}>
        <View style={styles.menuContainer}>
          <Text style={styles.menuText}>MENÚ</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate('MiBolsa')}>
        <Feather name="shopping-bag" size={18} color={activeScreen === 'MisCompras' ? '#000' : '#555'} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate('Login')}>
        <Feather name="user" size={18} color={activeScreen === 'Login' ? '#000' : '#555'} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 18,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 12,
    left: 18,
    right: 18,
    borderRadius: 15,
    shadowColor: '#d1d1d1',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.5,
  },
  tab: {
    alignItems: 'center',
  },
  menuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuText: {
    fontSize: 14,
    color: '#666',
    fontFamily: 'WorkSans-Medium',
  },
});

export default NavBar;
