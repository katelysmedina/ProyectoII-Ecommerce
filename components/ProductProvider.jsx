
import React, { createContext, useContext } from 'react';
import { color } from 'react-native-reanimated';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const products = [
    { id: 1, name: 'Abrigo con cinturón de lazo', category: 'Ropa', subCategory: 'Cazadoras y abrigos', price: 1199.00, image: 'url_de_imagen', color: 'Negro' },
    { id: 2, name: 'Abrigo con cinturón de lazo', category: 'Ropa', subCategory: 'Cazadoras y abrigos', price: 1199.00, image: 'url_de_imagen', color: 'Café oscuro' },
    { id: 3, name: 'Abrigo largo en mezcla con lana', category: 'Ropa', subCategory: 'Cazadoras y abrigos', price: 1699.00, image: 'url_de_imagen', color: 'Beige' },
    { id: 4, name: 'Abrigo largo en mezcla con lana', category: 'Ropa', subCategory: 'Cazadoras y abrigos', price: 1699.00, image: 'url_de_imagen', color: 'Negro' },
    { id: 5, name: 'Abrigo midi soft', category: 'Ropa', subCategory: 'Cazadoras y abrigos', price: 1499.00, image: 'url_de_imagen', color: 'Beige' },
    { id: 6, name: 'Abrigo midi soft', category: 'Ropa', subCategory: 'Cazadoras y abrigos', price: 1499.00, image: 'url_de_imagen', color: 'Negro' },
    { id: 7, name: 'Abrigo peacot corto', category: 'Ropa', subCategory: 'Cazadoras y abrigos', price: 1099.00, image: 'url_de_imagen', color: 'Beige' },
    { id: 8, name: 'Abrigo maxi con cinturón de lazo', category: 'Ropa', subCategory: 'Cazadoras y abrigos', price: 1999.00, image: 'url_de_imagen', color: 'Beige' },
    { id: 9, name: 'Balerinas Mary Jane', category: 'Calzado', subCategory: 'Balerinas', price: 599.00, image: 'url_de_imagen', color:'Negro' },
    { id: 10, name: 'Balerinas Mary Jane', category: 'Calzado', subCategory: 'Balerinas', price: 599.00, image: 'url_de_imagen', color:'Plateado' },
    { id: 11, name: 'Balerinas en malla', category: 'Calzado', subCategory: 'Balerinas', price: 799.00, image: 'url_de_imagen', color:'Rojo' },
    { id: 12, name: 'Blazer de lana con cinturón', category: 'Ropa', subCategory: 'Blazers', price: 899.00, image: 'url_de_imagen', color:'Gris'},
    { id: 13, name: 'Blazer oversized con botondura doble', category: 'Ropa', subCategory: 'Blazers', price: 899.00, image: 'url_de_imagen', color:'Beige'},
    { id: 14, name: 'Blazer de lana con botonadura sencilla', category: 'Ropa', subCategory: 'Blazers', price: 899.00, image: 'url_de_imagen', color:'Café/Cuadros'},
    { id: 15, name: 'Blazer de botonadura doble', category: 'Ropa', subCategory: 'Blazers', price: 699.00, image: 'url_de_imagen', color:'Negro'},
    { id: 16, name: 'Blazer oversized', category: 'Ropa', subCategory: 'Blazers', price: 599.00, image: 'url_de_imagen', color:'Negro'},
    { id: 17, name: 'Blazer con lazo', category: 'Ropa', subCategory: 'Blazers', price: 599.00, image: 'url_de_imagen', color:'Café claro'},
    { id: 18, name: 'Blusa con manga abombada', category: 'Ropa', subCategory: 'Blusas', price: 499.00, image: 'url_de_imagen', color:'Negro' },
    { id: 19, name: 'Blusa de satín', category: 'Ropa', subCategory: 'Blusas', price: 559.00, image: 'url_de_imagen', color:'Café oscuro' },
    { id: 20, name: 'Blusa con bordado inglés', category: 'Ropa', subCategory: 'Blusas', price: 499.00, image: 'url_de_imagen', color:'Crema' },
    { id: 21, name: 'Blusa con textura', category: 'Ropa', subCategory: 'Blusas', price: 499.00, image: 'url_de_imagen', color:'Negro' },
    { id: 22, name: 'Blusa estampada', category: 'Ropa', subCategory: 'Blusas', price: 399.00, image: 'url_de_imagen', color:'Beige/Diseño de leopardo' },
    { id: 23, name: 'Blusa con bordado inglés', category: 'Ropa', subCategory: 'Blusas', price: 399.00, image: 'url_de_imagen', color:'Crema' },
    { id: 23, name: 'Blusa con bordado inglés', category: 'Ropa', subCategory: 'Blusas', price: 399.00, image: 'url_de_imagen', color:'Blanco' },
    { id: 24, name: 'Bolso bandolera efecto piel', category: 'Bolsos', subCategory: '', price: 599.00, image: 'url_de_imagen', color:'Negro' },
    { id: 25, name: 'Bolso bandolera efecto piel', category: 'Bolsos', subCategory: '', price: 599.00, image: 'url_de_imagen', color:'Borgoña' },
    { id: 26, name: 'Bolso bandolera liso', category: 'Bolsos', subCategory: '', price: 699.00, image: 'url_de_imagen', color:'Borgoña' },
    { id: 27, name: 'Bolso crossbody', category: 'Bolsos', subCategory: '', price: 499.00, image: 'url_de_imagen', color:'Negro' },
    { id: 28, name: 'Bolso bandolera bucket', category: 'Bolsos', subCategory: '', price: 599.00, image: 'url_de_imagen', color:'Negro' },
    { id: 29, name: 'Bolso shopper efecto piel', category: 'Bolsos', subCategory: '', price: 699.00, image: 'url_de_imagen', color:'Negro' },
    
    { id: 30, name: 'Botas', category: 'Calzado', subCategory: 'Botas', price: 699.00, image: 'url_de_imagen', color:'Café oscuro' },
    { id: 31, name: 'Botas', category: 'Calzado', subCategory: 'Botas', price: 699.00, image: 'url_de_imagen', color:'Negro' },

    { id: 32, name: 'Botas', category: 'Ropa', subCategory: 'Cazadoras y abrigos', price: 699.00, image: 'url_de_imagen', color:'Negro' },
    { id: 33, name: 'Botas', category: 'Ropa', subCategory: 'Cazadoras y abrigos', price: 699.00, image: 'url_de_imagen', color:'Negro' },
    { id: 34, name: 'Botas', category: 'Ropa', subCategory: 'Cazadoras y abrigos', price: 699.00, image: 'url_de_imagen', color:'Negro' },
    { id: 35, name: 'Botas', category: 'Ropa', subCategory: 'Cazadoras y abrigos', price: 699.00, image: 'url_de_imagen', color:'Negro' },
    { id: 36, name: 'Botas', category: 'Ropa', subCategory: 'Cazadoras y abrigos', price: 699.00, image: 'url_de_imagen', color:'Negro' },
    { id: 37, name: 'Botas', category: 'Ropa', subCategory: 'Cazadoras y abrigos', price: 699.00, image: 'url_de_imagen', color:'Negro' },
    { id: 38, name: 'Botas', category: 'Ropa', subCategory: 'Cazadoras y abrigos', price: 699.00, image: 'url_de_imagen', color:'Negro' },
    { id: 39, name: 'Botas', category: 'Ropa', subCategory: 'Cazadoras y abrigos', price: 699.00, image: 'url_de_imagen', color:'Negro' },
    { id: 40, name: 'Botas', category: 'Ropa', subCategory: 'Cazadoras y abrigos', price: 699.00, image: 'url_de_imagen', color:'Negro' },

    { id: 41, name: 'Botas', category: 'Ropa', subCategory: 'Faldas', price: 699.00, image: 'url_de_imagen', color:'Negro' },
    { id: 42, name: 'Botas', category: 'Ropa', subCategory: 'Faldas', price: 699.00, image: 'url_de_imagen', color:'Negro' },
    { id: 43, name: 'Botas', category: 'Ropa', subCategory: 'Faldas', price: 699.00, image: 'url_de_imagen', color:'Negro' },
    { id: 44, name: 'Botas', category: 'Ropa', subCategory: 'Faldas', price: 699.00, image: 'url_de_imagen', color:'Negro' },
    { id: 45, name: 'Botas', category: 'Ropa', subCategory: 'Faldas', price: 699.00, image: 'url_de_imagen', color:'Negro' },
    { id: 46, name: 'Botas', category: 'Ropa', subCategory: 'Faldas', price: 699.00, image: 'url_de_imagen', color:'Negro' },
    { id: 47, name: 'Botas', category: 'Ropa', subCategory: 'Faldas', price: 699.00, image: 'url_de_imagen', color:'Negro' },
    { id: 48, name: 'Botas', category: 'Ropa', subCategory: 'Faldas', price: 699.00, image: 'url_de_imagen', color:'Negro' },
    { id: 49, name: 'Botas', category: 'Ropa', subCategory: 'Faldas', price: 699.00, image: 'url_de_imagen', color:'Negro' },
    { id: 50, name: 'Botas', category: 'Ropa', subCategory: 'Faldas', price: 699.00, image: 'url_de_imagen', color:'Negro' },

    { id: 40, name: 'Botas', category: 'Ropa', subCategory: 'Pantalones', price: 699.00, image: 'url_de_imagen', color:'Negro' },
    { id: 40, name: 'Botas', category: 'Ropa', subCategory: 'Pantalones', price: 699.00, image: 'url_de_imagen', color:'Negro' },
    { id: 40, name: 'Botas', category: 'Ropa', subCategory: 'Pantalones', price: 699.00, image: 'url_de_imagen', color:'Negro' },
    { id: 40, name: 'Botas', category: 'Ropa', subCategory: 'Pantalones', price: 699.00, image: 'url_de_imagen', color:'Negro' },
    { id: 40, name: 'Botas', category: 'Ropa', subCategory: 'Pantalones', price: 699.00, image: 'url_de_imagen', color:'Negro' },
    { id: 40, name: 'Botas', category: 'Ropa', subCategory: 'Pantalones', price: 699.00, image: 'url_de_imagen', color:'Negro' },
    { id: 40, name: 'Botas', category: 'Ropa', subCategory: 'Pantalones', price: 699.00, image: 'url_de_imagen', color:'Negro' },
    { id: 40, name: 'Botas', category: 'Ropa', subCategory: 'Pantalones', price: 699.00, image: 'url_de_imagen', color:'Negro' },
    { id: 40, name: 'Botas', category: 'Ropa', subCategory: 'Pantalones', price: 699.00, image: 'url_de_imagen', color:'Negro' },

    { id: 40, name: 'Botas', category: 'Ropa', subCategory: 'Sueteres', price: 699.00, image: 'url_de_imagen', color:'Negro' },
    { id: 40, name: 'Botas', category: 'Ropa', subCategory: 'Sueteres', price: 699.00, image: 'url_de_imagen', color:'Negro' },
    { id: 40, name: 'Botas', category: 'Ropa', subCategory: 'Sueteres', price: 699.00, image: 'url_de_imagen', color:'Negro' },
    { id: 40, name: 'Botas', category: 'Ropa', subCategory: 'Sueteres', price: 699.00, image: 'url_de_imagen', color:'Negro' },
    { id: 40, name: 'Botas', category: 'Ropa', subCategory: 'Sueteres', price: 699.00, image: 'url_de_imagen', color:'Negro' },
    { id: 40, name: 'Botas', category: 'Ropa', subCategory: 'Sueteres', price: 699.00, image: 'url_de_imagen', color:'Negro' },
    { id: 40, name: 'Botas', category: 'Ropa', subCategory: 'Sueteres', price: 699.00, image: 'url_de_imagen', color:'Negro' },

    { id: 40, name: 'Botas', category: 'Ropa', subCategory: 'Tops', price: 699.00, image: 'url_de_imagen', color:'Negro' },
    { id: 40, name: 'Botas', category: 'Ropa', subCategory: 'Tops', price: 699.00, image: 'url_de_imagen', color:'Negro' },
    { id: 40, name: 'Botas', category: 'Ropa', subCategory: 'Tops', price: 699.00, image: 'url_de_imagen', color:'Negro' },
    { id: 40, name: 'Botas', category: 'Ropa', subCategory: 'Tops', price: 699.00, image: 'url_de_imagen', color:'Negro' },
    { id: 40, name: 'Botas', category: 'Ropa', subCategory: 'Tops', price: 699.00, image: 'url_de_imagen', color:'Negro' },
    { id: 40, name: 'Botas', category: 'Ropa', subCategory: 'Tops', price: 699.00, image: 'url_de_imagen', color:'Negro' },

    { id: 40, name: 'Botas', category: 'Ropa', subCategory: 'Vestidos', price: 699.00, image: 'url_de_imagen', color:'Negro' },
    { id: 40, name: 'Botas', category: 'Ropa', subCategory: 'Vestidos', price: 699.00, image: 'url_de_imagen', color:'Negro' },
    { id: 40, name: 'Botas', category: 'Ropa', subCategory: 'Vestidos', price: 699.00, image: 'url_de_imagen', color:'Negro' },
    { id: 40, name: 'Botas', category: 'Ropa', subCategory: 'Vestidos', price: 699.00, image: 'url_de_imagen', color:'Negro' },
    { id: 40, name: 'Botas', category: 'Ropa', subCategory: 'Vestidos', price: 699.00, image: 'url_de_imagen', color:'Negro' },
    { id: 40, name: 'Botas', category: 'Ropa', subCategory: 'Vestidos', price: 699.00, image: 'url_de_imagen', color:'Negro' },
    { id: 40, name: 'Botas', category: 'Ropa', subCategory: 'Vestidos', price: 699.00, image: 'url_de_imagen', color:'Negro' },
    { id: 40, name: 'Botas', category: 'Ropa', subCategory: 'Vestidos', price: 699.00, image: 'url_de_imagen', color:'Negro' },

    { id: 40, name: 'Botas', category: 'Calzado', subCategory: 'Zapatillas', price: 699.00, image: 'url_de_imagen', color:'Negro' },
    { id: 40, name: 'Botas', category: 'Calzado', subCategory: 'Zapatillas', price: 699.00, image: 'url_de_imagen', color:'Negro' },

  ];

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  return useContext(ProductContext);
};
