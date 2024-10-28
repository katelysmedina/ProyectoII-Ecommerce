import React, { createContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const MisComprasContext = createContext();

export const MisComprasProvider = ({ children }) => {
    const [misCompras, setItemsToMisCompras] = useState([]);

    const save = async (items, storageName) =>{
        try {
            await AsyncStorage.setItem(storageName, JSON.stringify(items));
        } catch (error) {
            console.error(`Error al guardar las compras`, error);
        }
    }

    const addItemToMisCompras = (items) => {
        var date = new Date();        
        date.setDate(date.getDate() + 3);

        const updatedCompras = [...misCompras, {
            titulo: "Compra en transito",
            seguimientoEstadoId: 1,
            fecha: `Fecha de entrega estimada ${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`,
            compras: [...items]
        }];
        setItemsToMisCompras(updatedCompras);
        save(updatedCompras, 'misCompras'); 
    }

    
return (
  <MisComprasContext.Provider value={{ misCompras, addItemToMisCompras }}>
    {children}
  </MisComprasContext.Provider>
);
};