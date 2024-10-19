import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Carrusel from './CarruselProductos';

const products = [
  { id: '1', name: 'Abrigo con cinturón de lazo', price: 'MXN 1299.00', image: require('../assets/img/ABR1_1.jpeg') },
  { id: '2', name: 'Pantalón de vestir con pliegues', price: 'MXN 789.00', image: require('../assets/img/PAN1_1.jpeg') },
  { id: '3', name: 'Suéter cuello alto', price: 'MXN 499.00', image: require('../assets/img/SUE3_3.jpeg') },
];

const MasVendidos = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Los más vendidos</Text>
      <Carrusel productos={products} navigation={navigation}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  title: {
    fontSize: 17,
    marginBottom: 10,
    textTransform: 'uppercase',
    fontFamily: 'Figtree-SemiBold',
    marginLeft: 20,
  }
});

export default MasVendidos;
