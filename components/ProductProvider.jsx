import React, { createContext, useContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productsByCategory, setProductsByCategory] = useState({
    Ropa: {
      'Cazadoras y abrigos': [
        { id: 1, name: 'Abrigo con cinturón de lazo', category: 'Ropa', subcategory: 'Cazadoras y abrigos', price: 1199.00, image: [ require('../assets/img/ABR1_1.jpeg'), require('../assets/img/ABR1_2.jpeg'), require('../assets/img/ABR1_3.jpeg'), require('../assets/img/ABR1_4.jpeg'), require('../assets/img/ABR1_5.jpeg')  ], color: 'Negro', characteristics: ['Abrigo largo en tela tejida. Modelo con solapas de pico y botones de presión ocultos. Cinturón de lazo extraíble ancho en la cintura. Bolsillos laterales de ojal en la parte posterior.'], sizes: ['XCH', 'CH', 'M', 'G', 'XG'], },
        { id: 2, name: 'Abrigo con cinturón de lazo', category: 'Ropa', subcategory: 'Cazadoras y abrigos', price: 1199.00, image: [require('../assets/img/ABR2_1.jpeg'),], color: 'Café oscuro' },
        { id: 3, name: 'Abrigo largo en mezcla con lana', category: 'Ropa', subcategory: 'Cazadoras y abrigos', price: 1599.00, image: [require('../assets/img/ABR3_1.jpeg')], color: 'Beige' },
        { id: 4, name: 'Abrigo largo en mezcla con lana', category: 'Ropa', subcategory: 'Cazadoras y abrigos', price: 1599.00, image: [require('../assets/img/ABR4_1.jpeg')], color: 'Negro' },
        { id: 5, name: 'Abrigo midi soft', category: 'Ropa', subcategory: 'Cazadoras y abrigos', price: 1499.00, image: [require('../assets/img/ABR5_1.jpeg')], color: 'Beige' },
        { id: 6, name: 'Gabardina corta', category: 'Ropa', subcategory: 'Cazadoras y abrigos', price: 899.00, image: [require('../assets/img/CHA1_1.jpeg')], color:'Beige' },
        { id: 7, name: 'Parka oversized', category: 'Ropa', subcategory: 'Cazadoras y abrigos', price: 1099.00, image: [require('../assets/img/CHA2_1.jpeg')], color:'Negro' },
        { id: 8, name: 'Cazadora efecto piel', category: 'Ropa', subcategory: 'Cazadoras y abrigos', price: 1249.00, image: [require('../assets/img/CHA3_1.jpeg')], color:'Negro' },
        
      ],

    Blazers: [
    { id: 9, name: 'Blazer de lana con cinturón', category: 'Ropa', subcategory: 'Blazers', price: 899.00, image: [require('../assets/img/BLA1_1.jpeg')], color:'Gris'},
    { id: 10, name: 'Blazer oversized con botondura doble', category: 'Ropa', subcategory: 'Blazers', price: 899.00, image: [require('../assets/img/BLA2_1.jpeg')], color:'Beige'},
    { id: 11, name: 'Blazer de lana con botonadura sencilla', category: 'Ropa', subcategory: 'Blazers', price: 899.00, image: [require('../assets/img/BLA3_1.jpeg')], color:'Café/Cuadros'},
    { id: 12, name: 'Blazer de botonadura doble', category: 'Ropa', subcategory: 'Blazers', price: 699.00, image: [require('../assets/img/BLA4_1.jpeg')], color:'Negro'},
    { id: 13, name: 'Blazer oversized', category: 'Ropa', subcategory: 'Blazers', price: 599.00, image: [require('../assets/img/BLA5_1.jpeg')], color:'Negro'},
    ],

    Blusas: [
    { id: 14, name: 'Blusa con manga abombada', category: 'Ropa', subcategory: 'Blusas', price: 499.00, image: require('../assets/img/BLU1_1.jpeg'), color:'Negro' },
    { id: 15, name: 'Blusa de satín', category: 'Ropa', subcategory: 'Blusas', price: 559.00, image: require('../assets/img/BLU2_1.jpeg'), color:'Café oscuro' },
    { id: 16, name: 'Blusa con bordado inglés', category: 'Ropa', subcategory: 'Blusas', price: 499.00, image: require('../assets/img/BLU3_1.jpeg'), color:'Crema' },
    { id: 17, name: 'Blusa texturizada', category: 'Ropa', subcategory: 'Blusas', price: 499.00, image: require('../assets/img/BLU4_1.jpeg'), color:'Negro' },
    { id: 18, name: 'Blusa estampada', category: 'Ropa', subcategory: 'Blusas', price: 399.00, image: require('../assets/img/BLU5_1.jpeg'), color:'Beige/Diseño de leopardo' },
    { id: 19, name: 'Blusa con bordado inglés', category: 'Ropa', subcategory: 'Blusas', price: 399.00, image: require('../assets/img/BLU6_1.jpeg'), color:'Crema' },
    ],

    Faldas: [
    { id: 20, name: 'Falda línea A', category: 'Ropa', subcategory: 'Faldas', price: 449.00, image: require('../assets/img/FAL1_1.jpeg'), color:'Negro' },
    { id: 21, name: 'Falda midi circular', category: 'Ropa', subcategory: 'Faldas', price: 559.00, image: require('../assets/img/FAL3_1.jpeg'), color:'Negro' },
    { id: 22, name: 'Falda maxi en satín', category: 'Ropa', subcategory: 'Faldas', price: 599.00, image: require('../assets/img/FAL4_1.jpeg'), color:'Uva' },
    { id: 23, name: 'Falda maxi en satín', category: 'Ropa', subcategory: 'Faldas', price: 599.00, image: require('../assets/img/FAL5_1.jpeg'), color:'Multicolor' },
    { id: 24, name: 'Minifalda plisada', category: 'Ropa', subcategory: 'Faldas', price: 499.00, image: require('../assets/img/FAL6_1.jpeg'), color:'Gris' },
    { id: 25, name: 'Falda midi de denim', category: 'Ropa', subcategory: 'Faldas', price: 649.00, image: require('../assets/img/FAL7_1.jpeg'), color:'Azul denim claro' },
    ],

    Jeans: [
    { id: 26, name: 'Jeans wide leg', category: 'Ropa', subcategory: 'Jeans', price: 799.00, image: require('../assets/img/JEA1_1.jpeg'), color:'Azul denim' },
    { id: 27, name: 'Jeans wide leg', category: 'Ropa', subcategory: 'Jeans', price: 799.00, image: require('../assets/img/JEA2_1.jpeg'), color:'Azul denim' },
    { id: 28, name: 'Jeans straight cropped', category: 'Ropa', subcategory: 'Jeans', price: 649.00, image: require('../assets/img/JEA3_1.jpeg'), color:'Negro' },
    { id: 29, name: 'Barrel high jeans', category: 'Ropa', subcategory: 'Jeans', price: 499.00, image: require('../assets/img/JEA4_1.jpeg'), color:'Negro' },
    { id: 30, name: 'Wide regular jeans', category: 'Ropa', subcategory: 'Jeans', price: 599.00, image: require('../assets/img/JEA5_1.jpeg'), color:'Azul denim' },
    ],

    Pantalones: [
    { id: 31, name: 'Pantalón de vestir con pliegues', category: 'Ropa', subcategory: 'Pantalones', price: 999.00, image: require('../assets/img/PAN1_1.jpeg'), color:'Gris' },
    { id: 32, name: 'Pantalón de vestir', category: 'Ropa', subcategory: 'Pantalones', price: 899.00, image: require('../assets/img/PAN2_1.jpeg'), color:'Café claro' },
    { id: 33, name: 'Pantalón de vestir', category: 'Ropa', subcategory: 'Pantalones', price: 899.00, image: require('../assets/img/PAN3_1.jpeg'), color:'Gris oscuro' },
    { id: 34, name: 'Pantalón de vestir acampanado', category: 'Ropa', subcategory: 'Pantalones', price: 699.00, image: require('../assets/img/PAN4_1.jpeg'), color:'Negro' },
    { id: 35, name: 'Pantalón de vestir efecto piel', category: 'Ropa', subcategory: 'Pantalones', price: 999.00, image: require('../assets/img/PAN5_1.jpeg'), color:'Negro' },
    { id: 36, name: 'Pantalón de vestir', category: 'Ropa', subcategory: 'Pantalones', price: 699.00, image: require('../assets/img/PAN6_1.jpeg'), color:'Gris' },   
    ],

    Suéteres: [
    { id: 38, name: 'Suéter cuello alto', category: 'Ropa', subcategory: 'Suéteres', price: 599.00, image: require('../assets/img/SUE2_1.jpeg'), color:'Verde' },
    { id: 39, name: 'Suéter cuello alto', category: 'Ropa', subcategory: 'Suéteres', price: 599.00, image: require('../assets/img/SUE3_1.jpeg'), color:'Negro' },
    { id: 40, name: 'Suéter tejido cuello alto', category: 'Ropa', subcategory: 'Suéteres', price: 649.00, image: require('../assets/img/SUE4_1.jpeg'), color:'Bronce' },
    { id: 41, name: 'Suéter con lazo en tejido fino', category: 'Ropa', subcategory: 'Suéteres', price: 549.00, image: require('../assets/img/SUE5_1.jpeg'), color:'Rosa claro' },
    ],

    Tops: [
    { id: 42, name: 'Top en tejido acanelado', category: 'Ropa', subcategory: 'Tops', price: 449.00, image: require('../assets/img/TOP1_1.jpeg'), color:'Azul' },
    { id: 43, name: 'Top plisado', category: 'Ropa', subcategory: 'Tops', price: 499.00, image: require('../assets/img/TOP2_1.jpeg'), color:'Negro' },
    { id: 44, name: 'Top plisado', category: 'Ropa', subcategory: 'Tops', price: 499.00, image: require('../assets/img/TOP3_1.jpeg'), color:'Rosa claro' },
    { id: 45, name: 'Top drapeado', category: 'Ropa', subcategory: 'Tops', price: 399.00, image: require('../assets/img/TOP4_1.jpeg'), color:'Verde' },
    { id: 46, name: 'Top drapeado', category: 'Ropa', subcategory: 'Tops', price: 399.00, image: require('../assets/img/TOP5_1.jpeg'), color:'Negro' },
    ],

    Vestidos: [   
    { id: 47, name: 'Vestido maxi en satín', category: 'Ropa', subcategory: 'Vestidos', price: 949.00, image: require('../assets/img/VES1_1.jpeg'), color:'Azul' },
    { id: 48, name: 'Vestido mini blazer', category: 'Ropa', subcategory: 'Vestidos', price: 899.00, image: require('../assets/img/VES2_1.jpeg'), color:'Negro' },
    { id: 49, name: 'Vestido drapeado', category: 'Ropa', subcategory: 'Vestidos', price: 599.00, image: require('../assets/img/VES3_1.jpeg'), color:'Rosa' },
    { id: 50, name: 'Vestido drapeado', category: 'Ropa', subcategory: 'Vestidos', price: 599.00, image: require('../assets/img/VES4_1.jpeg'), color:'Azul' },
    { id: 51, name: 'Vestido maxi en satín', category: 'Ropa', subcategory: 'Vestidos', price: 999.00, image: require('../assets/img/VES5_1.jpeg'), color:'Multicolor' },
    { id: 52, name: 'Vestido midi tejido', category: 'Ropa', subcategory: 'Vestidos', price: 699.00, image: require('../assets/img/VES6_1.jpeg'), color:'Negro' },
    ],
    },
    Calzado: {
    Balerinas: [
    { id: 53, name: 'Balerinas Mary Jane', category: 'Calzado', subcategory: 'Balerinas', price: 599.00, image: require('../assets/img/BAL1_1.jpeg'), color:'Negro' },
    { id: 54, name: 'Balerinas Mary Jane', category: 'Calzado', subcategory: 'Balerinas', price: 599.00, image: require('../assets/img/BAL2_1.jpeg'), color:'Plateado' },
    { id: 55, name: 'Balerinas en malla', category: 'Calzado', subcategory: 'Balerinas', price: 799.00, image: require('../assets/img/BAL3_1.jpeg'), color:'Rojo' },
    ],

    Loafers: [
      { id: 56, name: 'Loafers de suela gruesa', category: 'Calzado', subcategory: 'Loafers', price: 699.00, image: require('../assets/img/LOA1_1.jpeg'), color:'Negro' },
    ],

    Botas: [
    { id: 57, name: 'Botas tacón ancho', category: 'Calzado', subcategory: 'Botas', price: 839.00, image: require('../assets/img/BOT1_1.jpeg'), color:'Café oscuro' },
    { id: 58, name: 'Botas punta fina con tacón dorado', category: 'Calzado', subcategory: 'Botas', price: 969.00, image: require('../assets/img/BOT2_1.jpeg'), color:'Negro' },
    ],

    Zapatillas: [
    { id: 59, name: 'Zapatillas kitten destalonado', category: 'Calzado', subcategory: 'Zapatillas', price: 499.00, image: require('../assets/img/ZAP1_1.jpeg'), color:'Negro' },
    { id: 60, name: 'Mary Jane tacón ancho', category: 'Calzado', subcategory: 'Zapatillas', price: 559.00, image: require('../assets/img/ZAP2_1.jpeg'), color:'Negro' },
    ],
  },
    Bolsos: [
    { id: 61, name: 'Bolso bandolera efecto piel', category: 'Bolsos', subcategory: '', price: 599.00, image: require('../assets/img/BOL1_3.jpeg'), color:'Negro' },
    { id: 62, name: 'Bolso bandolera efecto piel', category: 'Bolsos', subcategory: '', price: 599.00, image: require('../assets/img/BOL2_1.jpeg'), color:'Borgoña' },
    { id: 63, name: 'Bolso bandolera liso', category: 'Bolsos', subcategory: '', price: 699.00, image: require('../assets/img/BOL3_1.jpeg'), color:'Borgoña' },
    { id: 64, name: 'Bolso crossbody', category: 'Bolsos', subcategory: '', price: 499.00, image: require('../assets/img/BOL4_1.jpeg'), color:'Negro' },
    { id: 65, name: 'Bolso bandolera bucket', category: 'Bolsos', subcategory: '', price: 599.00, image: require('../assets/img/BOL5_1.jpeg'), color:'Negro' },
    { id: 66, name: 'Bolso shopper efecto piel', category: 'Bolsos', subcategory: '', price: 699.00, image: require('../assets/img/BOL6_1.jpeg'), color:'Negro' },    
    
  ],
});
const getProductsByCategoryAndSubcategory = (category, subcategory) => {
  if (!productsByCategory[category]) return []; 
  if (subcategory) {
    return productsByCategory[category][subcategory] || []; 
  }
  return Object.values(productsByCategory[category]).flat(); 
};

return (
  <ProductContext.Provider value={{ productsByCategory, setProductsByCategory, getProductsByCategoryAndSubcategory }}>
    {children}
  </ProductContext.Provider>
);
};


export const useProducts = () => {
return useContext(ProductContext);
};