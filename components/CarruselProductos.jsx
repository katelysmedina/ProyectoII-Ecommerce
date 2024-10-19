import React from 'react';
import { Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';

const Carrusel = ({ productos, navigation }) => {
  const renderProducto = ({ item }) => (
    <TouchableOpacity 
      style={styles.productContainer} 
      onPress={() => navigation.navigate('Detalle', { productId: item.id })}
    >
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productName} numberOfLines={1} ellipsizeMode="tail">
        {item.name}
      </Text>
      <Text 
        style={[
          styles.productPrice, 
          item.descuento ? styles.subrayarProductoPrecio : '',
        ]}
      >
        {item.price}
      </Text>
      {item.descuento && (
        <Text style={[styles.productPrice, styles.productConDescuento]}>
          {item.descuento}
        </Text>
      )}
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={productos}
      renderItem={renderProducto}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  productContainer: {
    marginRight: 10,
  },
  productImage: {
    width: 250,
    height: 350,
    marginBottom: 5,
  },
  productName: {
    fontSize: 15,
    textAlign: 'left',
    marginBottom: 3,
    marginTop: 10,
    marginLeft: 10,
    fontFamily: 'WorkSans-Medium',
    width: 230,
  },
  productPrice: {
    fontSize: 14,
    fontFamily: 'WorkSans-Regular',
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10,
  },
  subrayarProductoPrecio: {
    textDecorationLine: 'line-through',
  },
  productConDescuento: {
    color: '#de1b35',
    marginBottom: 100,
  },
});

export default Carrusel;
