import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

const NotificacionesConfiguracion = () => {
  
  const [emailNotifs, setEmailNotifs] = useState(true);
  const [appNotifs, setAppNotifs] = useState(true);
  const [smsNotifs, setSmsNotifs] = useState(false);

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
                <Feather name="chevron-left" size={20} color="black" />
            </TouchableOpacity>
      <Text style={styles.title}>Configuración</Text>
      
      <View style={styles.option}>
        <Text style={styles.optionText}>Notificaciones por correo electrónico</Text>
        <Switch
          value={emailNotifs}
          onValueChange={value => setEmailNotifs(value)}
        />
      </View>

      <View style={styles.option}>
        <Text style={styles.optionText}>Notificaciones en la aplicación</Text>
        <Switch
          value={appNotifs}
          onValueChange={value => setAppNotifs(value)}
        />
      </View>

      <View style={styles.option}>
        <Text style={styles.optionText}>Notificaciones por SMS</Text>
        <Switch
          value={smsNotifs}
          onValueChange={value => setSmsNotifs(value)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
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
        marginBottom: 35,
        marginTop: 80,
    },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  optionText: {
    fontSize: 15,
  },
});

export default NotificacionesConfiguracion;
