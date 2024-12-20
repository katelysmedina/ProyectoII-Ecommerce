import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import Carrusel from './CarruselProductos';

const products = [
  { id: '1', name: 'Vestido mini blazer', price: 'MXN 1299.00', descuento: 'MXN 799.00', image: require('../assets/img/VES2_1.jpeg') },
  { id: '2', name: 'Top drapeado', price: 'MXN 789.00', descuento: 'MXN 679.00', image: require('../assets/img/TOP4_1.jpeg') },
  { id: '3', name: 'Top en tejido acanelado', price: 'MXN 399.00', descuento: 'MXN 199.00', image: require('../assets/img/TOP1_1.jpeg') },
  { id: '4', name: 'Zapatillas kitten destalonado', price: 'MXN 1299.00', descuento: 'MXN 399.00', image: require('../assets/img/ZAP1_1.jpeg') },
  { id: '5', name: 'Vestido maxi en satín', price: 'MXN 999.00', descuento: 'MXN 899.00', image: require('../assets/img/VES1_1.jpeg') },
];

const Rebajas = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rebajas</Text>
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
    color: '#de1b35'

  }
});

export default Rebajas;
