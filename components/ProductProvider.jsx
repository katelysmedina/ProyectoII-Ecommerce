
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
    { id: 21, name: 'Blusa texturizada', category: 'Ropa', subCategory: 'Blusas', price: 499.00, image: 'url_de_imagen', color:'Negro' },
    { id: 22, name: 'Blusa estampada', category: 'Ropa', subCategory: 'Blusas', price: 399.00, image: 'url_de_imagen', color:'Beige/Diseño de leopardo' },
    { id: 23, name: 'Blusa con bordado inglés', category: 'Ropa', subCategory: 'Blusas', price: 399.00, image: 'url_de_imagen', color:'Crema' },
    { id: 23, name: 'Blusa con bordado inglés', category: 'Ropa', subCategory: 'Blusas', price: 399.00, image: 'url_de_imagen', color:'Blanco' },
    { id: 24, name: 'Bolso bandolera efecto piel', category: 'Bolsos', subCategory: '', price: 599.00, image: 'url_de_imagen', color:'Negro' },
    { id: 25, name: 'Bolso bandolera efecto piel', category: 'Bolsos', subCategory: '', price: 599.00, image: 'url_de_imagen', color:'Borgoña' },
    { id: 26, name: 'Bolso bandolera liso', category: 'Bolsos', subCategory: '', price: 699.00, image: 'url_de_imagen', color:'Borgoña' },
    { id: 27, name: 'Bolso crossbody', category: 'Bolsos', subCategory: '', price: 499.00, image: 'url_de_imagen', color:'Negro' },
    { id: 28, name: 'Bolso bandolera bucket', category: 'Bolsos', subCategory: '', price: 599.00, image: 'url_de_imagen', color:'Negro' },
    { id: 29, name: 'Bolso shopper efecto piel', category: 'Bolsos', subCategory: '', price: 699.00, image: 'url_de_imagen', color:'Negro' },
    { id: 30, name: 'Botas tacón ancho', category: 'Calzado', subCategory: 'Botas', price: 839.00, image: 'url_de_imagen', color:'Café oscuro' },
    { id: 31, name: 'Botas punta fina con tacón dorado', category: 'Calzado', subCategory: 'Botas', price: 969.00, image: 'url_de_imagen', color:'Negro' },
    { id: 32, name: 'Gabardina corta', category: 'Ropa', subCategory: 'Cazadoras y abrigos', price: 899.00, image: 'url_de_imagen', color:'Beige' },
    { id: 33, name: 'Parka oversized', category: 'Ropa', subCategory: 'Cazadoras y abrigos', price: 1099.00, image: 'url_de_imagen', color:'Negro' },
    { id: 34, name: 'Cazadora efecto piel', category: 'Ropa', subCategory: 'Cazadoras y abrigos', price: 1249.00, image: 'url_de_imagen', color:'Negro' },
    { id: 35, name: 'Cazadora cropped soft', category: 'Ropa', subCategory: 'Cazadoras y abrigos', price: 799.00, image: 'url_de_imagen', color:'Gris' },
    { id: 36, name: 'Chamarra con lana', category: 'Ropa', subCategory: 'Cazadoras y abrigos', price: 1699.00, image: 'url_de_imagen', color:'Negro jaspeado' },
    { id: 37, name: 'Chamarra cropped con cuello', category: 'Ropa', subCategory: 'Cazadoras y abrigos', price: 799.00, image: 'url_de_imagen', color:'Negro' },
    { id: 38, name: 'Falda línea A', category: 'Ropa', subCategory: 'Faldas', price: 449.00, image: 'url_de_imagen', color:'Negro' },
    { id: 39, name: 'Minifalda', category: 'Ropa', subCategory: 'Faldas', price: 449.00, image: 'url_de_imagen', color:'Café oscuro/Cuadros' },
    { id: 40, name: 'Falda midi circular', category: 'Ropa', subCategory: 'Faldas', price: 559.00, image: 'url_de_imagen', color:'Negro' },
    { id: 41, name: 'Falda maxi en satín', category: 'Ropa', subCategory: 'Faldas', price: 599.00, image: 'url_de_imagen', color:'Uva' },
    { id: 42, name: 'Falda maxi en satín', category: 'Ropa', subCategory: 'Faldas', price: 599.00, image: 'url_de_imagen', color:'Multicolor' },
    { id: 43, name: 'Minifalda plisada', category: 'Ropa', subCategory: 'Faldas', price: 499.00, image: 'url_de_imagen', color:'Gris' },
    { id: 44, name: 'Falda midi de denim', category: 'Ropa', subCategory: 'Faldas', price: 649.00, image: 'url_de_imagen', color:'Azul denim claro' },
    { id: 45, name: 'Minifalda efecto piel', category: 'Ropa', subCategory: 'Faldas', price: 599.00, image: 'url_de_imagen', color:'Negro' },
    { id: 46, name: 'Minifalda con abertura', category: 'Ropa', subCategory: 'Faldas', price: 449.00, image: 'url_de_imagen', color:'Negro' },  
    { id: 47, name: 'Jeans wide leg', category: 'Ropa', subCategory: 'Jeans', price: 799.00, image: 'url_de_imagen', color:'Azul denim' },
    { id: 48, name: 'Jeans wide leg', category: 'Ropa', subCategory: 'Jeans', price: 799.00, image: 'url_de_imagen', color:'Azul denim' },
    { id: 49, name: 'Jeans straight cropped', category: 'Ropa', subCategory: 'Jeans', price: 649.00, image: 'url_de_imagen', color:'Negro' },
    { id: 50, name: 'Barrel high jeans', category: 'Ropa', subCategory: 'Jeans', price: 499.00, image: 'url_de_imagen', color:'Negro' },
    { id: 51, name: 'Wide regular jeans', category: 'Ropa', subCategory: 'Jeans', price: 599.00, image: 'url_de_imagen', color:'Azul denim' },
    { id: 52, name: 'Wide regular jeans', category: 'Ropa', subCategory: 'Jeans', price: 599.00, image: 'url_de_imagen', color:'Negro' },
    { id: 53, name: 'Loafers de suela gruesa', category: 'Calzado', subCategory: 'Loafers', price: 699.00, image: 'url_de_imagen', color:'Negro' },
    { id: 54, name: 'Pantalón de vestir con pliegues', category: 'Ropa', subCategory: 'Pantalones', price: 999.00, image: 'url_de_imagen', color:'Gris' },
    { id: 55, name: 'Pantalón de vestir', category: 'Ropa', subCategory: 'Pantalones', price: 899.00, image: 'url_de_imagen', color:'Café claro' },
    { id: 56, name: 'Pantalón de vestir', category: 'Ropa', subCategory: 'Pantalones', price: 899.00, image: 'url_de_imagen', color:'Gris oscuro' },
    { id: 57, name: 'Pantalón de vestir acampanado', category: 'Ropa', subCategory: 'Pantalones', price: 699.00, image: 'url_de_imagen', color:'Negro' },
    { id: 58, name: 'Pantalón de vestir efecto piel', category: 'Ropa', subCategory: 'Pantalones', price: 999.00, image: 'url_de_imagen', color:'Negro' },
    { id: 59, name: 'Pantalón de vestir', category: 'Ropa', subCategory: 'Pantalones', price: 699.00, image: 'url_de_imagen', color:'Gris' },   
    { id: 60, name: 'Suéter cuello alto en tejido fino', category: 'Ropa', subCategory: 'Sueteres', price: 499.00, image: 'url_de_imagen', color:'Negro' },
    { id: 61, name: 'Suéter cuello alto', category: 'Ropa', subCategory: 'Sueteres', price: 599.00, image: 'url_de_imagen', color:'Verde' },
    { id: 62, name: 'Suéter cuello alto', category: 'Ropa', subCategory: 'Sueteres', price: 599.00, image: 'url_de_imagen', color:'Negro' },
    { id: 63, name: 'Suéter tejido cuello alto', category: 'Ropa', subCategory: 'Sueteres', price: 649.00, image: 'url_de_imagen', color:'Bronce' },
    { id: 64, name: 'Suéter con lazo en tejido fino', category: 'Ropa', subCategory: 'Sueteres', price: 549.00, image: 'url_de_imagen', color:'Rosa claro' },
    { id: 65, name: 'Top en tejido acanelado', category: 'Ropa', subCategory: 'Tops', price: 449.00, image: 'url_de_imagen', color:'Azul' },
    { id: 66, name: 'Top plisado', category: 'Ropa', subCategory: 'Tops', price: 499.00, image: 'url_de_imagen', color:'Negro' },
    { id: 67, name: 'Top plisado', category: 'Ropa', subCategory: 'Tops', price: 499.00, image: 'url_de_imagen', color:'Rosa claro' },
    { id: 68, name: 'Top drapeado', category: 'Ropa', subCategory: 'Tops', price: 399.00, image: 'url_de_imagen', color:'Verde' },
    { id: 69, name: 'Top drapeado', category: 'Ropa', subCategory: 'Tops', price: 399.00, image: 'url_de_imagen', color:'Negro' },
    { id: 70, name: 'Vestido maxi en satín', category: 'Ropa', subCategory: 'Vestidos', price: 949.00, image: 'url_de_imagen', color:'Azul' },
    { id: 71, name: 'Vestido mini blazer', category: 'Ropa', subCategory: 'Vestidos', price: 899.00, image: 'url_de_imagen', color:'Negro' },
    { id: 72, name: 'Vestido drapeado', category: 'Ropa', subCategory: 'Vestidos', price: 599.00, image: 'url_de_imagen', color:'Rosa' },
    { id: 73, name: 'Vestido drapeado', category: 'Ropa', subCategory: 'Vestidos', price: 599.00, image: 'url_de_imagen', color:'Azul' },
    { id: 74, name: 'Vestido maxi en satín', category: 'Ropa', subCategory: 'Vestidos', price: 999.00, image: 'url_de_imagen', color:'Multicolor' },
    { id: 75, name: 'Vestido midi tejido', category: 'Ropa', subCategory: 'Vestidos', price: 699.00, image: 'url_de_imagen', color:'Negro' },
    { id: 76, name: 'Vestido tejido con cinturón', category: 'Ropa', subCategory: 'Vestidos', price: 579.00, image: 'url_de_imagen', color:'Negro' },
    { id: 77, name: 'Vestido tejido con cinturón', category: 'Ropa', subCategory: 'Vestidos', price: 579.00, image: 'url_de_imagen', color:'Gris claro' },

    { id: 78, name: 'Zapatillas kitten destalonado', category: 'Calzado', subCategory: 'Zapatillas', price: 499.00, image: 'url_de_imagen', color:'Negro' },
    { id: 79, name: 'Mary Jane tacón ancho', category: 'Calzado', subCategory: 'Zapatillas', price: 559.00, image: 'url_de_imagen', color:'Negro' },

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
