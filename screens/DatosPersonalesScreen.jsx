import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import NavBar from '../components/NavBar';

const DatosPersonalesScreen = ({ navigation }) => {
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [telefono, setTelefono] = useState('');
  
  const prefijo = '+52';

  const handleSave = () => {
    console.log('Nombre:', nombre);
    console.log('Apellidos:', apellidos);
    console.log('Teléfono:', `${prefijo} ${telefono}`); 
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
        <Feather name="chevron-left" size={20} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>Datos personales</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre"
        placeholderTextColor="#aaa" 
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Apellidos"
        placeholderTextColor="#aaa" 
        value={apellidos}
        onChangeText={setApellidos}
      />

      
      <View style={styles.phoneContainer}>
        <TextInput
          style={styles.prefixInput}
          value={prefijo}
          editable={false}
        />
        <TextInput
          style={styles.phoneInput}
          placeholder="Número de teléfono"
          placeholderTextColor="#aaa"
          value={telefono}
          onChangeText={setTelefono}
          keyboardType="phone-pad"
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Guardar</Text>
      </TouchableOpacity>

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
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    overflow: 'hidden',
  },
  prefixInput: {
    height: 50,
    paddingHorizontal: 10,
    fontSize: 14,
    fontFamily: 'Figtree-Regular', 
    color: '#000',
    backgroundColor: '#f0f0f0', 
    width: 50, 
  },
  phoneInput: {
    height: 50,
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 14,
    fontFamily: 'Figtree-Regular', 
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

export default DatosPersonalesScreen;
