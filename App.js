import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';
import Header from './components/Header';
import 'react-native-gesture-handler';
import RopaMenuScreen from './screens/RopaMenuScreen';
import CalzadoMenuScreen from './screens/CalzadoMenuScreen';



const Stack = createNativeStackNavigator();

const fetchFonts = () => {
  return Font.loadAsync({
    'Montserrat': require('./assets/fonts/Montserrat-Regular.ttf'),
    "MontserratBold": require('./assets/fonts/Montserrat-Bold.ttf'),
    "MontserratSemiBold": require('./assets/fonts/Montserrat-SemiBold.ttf'),
  });
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      await fetchFonts();
      setFontsLoaded(true);
      setIsLoading(false); 
    };

    loadData();
  }, []);

  if (isLoading || !fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <Image source={require('./assets/img/logo.png')} style={styles.logo} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ 
            header: () => <Header />, 
            animationEnabled: false
          }} 
        />
        <Stack.Screen 
          name="Menu" 
          component={MenuScreen} 
          options={{ 
            header: () => <Header />, 
            animationEnabled: false 
          }} 
        />
        <Stack.Screen 
          name="RopaMenuScreen" 
          component={RopaMenuScreen} 
          options={{ header: () => <Header /> }} 
        />
        <Stack.Screen 
          name="CalzadoMenuScreen" 
          component={CalzadoMenuScreen} 
          options={{ header: () => <Header /> }} 
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export default App;
