import React, { createContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const MisComprasContext = createContext();

export const MisComprasProvider = ({ children }) => {
    const [misCompras, setItemsToMisCompras] = useState([]);
    const [datosDeEnvio, setDatosDeEnvio] = useState({});
    const [metodoDePago, setMetodoDePago] = useState('');
    const [notificaciones, setNotificaciones] = useState([]);
    const [primerPedido, setPrimerPedido] = useState(true);

    const agregarNotificacion = (mensaje, imagen) => {
        setNotificaciones(prev => [...prev, { mensaje, imagen }]);
    };

    const save = async (items, storageName) => {
        try {
            await AsyncStorage.setItem(storageName, JSON.stringify(items));
        } catch (error) {
            console.error(`Error al guardar las compras`, error);
        }
    };

    const addItemToMisCompras = ({ MiBolsa, informacionPago }) => {
        var date = new Date();        
        date.setDate(date.getDate() + 5);

        const updatedCompras = [...misCompras, {
            titulo: "Compra en transito",
            seguimientoEstadoId: 1,
            fecha: `Fecha de entrega estimada ${date.getDay()}/${date.getMonth() + 1}/${date.getFullYear()}`,
            datosEnvio: datosDeEnvio,
            informacionPago: {
                metodoDePago,
                informacionPago
            },
            compras: [...MiBolsa]
        }];
        
        setItemsToMisCompras(updatedCompras);
        save(updatedCompras, 'misCompras'); 


     
        if (primerPedido) {
            agregarNotificacion(`¡Gracias por realizar tu primer pedido!`, MiBolsa[0].image[0]);
            'verDetallesPrimerPedido'
            setPrimerPedido(false);

                }
        if (MiBolsa.length > 0) {
            agregarNotificacion(`Tu pedido está en tránsito`, MiBolsa[0].image[0]);
        }


    };

    const addDatosDeEnvio = (envio) => {
        setDatosDeEnvio(envio);
    };

    const addMetodoDePago = (pago) => {
        setMetodoDePago(pago);
    };

    return (
        <MisComprasContext.Provider value={{ 
            misCompras, 
            addItemToMisCompras, 
            addDatosDeEnvio, 
            addMetodoDePago, 
            agregarNotificacion, 
            notificaciones 
        }}>
            {children}
        </MisComprasContext.Provider>
    );
};
