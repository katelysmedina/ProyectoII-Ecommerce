import React, { useEffect, useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Feather from '@expo/vector-icons/Feather';

const PantallaConfirmacionScreen = ({ route }) => {
  const navigation = useNavigation();
  const { total, metodoPago } = route.params;
  const [loading, setLoading] = useState(true); 
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
      setShowMessage(true);
    }, 1500);

    return () => clearTimeout(timer); 
  }, []);

  const handleClose = () => {
    navigation.navigate('MiBolsa');
  };

  return (
    <View style={styles.container}>
      {loading ? ( 
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#000" />
        </View>
      ) : (
        <>
          <View style={styles.iconContainer}>
            <Feather name="check" size={20} color="#fff" />
          </View>

          {showMessage && ( 
            <>
              <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
                <Feather name="x" size={24} color="#000" />
              </TouchableOpacity>

              <Text style={styles.title}>Hemos recibido tu pago</Text>
              <Text style={styles.message}>
                Tu pago ha sido procesado exitosamente.
              </Text>
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MisCompras')}>
                <Text style={styles.buttonText}>Ir a mis compras</Text>
              </TouchableOpacity>
            </>
          )}
        </>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000', 
    borderRadius: 50, 
    width: 40, 
    height: 40, 
    marginBottom: 30, 
  },
  closeButton: {
      position: 'absolute',
      top: 35,
      right: 14,
      zIndex: 1, 

  },
  title: {
    fontFamily: 'WorkSans-Medium',
    fontSize: 20,
    marginBottom: 10,
    backgroundColor: 'transparent',
  },
  message: {
    fontFamily: 'WorkSans-Medium',
    fontSize: 15,
    color: '#777',
    textAlign: 'center',
    marginBottom: 35,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 11,
    paddingHorizontal: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontFamily: 'WorkSans-Regular',
  },
});

export default PantallaConfirmacionScreen;
