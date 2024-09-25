import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Image 
        source={require('../assets/img/logo.png')} 
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'absolute', 
    top: -8, 
    left: '50%', 
    transform: [{ translateX: -50 }],
  },
  logo: {
    width: 100, 
    height: 100,
    resizeMode: 'contain',
    

  },
});

export default Header;
