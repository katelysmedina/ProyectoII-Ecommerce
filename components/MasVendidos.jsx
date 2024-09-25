import React from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity, Image } from 'react-native';

const products = [
  { id: '1', name: 'Abrigo largo con cinturón', price: 'MXN 1299.00', image: require('../assets/img/ABR1_1.jpeg') },
  { id: '2', name: 'Pantalón pierna ancha con pinzas', price: 'MXN 789.00', image: require('../assets/img/PAN1_1.jpeg') },
  { id: '3', name: 'Suéter de cuello alto', price: 'MXN 499.00', image: require('../assets/img/SUE3_3.jpeg') },
];

const MasVendidos = ({ navigation }) => {
  const renderProduct = ({ item }) => (
    <TouchableOpacity style={styles.productContainer} onPress={() => navigation.navigate('Detalle', { productId: item.id })}>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Los más vendidos</Text>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    
  },
  title: {
    fontSize: 17,
    fontWeight: '500',
    marginBottom: 10,
    textTransform: 'uppercase',
    fontFamily: 'Montserrat',
    marginLeft: 20,
  },
  productContainer: {
    marginRight: 10,
    
  },
  productImage: {
    width: 300, 
    height: 400,
    marginBottom: 5, 
  },
  productName: {
    fontSize: 15,
    textAlign: 'left',
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 10,
    fontFamily: 'Montserrat-SemiBold',
  },
  productPrice: {
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    color: '#de1b35',
    marginBottom: 100,
    marginLeft: 10,
  },
});

export default MasVendidos;
