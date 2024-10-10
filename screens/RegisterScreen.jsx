import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import NavBar from '../components/NavBar';

const RegisterScreen = ({ navigation }) => { 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [selectedOptions, setSelectedOptions] = useState({
    option1: false,
    option2: false,
  });

  const handleRegister = () => {
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    console.log('Selected Options:', selectedOptions);
    
  
    navigation.navigate('Configuration');
  };

  const toggleOption = (option) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [option]: !prev[option],
    }));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
        <Feather name="chevron-left" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>Crear cuenta</Text>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Text style={styles.subtitle}>Mínimo 8 caracteres incluyendo minúscula, mayúscula y un número</Text>

      <View style={styles.radioGroup}>
        <TouchableOpacity style={styles.radioButton} onPress={() => toggleOption('option1')}>
          <View style={[styles.radioCircle, selectedOptions.option1 && styles.selectedRadio]}>
            {selectedOptions.option1 && <Feather name="check" size={12} color="#fff" />}
          </View>
          <Text style={styles.radioText}>Acepto recibir novedades, comunicaciones y promociones de OPHELIA</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.radioButton} onPress={() => toggleOption('option2')}>
          <View style={[styles.radioCircle, selectedOptions.option2 && styles.selectedRadio]}>
            {selectedOptions.option2 && <Feather name="check" size={12} color="#fff" />}
          </View>
          <Text style={styles.radioText}>He leído y acepto la Política de Privacidad</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Crear cuenta</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        
      </View>
      <NavBar navigation={navigation} activeScreen="Login" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
    marginTop: -18,
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
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  footerText: {
    fontFamily: 'WorkSans-Regular',
    fontSize: 14,
  },
  registerText: {
    color: '#000000',
    fontFamily: 'WorkSans-SemiBold',
    fontSize: 14,
    marginLeft: 4,
  },
  subtitle: {
    fontFamily: 'WorkSans-Regular',
    fontSize: 11,
    marginTop: -5,
    color: '#909090',
    marginBottom: 15,
  },
  radioGroup: {
    flexDirection: 'column',
    marginTop: 20,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderColor: '#ccc',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRadio: {
    backgroundColor: '#35b08d',
  },
  radioText: {
    marginLeft: 10,
    fontFamily: 'WorkSans-Regular',
    fontSize: 13,
  },
});

export default RegisterScreen;
