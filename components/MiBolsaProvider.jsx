import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const MiBolsaContext = createContext();

export const MiBolsaProvider = ({ children }) => {
    const [MiBolsa, setProductToMiBolsa] = useState([]);

    useEffect(() => {
        const loadMiBolsa = async () => {
            try {
                const storedBolsa = await AsyncStorage.getItem('miBolsa');
                if (storedBolsa) {
                    setProductToMiBolsa(JSON.parse(storedBolsa));
                }
            } catch (error) {
                console.error('Error al cargar la bolsa', error);
            }
        };
        loadMiBolsa();
    }, []);

    const save = async (items, storageName) => {
        try {
            await AsyncStorage.setItem(storageName, JSON.stringify(items));
        } catch (error) {
            console.error(`Error al guardar el producto en la bolsa`, error);
        }
    };

    const addItemToMiBolsa = async (product) => {
        let existItem = MiBolsa.findIndex((element) => 
            element.id === product.id && element.selectedSize === product.selectedSize
        );
        let updatedMiBolsa;

        if (existItem !== -1) {
            updatedMiBolsa = MiBolsa.map((item, index) =>
                index === existItem ? { ...item, quantity: item.quantity + 1 } : item
            );
        } else {
            updatedMiBolsa = [...MiBolsa, { ...product, quantity: 1 }];
        }
        setProductToMiBolsa(updatedMiBolsa);
        await save(updatedMiBolsa, 'miBolsa');  // Asegúrate de que el nombre sea correcto
    };

    const eliminarProductoFromMiBolsa = async (product) => {
        let existedItem = MiBolsa.findIndex((element) => 
            element.id === product.id && element.selectedSize === product.selectedSize
        );
        
        let updatedMiBolsa = [...MiBolsa];
        if (existedItem !== -1) {
            if (updatedMiBolsa[existedItem].quantity > 1) {
                updatedMiBolsa[existedItem].quantity -= 1;
            } else {
                updatedMiBolsa.splice(existedItem, 1);
            }
        }
        setProductToMiBolsa(updatedMiBolsa);
        await save(updatedMiBolsa, 'miBolsa'); // Asegúrate de que el nombre sea correcto
    };

    const vaciarBolsa = async () => {
        setProductToMiBolsa([]);
        try {
            await AsyncStorage.removeItem('miBolsa');
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
