import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { MiBolsaContext } from './MiBolsaProvider';
import { MisComprasContext } from './MisComprasProvider'; 

const NavBar = ({ navigation, activeScreen }) => {
  const { MiBolsa } = useContext(MiBolsaContext);
  const { notificaciones } = useContext(MisComprasContext); 

  const totalOfItems = MiBolsa.reduce((acc, prev) => acc + prev.quantity, 0);
  const notificationCount = notificaciones.length; 

  return (
    <View style={styles.tabBar}>
      <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate('Home')}>
        <Feather name="home" size={18} color={activeScreen === 'Home' ? '#000' : '#555'} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate('NotificacionesScreen')}>
        {notificationCount > 0 && ( 
          <View style={styles.counter1}>
          </View>
        )}
        <Feather name="bell" size={18} color={activeScreen === 'NotificacionesScreen' ? '#000' : '#555'} />
        
        
        
      </TouchableOpacity>

      <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate('Menu')}>
        <View style={styles.menuContainer}>
          <Text style={styles.menuText}>MENÚ</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate('MiBolsa')}>
        {totalOfItems > 0 && ( 
          <View style={styles.counter}>
            <Text style={styles.counterText}>{totalOfItems}</Text>
          </View>
        )}
        <Feather name="shopping-bag" size={18} color={activeScreen === 'MiBolsa' ? '#000' : '#555'} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate('Login')}>
        <Feather name="user" size={18} color={activeScreen === 'Login' ? '#000' : '#555'} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    tabBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 18,
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 12,
        left: 18,
        right: 18,
        borderRadius: 15,
        shadowColor: '#d1d1d1',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3.5,
    },
    tab: {
        alignItems: 'center',
        padding: 5,
    },
    counter: {
        position: 'absolute',
        top: -4,
        right: -4,
        borderColor: 'black',
        backgroundColor: 'black',
        borderWidth: 1.5,
        borderRadius: 12,
        width: 14,
        height: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    counter1: {
      position: 'absolute',
      top: 4,
      right: 4,
      backgroundColor: 'red',
      borderRadius: 12,
      width: 9,
      height: 9,
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1,
      
  },
    counterText: {
        fontSize: 8,
        fontWeight: 'bold',
        color: '#fff',
    },
    menuContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    menuText: {
        fontSize: 13,
        color: '#666',
    },
});

export default NavBar;
