import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';
import Header from './components/Header';
import 'react-native-gesture-handler';
import { RootSiblingParent } from 'react-native-root-siblings';

import RopaMenuScreen from './screens/RopaMenuScreen';
import CalzadoMenuScreen from './screens/CalzadoMenuScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ConfigurationScreen from './screens/ConfigurationScreen';
import MisComprasScreen from './screens/MisComprasScreen';
import DatosPersonalesScreen from './screens/DatosPersonalesScreen';
import DireccionesGuardadasScreen from './screens/DireccionesGuardadasScreen';
import ProductList from './components/ProductList'; 
import CatalogoScreen from './screens/CatalogoScreen'; 
import ProductDetail from './components/ProductDetail';
import MiBolsaScreen from './screens/MiBolsaScreen';
import MetodosDeEnvio from './components/MetodosDeEnvio';
import MetodosDePago from './screens/MetodoDePago';
import PagoConTarjetaScreen from './screens/PagoConTarjetaScreen';
import GiftcardScreen from './screens/GiftcardScreen';
import PantallaConfirmacionScreen from './screens/PantallaConfirmacionScreen';
import DireccionesPago from './screens/DireccionesPago';
import SeguimientoCompraScreen from './screens/SeguimientoCompraScreen';

import { ProductProvider } from './components/ProductProvider'; 
import { MiBolsaProvider } from './components/MiBolsaProvider';
import { MisComprasProvider } from './components/MisComprasProvider'; 

const Stack = createNativeStackNavigator();

const fetchFonts = () => {
  return Font.loadAsync({
    "Figtree": require('./assets/fonts/Figtree-Regular.ttf'),
    "Figtree-Medium": require('./assets/fonts/Figtree-Medium.ttf'),
    "Figtree-SemiBold": require('./assets/fonts/Figtree-SemiBold.ttf'),
    "Figtree-Bold": require('./assets/fonts/Figtree-Bold.ttf'),
    "WorkSans": require('./assets/fonts/WorkSans-Regular.ttf'),
    "WorkSans-Medium": require('./assets/fonts/WorkSans-Medium.ttf'),
    "WorkSans-SemiBold": require('./assets/fonts/WorkSans-SemiBold.ttf'),
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
    <RootSiblingParent>
      <MisComprasProvider>
        <ProductProvider>
          <MiBolsaProvider>
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
                  options={{ headerShown: false }} 
                />
                <Stack.Screen 
                  name="CalzadoMenuScreen" 
                  component={CalzadoMenuScreen} 
                  options={{ headerShown: false }} 
                />
                <Stack.Screen 
                  name="Catalogo"    
                  component={CatalogoScreen} 
                  options={{ headerShown: false }}  
                />
                <Stack.Screen 
                  name="Login" 
                  component={LoginScreen} 
                  options={{ headerShown: false }} 
                />
                <Stack.Screen 
                  name="Register" 
                  component={RegisterScreen} 
                  options={{ headerShown: false }} 
                />
                <Stack.Screen 
                  name="Configuration" 
                  component={ConfigurationScreen} 
                  options={{ headerShown: false }} 
                />
                <Stack.Screen 
                  name="MisCompras" 
                  component={MisComprasScreen} 
                  options={{ headerShown: false }} 
                />
                <Stack.Screen 
                  name="DatosPersonales" 
                  component={DatosPersonalesScreen} 
                  options={{ headerShown: false }} 
                />
                <Stack.Screen 
                  name="DireccionesGuardadas" 
                  component={DireccionesGuardadasScreen} 
                  options={{ headerShown: false }} 
                />
                <Stack.Screen 
                  name="ProductList" 
                  component={ProductList} 
                  options={{ headerShown: false }} 
                />

                <Stack.Screen 
                  name="ProductDetail" 
                  component={ProductDetail} 
                  options={{ headerShown: false }} 
                />

                <Stack.Screen
                  name="MiBolsa"
                  component={MiBolsaScreen}
                  options={{ headerShown: false }}
                />

                <Stack.Screen
                  name="MetodosDeEnvio"
                  component={MetodosDeEnvio}
                  options={{ headerShown: false }}
                />

                <Stack.Screen
                  name="MetodosDePago"
                  component={MetodosDePago}
                  options={{ headerShown: false }}
                />

                <Stack.Screen 
                  name="PagoConTarjeta" 
                  component={PagoConTarjetaScreen}
                  options={{ headerShown: false }} 
                />

                
                <Stack.Screen 
                  name="GiftcardScreen" 
                  component={GiftcardScreen}
                  options={{ headerShown: false }} 
                />

                <Stack.Screen 
                  name="PantallaConfirmacionScreen" 
                  component={PantallaConfirmacionScreen}
                  options={{ headerShown: false }} 
                />

                <Stack.Screen 
                  name="DireccionesPago" 
                  component={DireccionesPago}
                  options={{ headerShown: false }} 
                />

                <Stack.Screen 
                  name="SeguimientoCompra" 
                  component={SeguimientoCompraScreen}
                  options={{ headerShown: false }} 
                />
              </Stack.Navigator>
            </NavigationContainer>
          </MiBolsaProvider>
        </ProductProvider>
      </MisComprasProvider>
    </RootSiblingParent>
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
