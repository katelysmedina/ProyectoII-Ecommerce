import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import NavBar from '../components/NavBar';

const MisComprasScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
        <Feather name="chevron-left" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>Mis compras</Text>

      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Aún no tienes compras</Text>
        <Text style={styles.emptySubText}>Descubre todo lo que tenemos para ti</Text>
        <TouchableOpacity style={styles.discoverButton} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.discoverButtonText}>Descubrir</Text>
        </TouchableOpacity>
      </View>
      <NavBar navigation={navigation} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  closeButton: {
    position: 'absolute',
    top: 35,
    left: 14,
    zIndex: 1,
  },
  title: {
    fontFamily: 'Figtree-SemiBold',
    fontSize: 25,
    marginBottom: 20,
    marginTop: 80, 
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    marginTop: -60, 
  },
  emptyText: {
    fontFamily: 'WorkSans-Medium',
    fontSize: 18,
    marginBottom: 10,
  },
  emptySubText: {
    fontFamily: 'WorkSans-Medium',
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
    marginBottom: 20,
  },
  discoverButton: {
    backgroundColor: '#000',
    paddingVertical: 11,
    paddingHorizontal: 25,
    borderRadius: 4,
  },
  discoverButtonText: {
    color: '#fff',
    fontFamily: 'Figtree-SemiBold',
    fontSize: 15,
    textTransform: 'uppercase',
  },
});

export default MisComprasScreen;
