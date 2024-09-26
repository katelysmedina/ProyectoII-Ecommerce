import React from 'react';
import { Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';

const Carrusel = ({productos, navigation}) => {
    
    const renderProducto = ({ item }) => (
        <TouchableOpacity style={styles.productContainer} onPress={() => navigation.navigate('Detalle', { productId: item.id })}>
          <Image source={item.image} style={styles.productImage} />
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={[styles.productPrice, item.descuento ? styles.subrayarProductoPrecio : '']}>{item.price}</Text>
          { item.descuento ? (<Text style={[styles.productPrice, styles.productConDescuento]}>{item.descuento}</Text>) : ''}
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
      )
}

const styles = StyleSheet.create({
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
        marginLeft: 10,
      },
    
      subrayarProductoPrecio:{
        textDecorationLine: 'line-through',
      },

      productConDescuento: {
        color: 'black',
        marginBottom: 100,
      }
})

export default Carrusel;