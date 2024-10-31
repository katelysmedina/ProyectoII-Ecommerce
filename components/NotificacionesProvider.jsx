import React, { createContext, useState } from 'react';

export const NotificacionesContext = createContext();

export const NotificacionesProvider = ({ children }) => {
    const [notificaciones, setNotificaciones] = useState([]);


const agregarNotificacion = (mensaje, imagen) => {
    const nuevaNotificacion = {
        id: Date.now(),
        mensaje,
        imagen,
        action,

    };
    setNotificaciones((prev) => [...prev, nuevaNotificacion]);
    
};


    return (
        <NotificacionesContext.Provider value={{ notificaciones, agregarNotificacion }}>
            {children}
        </NotificacionesContext.Provider>
    );
};

