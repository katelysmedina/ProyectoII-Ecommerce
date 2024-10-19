
import React from 'react';
import { View, StyleSheet, FlatList, Text, Image } from 'react-native';
import { useProducts } from '../components/ProductProvider';

const CatalogoScreen = ({ route }) => {
  const { category } = route.params; 
  const { productsByCategory } = useProducts();

  
  const products = productsByCategory[category] || [];

  const renderItem = ({ item }) => (
    <View style={styles.productContainer}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  productContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  productPrice: {
    fontSize: 14,
    color: '#888',
  },
});

export default CatalogoScreen;
