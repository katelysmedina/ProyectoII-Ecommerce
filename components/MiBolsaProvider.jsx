import React, { createContext, useContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const MiBolsaContext = createContext();

export const MiBolsaProvider = ({ children }) => {
    const [MiBolsa, setProductToMiBolsa] = useState([]);

    const save = async (items) =>{
        try {
            await AsyncStorage.setItem('MiBolsa', JSON.stringify(items));
        } catch (error) {
            console.error(`Error al guardar el producto en la bolsa`, error);
        }
    }

    const addItemToMiBolsa = (product) => {
        let existItem = MiBolsa.findIndex((element) =>  element.id === product.id &&
                                                        element.selectedSize === product.selectedSize)
        let updatedMiBolsa;

        if(existItem !== -1){
            updatedMiBolsa = MiBolsa.map((item, index) => 
                index === existItem ? {...item, quantity: item.quantity + 1} : item)
        }else{
            updatedMiBolsa = [...MiBolsa, {...product, quantity: 1}];
        }
        setProductToMiBolsa(updatedMiBolsa);
        save(updatedMiBolsa);
    }

    const eliminarProductoFromMiBolsa = (product) => {
        let existedItem = MiBolsa.findIndex((element) => element.id === product.id &&
                                                        element.selectedSize === product.selectedSize)
        
        let updatedMiBolsa = [...MiBolsa]
        if(existedItem != -1){
            if(updatedMiBolsa[existedItem].quantity > 1){
                updatedMiBolsa[existedItem].quantity = updatedMiBolsa[existedItem].quantity - 1;
            }
            else{
                updatedMiBolsa.splice(existedItem, 1);    
            }
        }
        setProductToMiBolsa(updatedMiBolsa);
        save(updatedMiBolsa);
    }
    const vaciarBolsa = async () => {
        setProductToMiBolsa([]);
        try {
            await AsyncStorage.removeItem('MiBolsa');
        } catch (error) {
            console.error('Error al vaciar la bolsa', error);
        }
    };
    
return (
  <MiBolsaContext.Provider value={{ MiBolsa, addItemToMiBolsa, eliminarProductoFromMiBolsa, vaciarBolsa }}>
    {children}
  </MiBolsaContext.Provider>
);
};


export const useProducts = () => {
return useContext(ProductContext);
};