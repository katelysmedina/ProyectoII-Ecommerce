import React, {useEffect, useContext, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import NavBar from '../components/NavBar';

import { MisComprasContext } from '../components/MisComprasProvider';

const SeguimientoCompraScreen = ({ navigation, route }) => {
    const { misCompras } = useContext(MisComprasContext);

    const [estadoSeguimiento, setEstadoSeguimiento] = useState(0);
    const { compraId } = route.params;
    const index = compraId - 1; 
    const estados = [
        { id: 1, nombre: 'En transito'},
        { id: 2, nombre: 'En preparación'},
        { id: 3, nombre: 'En camino'},
        { id: 4, nombre: 'Entregado'},
      ];


      
      useEffect(() => {
        setEstadoSeguimiento(misCompras[index].seguimientoEstadoId)
      }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
        <Feather name="chevron-left" size={20} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>Seguimiento de envío # {compraId}</Text>
      <Text style={styles.subtitle}>{misCompras[index].fecha}</Text>

      <View style={styles.containerTimeLine}>
      {estados.map((estado, index) => (
        <View key={estado.id} style={styles.stepContainer}>
          <View
            style={[
              styles.circle,
              { backgroundColor: estadoSeguimiento == estado.id ? '#4CAF50' : '#BDBDBD' }
            ]}
          />
          {/* Línea */}
            <View
              style={[
                styles.line,
                { backgroundColor: estadoSeguimiento == estado.id ? '#4CAF50' : '#BDBDBD'  }
              ]}
            />
       
          {/* Texto de estado */}
          <Text style={styles.text}>{estado.nombre}</Text>
        </View>
      ))}
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
    fontSize: 20,
    marginBottom: 5,
    marginTop: 80, 
  },

  subtitle: {
    fontFamily: 'WorkSans-Regular',
    fontSize: 12,
    marginBottom: 20,
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

});

export default SeguimientoCompraScreen;
