import React, { useEffect, useContext, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import NavBar from '../components/NavBar';
import { MisComprasContext } from '../components/MisComprasProvider';

const SeguimientoCompraScreen = ({ navigation, route }) => {
    const { misCompras } = useContext(MisComprasContext);
    const [estadoSeguimiento, setEstadoSeguimiento] = useState(0);
    const [productosComprados, setProductosComprados] = useState([]);
    const [notificacion, setNotificacion] = useState(''); // Estado para la notificación

    const { compraId } = route.params;
    const index = compraId - 1; 
    const total = productosComprados.reduce((acc, product) => acc + (product.price * product.quantity), 0);
    const estados = [
        { id: 1, nombre: 'En transito'},
        { id: 2, nombre: 'En preparación'},
        { id: 3, nombre: 'En camino'},
        { id: 4, nombre: 'Entregado'},
      ];

      useEffect(() => {
        setEstadoSeguimiento(misCompras[index].seguimientoEstadoId);
        setProductosComprados(misCompras[index].compras);
        
        
        if (misCompras[index].seguimientoEstadoId === 1) {
            setNotificacion('Tu pedido está en tránsito.');
        
            
        } else {
            setNotificacion('');
        }
    }, [misCompras, index, productosComprados]);


    const renderProduct = ({ item }) => (
      <View style={styles.items}>
      <View style={styles.infoProductImage}>
          <Image source={item.image[0]} style={styles.productImage} />
      </View>
      <View style={styles.infoProduct}>
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.textDescription}>{item.selectedSize} | {item.quantity} X {item.price}</Text>
          <Text style={[styles.textDescription, {fontWeight: 'bold'}]}>MXN ${(item.quantity * item.price).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} </Text>
      </View>
  </View>
    );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
        <Feather name="chevron-left" size={20} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>Seguimiento de envío # {compraId}</Text>
      <Text style={styles.subtitleSmall}>{misCompras[index].fecha}</Text>

      <Text style={styles.subtitle}>Dirección de envío:</Text>
      <Text style={styles.subtitleSmall}>{misCompras[index].datosEnvio.direccion}, {misCompras[index].datosEnvio.codigoPostal}, {misCompras[index].datosEnvio.ciudad}, {misCompras[index].datosEnvio.estado}</Text>

      <View style={styles.containerTimeLine}>
      {estados.map((estado) => (
        <View key={estado.id} style={styles.stepContainer}>
          <View style={[styles.circle,  estadoSeguimiento >= estado.id ? styles.active : styles.inactive]}/>
            <View style={[ styles.line, estadoSeguimiento >= estado.id ? styles.active : styles.inactive]}/>
          <Text style={styles.text}>{estado.nombre}</Text>
        </View>
      ))}
      </View>
      
      {/* Mostrar la notificación */}
      {notificacion ? <Text style={styles.notification}>{notificacion}</Text> : null}

      <Text style={styles.subtitle}>Detalles de la compra</Text>
      <FlatList
        data={productosComprados}
        renderItem={renderProduct}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={true}
        style={styles.productList}
        contentContainerStyle={{ paddingBottom: 70 }}
       />
      <View style={styles.footerContainer}>
        <View style={styles.column}>
          <Text style={styles.totalText}>Total MXN ${total.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.infromacionPago}>Método de pago</Text>
          <Text style={styles.datosPago}>{misCompras[index].informacionPago.metodoDePago}</Text>
          <Text style={styles.datosPago}>*****{(misCompras[index].informacionPago.informacionPago).slice(-4)}</Text>
        </View>
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
  column:{
    flex: 1,
    height: '100%',
    paddingTop: 5
  },
  footerContainer:{
    display: 'flex',
    flexDirection: 'row-reverse',
    height: 130,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  totalText:{
    fontFamily: 'WorkSans-Regular',
    fontSize: 16,
    textAlign: 'right',
  },

  infromacionPago:{
    fontFamily: 'WorkSans-Regular',
    fontSize: 16,
    textAlign: 'left',
  },
  
  datosPago:{
    fontFamily: 'WorkSans-Regular',
    fontSize: 11,
    textAlign: 'left',
  },
  inactive:{
    backgroundColor: '#BDBDBD'
  },
  active:{
    backgroundColor: '#4CAF50'

  },
  closeButton: {
    position: 'absolute',
    top: 35,
    left: 14,
    zIndex: 1,
  },
  title: {
    fontFamily: 'Figtree-SemiBold',
    fontSize: 20,
    marginBottom: 5,
    marginTop: 80, 
  },

  subtitleSmall: {
    fontFamily: 'WorkSans-Regular',
    fontSize: 12,
    marginBottom: 15,
  },

  subtitle: {
    fontFamily: 'Figtree-SemiBold',
    fontSize: 16,
    marginBottom: 10,
  },
  
  containerTimeLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  stepContainer: {
    width: '25%',
    height: 50,
    position: 'relative'
  },
  circle: {
    width: 15,
    height: 15,
    borderRadius: 10,
    position: 'absolute',
    top: -7.5,
    right: '46%',
    zIndex: 1,
  },

  line: {
    width: '100%',
    height: 2,
  },
  text: {
    fontFamily: 'WorkSans-Regular',
    marginTop: 10,
    fontSize: 11,
    textAlign: 'center',
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
  },
  productList:{
    flex: 1,
    width: "100%",
    height: "100%",
  },

});

export default SeguimientoCompraScreen;
