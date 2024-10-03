import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import NavBar from '../components/NavBar';

const LoginScreen = ({ navigation }) => { 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
    navigation.navigate('Configuration');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
        <Feather name="x" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>Iniciar sesión</Text>
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
      <TouchableOpacity onPress={handleLogin}>
        <Text style={styles.registerText}>¿Has olvidado tu contraseña?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <Text style={styles.footerText}>¿No tienes una cuenta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.registerText}>Regístrate</Text>
        </TouchableOpacity>
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
    marginTop: -110,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginTop: 25,
    paddingHorizontal: 10,
    borderRadius: 4,
    marginBottom: 10,
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
    fontFamily: 'Figtree-SemiBold',
    fontSize: 14,
    marginLeft: 4,
    fontWeight: '200', 
  },
});

export default LoginScreen;
