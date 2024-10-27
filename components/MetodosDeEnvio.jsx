import React from "react";
import { SafeAreaView, Text, StyleSheet, View, TouchableOpacity } from "react-native";
import Feather from '@expo/vector-icons/Feather';
const MetodosDeEnvio = ({ route, navigation }) => {
  const { total } = route.params;
  const costoEnvioEstandar = total >= 999 ? 0 : 90;
  const costoEnvioExpres = 220;

  const handleSeleccionarEnvio = (tipoEnvio, costoEnvio) => {
    const totalConEnvio = total + costoEnvio;
    navigation.navigate('DireccionesPago', { total: totalConEnvio, tipoEnvio });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
        <Feather name="x" size={20} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>Métodos de envío</Text>
      <View style={styles.optionContainer}>
        <Text style={styles.introText}>Seleccione un método de envío:</Text>
        
        <TouchableOpacity 
          style={styles.optionButton} 
          onPress={() => handleSeleccionarEnvio("Estándar domicilio", costoEnvioEstandar)}>
          <View>
            <Text style={styles.optionText}>Estándar domicilio</Text>
            <Text style={styles.optionInfo}>Recíbelo de 3 a 5 días hábiles</Text>
            <Text style={styles.optionPrice}>{costoEnvioEstandar === 0 ? 'Envío gratuito' : `MXN $${costoEnvioEstandar}`}</Text>
          </View>
          <View style={styles.optionIcon}>
            <Feather name="chevron-right" size={16} color="#000" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.optionButton} 
          onPress={() => handleSeleccionarEnvio("Exprés domicilio", costoEnvioExpres)}>
          <View>
            <Text style={styles.optionText}>Exprés domicilio</Text>
            <Text style={styles.optionInfo}>Recíbelo en 24 horas</Text>
            <Text style={styles.optionPrice}>MXN $220</Text>
          </View>
          <View style={styles.optionIcon}>
            <Feather name="chevron-right" size={16} color="#000" />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.totalContainer}>
        <Text style={styles.subtotalText}>Subtotal</Text>
        <Text style={styles.totalText}>MXN ${total.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</Text>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between', 
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
    marginBottom: -120,
    marginTop: 80,
    
  },
  introText: {
    fontSize: 16,
    color: '#666',
    fontFamily: 'Figtree',
    marginBottom: 20,
  },
  optionContainer: {
    marginVertical: 10,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 18,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  optionText: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'Figtree-Medium',
    marginBottom: 4,
  },
  optionInfo: {
    fontSize: 14,
    color: '#666',
    fontFamily: 'Figtree-Medium',
    marginVertical: 9,
  },
  optionPrice: {
    fontSize: 14,
    color: '#000',
    marginRight: 10,
    fontFamily: 'WorkSans-SemiBold',
  },
  chevronIcon: {
    marginLeft: 10,
  },
  
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 30, 
  },
  subtotalText: {
    fontSize: 16,
    fontFamily: 'WorkSans-Medium',
  }, 
  totalText: {
    fontSize: 16,
    fontFamily: 'WorkSans-SemiBold',
  },
});

export default MetodosDeEnvio;
