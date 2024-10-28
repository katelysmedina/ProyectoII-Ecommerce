import React, { useContext } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import NavBar from '../components/NavBar';

import { MisComprasContext } from '../components/MisComprasProvider';

const MisComprasScreen = ({ navigation }) => {

  const { misCompras } = useContext(MisComprasContext);

  
  const renderProduct = ({ item, index }) => (
    <TouchableOpacity onPress={()=> navigation.navigate('SeguimientoCompra',{ compraId: (index + 1) })}>
      <View style={styles.items}>
          <View style={styles.infoProductImage}>
              <Image source={item.compras[0].image[0]} style={styles.productImage} />
          </View>
          <View style={styles.infoProduct}>
              <Text style={styles.productName}>{item.titulo}</Text>
              <Text style={styles.textDescription}>{item.fecha}</Text>
              <Feather style={styles.icon} name="chevron-right" size={25} color="black" />
          </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
        <Feather name="chevron-left" size={20} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>Mis compras</Text>
      <FlatList
        data={misCompras}
        renderItem={renderProduct}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={true}
        style={styles.productList}
        contentContainerStyle={{ paddingBottom: 70 }}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Aún no tienes compras</Text>
            <Text style={styles.emptySubText}>Descubre todo lo que tenemos para ti</Text>
            <TouchableOpacity style={styles.discoverButton} onPress={() => navigation.navigate('Home')}>
              <Text style={styles.discoverButtonText}>Descubrir</Text>
            </TouchableOpacity>
          </View>
        }
       />
      <NavBar navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  productList:{
    flex: 1,
    width: "100%",
    height: "100%",
  },
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: '100%',
    justifyContent: 'center', 
    alignItems: 'center',
    marginTop: 70, 
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
  },
  discoverButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontFamily: 'WorkSans-Regular',
  },
  items: {
    flex: 1,
    flexDirection: "row",
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    marginTop: 5,
    borderColor: "#E3E3E3"
  },
  productImage: {
      width: '60%',
      height: 75,
      objectFit: 'fill',
  },
  infoProductImage: {
      paddingVertical: 5,
      paddingLeft: 5,
      flex: 1
  },
  infoProduct: {
    paddingVertical: 8,
    flex: 2,
    position: 'relative'
  },
  productName: {
      fontSize: 16,
      marginVertical: 4,
      fontFamily: 'WorkSans-Regular',
      fontWeight: 'bold',
  },
  textDescription: {
      fontSize: 10,
      marginVertical: 4,
      fontFamily: 'WorkSans-Regular',
      fontWeight: 'semi-bold',
  },
  icon:{
    position: 'absolute',
    top: '50%',
    right: 0
  }
});

export default MisComprasScreen;
