import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import NavBar from '../components/NavBar';

const ConfigurationScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
      </TouchableOpacity>
      <Text style={styles.title}>Hola</Text>
      <Text style={styles.subtitle}>usuario@dominio.com</Text>
      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('MisCompras')}>
        <View style={styles.iconContainer}>
          <Feather name="shopping-bag" size={16} color="#000" />
        </View>
        <Text style={styles.optionText}>Mis compras</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('DatosPersonales')}>
        <View style={styles.iconContainer}>
          <Feather name="user" size={16} color="#000" />
        </View>
        <Text style={styles.optionText}>Datos personales</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('DireccionesGuardadas')}>
        <View style={styles.iconContainer}>
          <Feather name="map-pin" size={16} color="#000" />
        </View>
        <Text style={styles.optionText}>Direcciones guardadas</Text>
      </TouchableOpacity>

      <View style={styles.divider} />

      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Ayuda')}>
        <Feather name="help-circle" size={16} color="#000" />
        <Text style={styles.optionText}>Ayuda</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('SobreOphelia')}>
        <Feather name="info" size={16} color="#000" />
        <Text style={styles.optionText}>Sobre OPHELIA</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Contacto')}>
        <Feather name="message-circle" size={16} color="#000" />
        <Text style={styles.optionText}>Contacto</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('CerrarSesion')}>
        <Feather name="log-out" size={16} color="#000" />
        <Text style={styles.optionText}>Cerrar sesión</Text>
      </TouchableOpacity>

      <View style={styles.row}>
        <TouchableOpacity style={styles.rowOption} onPress={() => navigation.navigate('TerminosCondiciones')}>
          <Text style={styles.optionText1}>Términos y condiciones</Text>
        </TouchableOpacity>
        <Text style={styles.separator}>•</Text>
        <TouchableOpacity style={styles.rowOption} onPress={() => navigation.navigate('PoliticaPrivacidad')}>
          <Text style={styles.optionText1}>Política de privacidad</Text>
        </TouchableOpacity>
        <Text style={styles.separator}>•</Text>
      </View>

      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('PoliticaSeguridad')}>
        <Text style={styles.optionText1}>Política de seguridad</Text>
      </TouchableOpacity>

      <NavBar navigation={navigation} activeScreen="Login" />
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
    marginBottom: 1,
    marginTop: 50,
  },
  subtitle: {
    marginBottom: 30,
    fontFamily: 'WorkSans-Regular',
    fontSize: 13,
    color: '#000'

  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  optionText: {
    fontFamily: 'WorkSans-Regular',
    fontSize: 16,
    marginLeft: 10,
  },
  optionText1: {
    fontFamily: 'WorkSans-Regular',
    fontSize: 13,
  },
  iconContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 15,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
    marginBottom: -6,
  },
  rowOption: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  separator: {
    marginHorizontal: 5,
    fontSize: 11,
    fontFamily: 'WorkSans-Regular',
  },
});

export default ConfigurationScreen;
