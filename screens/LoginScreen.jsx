import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text, TouchableOpacity, Alert, Linking } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';  
import NavBar from '../components/NavBar';

const LoginScreen = ({ navigation }) => { 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
    navigation.navigate('Configuration');
  };

  const handleGoogleLogin = () => {
    
    console.log('Redirigiendo al inicio de sesión de Google');
    Linking.openURL('https://accounts.google.com/signin') 
      .catch(err => console.error("No se pudo abrir la URL: ", err));
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

      <View style={styles.socialContainer}>
        <View style={styles.dividerContainer}>
          <View style={styles.divider}></View>
          <Text style={styles.dividerText}>O</Text>
          <View style={styles.divider}></View>
        </View>

        <TouchableOpacity style={styles.socialButton} onPress={handleGoogleLogin}>
          <Ionicons name="logo-google" size={13} color="black" style={styles.socialIcon} />
          <Text style={styles.socialButtonText}> Continuar con Google</Text>
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
    marginTop: 10,
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
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    textTransform: 'uppercase',
    fontFamily: 'Figtree-Bold',
  },
  socialContainer: {
    marginVertical: 20,
  },
  dividerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    flex: 1,
  },
  dividerText: {
    fontFamily: 'Figtree-Regular',
    fontSize: 13,
    color: '#000',
    marginHorizontal: 10,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    justifyContent: 'center',
    backgroundColor: '#000000',
    marginTop: 20,
    
  },
  socialIcon: {  
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '10%',
    alignItems: 'center',
    color: '#fff',
  
  },
  socialButtonText: {
    color: '#fff',
    fontSize: 15,
    textTransform: 'uppercase',
    fontFamily: 'Figtree-Bold',
    textAlign: 'center',
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

