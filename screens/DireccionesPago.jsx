import React, { useContext, useState } from 'react';
import { View, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { MisComprasContext } from '../components/MisComprasProvider';


const DireccionesPago = ({ route, navigation }) => {
    const { total, tipoEnvio } = route.params;
  const [direccion, setDireccion] = useState('');
  const [codigoPostal, setCodigoPostal] = useState('');
  const [estado, setEstado] = useState('');
  const [ciudad, setCiudad] = useState('');
  const { addDatosDeEnvio } = useContext(MisComprasContext);

  const handleSave = () => {
    addDatosDeEnvio({
      direccion,
      codigoPostal,
      estado,
      ciudad
    })
    navigation.navigate('MetodosDePago', { total, tipoEnvio });
  };

 const checkifCanContinue = (direccion != '' && codigoPostal != '' && estado != '' && ciudad != '');
 
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
        <Feather name="chevron-left" size={20} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>Datos del receptor</Text>

      <TextInput
        style={styles.input}
        placeholder="Calle y número"
        placeholderTextColor="#aaa" 
        value={direccion}
        onChangeText={setDireccion}
      />
      <TextInput
        style={styles.input}
        placeholder="Código Postal"
        placeholderTextColor="#aaa" 
        value={codigoPostal}
        onChangeText={setCodigoPostal}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Estado"
        placeholderTextColor="#aaa" 
        value={estado}
        onChangeText={setEstado}
      />
      <TextInput
        style={styles.input}
        placeholder="Ciudad"
        placeholderTextColor="#aaa"
        value={ciudad}
        onChangeText={setCiudad}
      />

      <TouchableOpacity style={[styles.button, {backgroundColor: checkifCanContinue ? '#000000' : '#4F4F4F'}]} onPress={handleSave} disabled={!checkifCanContinue}>
        <Text style={styles.buttonText}>Continuar</Text>
      </TouchableOpacity>

      
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
    fontSize: 25,
    marginBottom: 20,
    marginTop: 90,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginTop: 25,
    paddingHorizontal: 10,
    borderRadius: 4,
    marginBottom: 10,
    fontFamily: 'Figtree-Regular',
    fontSize: 14,
  },
  button: {
    backgroundColor: '#000000',
    borderRadius: 4,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    textTransform: 'uppercase',
    fontFamily: 'Figtree-Bold',
  },
});

export default DireccionesPago;
