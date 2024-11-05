import React, { createContext, useContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productsByCategory, setProductsByCategory] = useState({
    Ropa: {
      'Cazadoras y abrigos': [
        { id: 1, name: 'Abrigo con cinturón de lazo', category: 'Ropa', subcategory: 'Cazadoras y abrigos', price: 1199.00, image: [ require('../assets/img/ABR1_1.jpeg'), require('../assets/img/ABR1_2.jpeg'), require('../assets/img/ABR1_3.jpeg'), require('../assets/img/ABR1_4.jpeg'), require('../assets/img/ABR1_5.jpeg')  ], color: 'Negro', characteristics: ['Abrigo largo en tela tejida. Modelo con solapas de pico y botones de presión ocultos. Cinturón de lazo extraíble ancho en la cintura. Bolsillos laterales de ojal en la parte posterior.'], sizes: ['XCH', 'CH', 'M', 'G', 'XG'], favorito: false},
        { id: 2, name: 'Abrigo con cinturón de lazo', category: 'Ropa', subcategory: 'Cazadoras y abrigos', price: 1199.00, image: [require('../assets/img/ABR2_1.jpeg'), require('../assets/img/ABR2_2.jpeg'), require('../assets/img/ABR2_3.jpeg'), require('../assets/img/ABR2_4.jpeg'), require('../assets/img/ABR2_5.jpeg')], color: 'Café oscuro', characteristics: ['Abrigo largo en tela tejida. Modelo con solapas de pico y botones de presión ocultos. Cinturón de lazo extraíble ancho en la cintura. Bolsillos laterales de ojal en la parte posterior.'], sizes: ['XCH', 'CH', 'M', 'G', 'XG'], favorito: false},
        { id: 3, name: 'Abrigo largo en mezcla con lana', category: 'Ropa', subcategory: 'Cazadoras y abrigos', price: 1599.00, image: [require('../assets/img/ABR3_1.jpeg'), require('../assets/img/ABR3_2.jpeg'), require('../assets/img/ABR3_3.jpeg'), require('../assets/img/ABR3_4.jpeg'), require('../assets/img/ABR3_5.jpeg')], color: 'Beige', characteristics: ['Abrigo largo en mezcla con lana. Modelo con solapas de pico y botones. Bolsillos de solapa en el frente.'], sizes: ['XCH', 'CH', 'M', 'G', 'XG'] , favorito: false },
        { id: 4, name: 'Abrigo largo en mezcla con lana', category: 'Ropa', subcategory: 'Cazadoras y abrigos', price: 1599.00, image: [require('../assets/img/ABR4_1.jpeg'), require('../assets/img/ABR4_2.jpeg'), require('../assets/img/ABR4_3.jpeg'), require('../assets/img/ABR4_4.jpeg'), require('../assets/img/ABR4_5.jpeg')], color: 'Negro', characteristics: ['Abrigo largo en mezcla con lana. Modelo con solapas de pico y botones. Bolsillos de solapa en el frente.'], sizes: ['XCH', 'CH', 'M', 'G', 'XG'], favorito: false},  
        { id: 5, name: 'Parka oversized', category: 'Ropa', subcategory: 'Cazadoras y abrigos', price: 1099.00, image: [require('../assets/img/CHA1_1.jpeg'), require('../assets/img/CHA1_2.jpeg'), require('../assets/img/CHA1_3.jpeg'), require('../assets/img/CHA1_4.jpeg'), require('../assets/img/CHA1_5.jpeg')], color:'Negro', characteristics: ['Parka oversized en sarga de algodón. Cuello de cisne, zíper y solapa de viento con botones de presión ocultos al frente. Cordón de ajuste en la cintura y bolsillos al frente.'], sizes: ['XCH', 'CH', 'M', 'G', 'XG'], favorito: false},
        { id: 6, name: 'Chamarra efecto piel', category: 'Ropa', subcategory: 'Cazadoras y abrigos', price: 1249.00, image: [require('../assets/img/CHA2_1.jpeg'), require('../assets/img/CHA2_2.jpeg'), require('../assets/img/CHA2_3.jpeg'), require('../assets/img/CHA2_4.jpeg'), require('../assets/img/CHA2_5.jpeg')], color:'Negro', characteristics: ['Chamarra efecto piel de corte amplio. Cuello cisne con trabilla y botón de presión. Zíper al frente y oculto. Bolsillos de sobre al frente.'], sizes: ['XCH', 'CH', 'M', 'G', 'XG'], favorito: false}, 
      ],

    Blazers: [
        { id: 7, name: 'Blazer de lana con cinturón', category: 'Ropa', subcategory: 'Blazers', price: 899.00, image: [require('../assets/img/BLA1_1.jpeg'), require('../assets/img/BLA1_2.jpeg'), require('../assets/img/BLA1_3.jpeg')], color:'Gris', characteristics: ['Blazer de botonadura sencilla en lana. Corte amplio y cinturón de lazo extraíble a la cintura. Bolsillos frontales discretos. Forrado.'], sizes: ['XCH', 'CH', 'M', 'G', 'XG'], favorito: false},
        { id: 8, name: 'Blazer oversized con botondura doble', category: 'Ropa', subcategory: 'Blazers', price: 899.00, image: [require('../assets/img/BLA2_1.jpeg'), require('../assets/img/BLA2_2.jpeg'), require('../assets/img/BLA2_3.jpeg'), require('../assets/img/BLA2_4.jpeg') ], color:'Beige', characteristics: ['Blazer oversized de botonadura doble. Corte amplio con hombreras. Bolsillos frontales discretos. Forrado. '], sizes: ['XCH', 'CH', 'M', 'G', 'XG'], favorito: false },
        { id: 9, name: 'Blazer de lana con botonadura sencilla', category: 'Ropa', subcategory: 'Blazers', price: 899.00, image: [require('../assets/img/BLA3_1.jpeg'), require('../assets/img/BLA3_2.jpeg'), require('../assets/img/BLA3_3.jpeg'), require('../assets/img/BLA3_4.jpeg') ], color:'Café/Cuadros', characteristics: ['Blazer de botonadura sencilla en lana. Corte ajustado con pinzas. Bolsillos frontales de solapa. Forrado.'], sizes: ['XCH', 'CH', 'M', 'G', 'XG'], favorito: false},
        { id: 10, name: 'Blazer de botonadura doble', category: 'Ropa', subcategory: 'Blazers', price: 699.00, image: [require('../assets/img/BLA4_1.jpeg'), require('../assets/img/BLA4_2.jpeg'), require('../assets/img/BLA4_3.jpeg'), require('../assets/img/BLA4_4.jpeg')], color:'Negro', characteristics: ['Blazer de botonadura sencilla cruzada. Corte ajustado con pinzas. Bolsillos frontales de solapa. Forrado.'], sizes: ['XCH', 'CH', 'M', 'G', 'XG'], favorito: false},
    
    ],

    Blusas: [
        { id: 11, name: 'Blusa con manga abombada', category: 'Ropa', subcategory: 'Blusas', price: 499.00, image: [require('../assets/img/BLU1_1.jpeg'), require('../assets/img/BLU1_2.jpeg'), require('../assets/img/BLU1_3.jpeg'), require('../assets/img/BLU1_4.jpeg')], color:'Negro', characteristics: ['Blusa en popelina fresca de algodón. Modelo entallado con mangas abombadas y bordado inglés. Elástico estrecho en los hombros y puños.'], sizes: ['XCH', 'CH', 'M', 'G', 'XG'], favorito: false},
        { id: 12, name: 'Blusa de satín', category: 'Ropa', subcategory: 'Blusas', price: 559.00, image: [require('../assets/img/BLU2_1.jpeg'), require('../assets/img/BLU2_2.jpeg'), require('../assets/img/BLU2_3.jpeg'), require('../assets/img/BLU2_4.jpeg')], color:'Café oscuro', characteristics: ['Blusa en satín. Modelo de cuello redondo con detalle plisado. Abertura con botón forrado en la parte posterior. Mangas largas voluminosas.'], sizes: ['XCH', 'CH', 'M', 'G', 'XG'], favorito: false},
        { id: 13, name: 'Blusa con bordado inglés', category: 'Ropa', subcategory: 'Blusas', price: 499.00, image: [require('../assets/img/BLU3_1.jpeg'), require('../assets/img/BLU3_2.jpeg'), require('../assets/img/BLU3_3.jpeg'), require('../assets/img/BLU3_4.jpeg')], color:'Crema', characteristics: ['Blusa en tejido vaporoso de algodón. Modelo con cuello cuadrado y bordado inglés. Mangas voluminosas largas.'], sizes: ['XCH', 'CH', 'M', 'G', 'XG'], favorito: false},
        { id: 14, name: 'Blusa texturizada', category: 'Ropa', subcategory: 'Blusas', price: 499.00, image: [require('../assets/img/BLU4_1.jpeg'), require('../assets/img/BLU4_2.jpeg'), require('../assets/img/BLU4_3.jpeg'), require('../assets/img/BLU4_4.jpeg')], color:'Negro', characteristics: ['Blusa texturizada. Modelo de cuello redonda con manga larga amplia. Abertura con botón forrado en la parte posterior.'], sizes: ['XCH', 'CH', 'M', 'G', 'XG'], favorito: false},

    ],

    Faldas: [
        { id: 15, name: 'Minifalda línea A', category: 'Ropa', subcategory: 'Faldas', price: 449.00, image: [require('../assets/img/FAL1_1.jpeg'), require('../assets/img/FAL1_2.jpeg'), require('../assets/img/FAL1_3.jpeg'), require('../assets/img/FAL1_4.jpeg')], color:'Negro', characteristics: ['Minifalda entallada en punto grueso. Silueta línea A con talle alto y elástico oculto en la cintura. Pinzas en la parte posterior y bolsillos visibles frontales. '], sizes: ['XCH', 'CH', 'M', 'G', 'XG'], favorito: false },
        { id: 16, name: 'Minifalda plisada', category: 'Ropa', subcategory: 'Faldas', price: 499.00, image: [require('../assets/img/FAL2_1.jpeg'), require('../assets/img/FAL2_2.jpeg'), require('../assets/img/FAL2_3.jpeg'), require('../assets/img/FAL2_4.jpeg'), ], color:'Gris', characteristics: ['Ninifalda plisada en tela tejida. Modelo de corte amplio con silueta en línea A. Talle alto con cierre de zíper y gancho oculto en un lateral.'], sizes: ['XCH', 'CH', 'M', 'G', 'XG'], favorito: false},
        { id: 17, name: 'Falda midi de denim', category: 'Ropa', subcategory: 'Faldas', price: 649.00, image: [require('../assets/img/FAL3_1.jpeg'), require('../assets/img/FAL3_2.jpeg'), require('../assets/img/FAL3_3.jpeg'), require('../assets/img/FAL3_4.jpeg'), ], color:'Azul denim claro', characteristics: ['Falda en denim grueso de algodón. Modelo largo en tela rígida que se suaviza con el uso. Talle estñandar con cierre de zíper y botón. Abertura pronunciada en la parte posterior.'], sizes: ['XCH', 'CH', 'M', 'G', 'XG'], favorito: false},
        { id: 18, name: 'Falda maxi en satín', category: 'Ropa', subcategory: 'Faldas', price: 599.00, image: [require('../assets/img/FAL4_1.jpeg'), require('../assets/img/FAL4_2.jpeg'), require('../assets/img/FAL4_3.jpeg')], color:'Uva', characteristics: ['Falda larga en satín. Modelo con elástico oculto en la cintura y falda con ligero vuelo.'], sizes: ['XCH', 'CH', 'M', 'G', 'XG'] },
    
    ],

    Jeans: [
        { id: 19, name: 'Jeans wide leg', category: 'Ropa', subcategory: 'Jeans', price: 799.00, image: [require('../assets/img/JEA1_1.jpeg'), require('../assets/img/JEA1_2.jpeg'), require('../assets/img/JEA1_3.jpeg')], color:'Azul denim', characteristics: ['Jeans de cinco bolsillos en denim. Modelo en tela rígida que se suaviza con el uso. Piernas amplias de talle alto con cierre de zíper y botón. Largo estándar.'], sizes: ['XCH', 'CH', 'M', 'G', 'XG'], favorito: false},
        { id: 20, name: 'Jeans wide leg', category: 'Ropa', subcategory: 'Jeans', price: 799.00, image: [require('../assets/img/JEA2_1.jpeg'), require('../assets/img/JEA2_2.jpeg'), require('../assets/img/JEA2_3.jpeg')], color:'Azul denim', characteristics: ['Jeans de cinco bolsillos en denim. Modelo en tela rígida que se suaviza con el uso. Piernas amplias de talle alto con cierre de zíper y botón. Largo estándar.'], sizes: ['XCH', 'CH', 'M', 'G', 'XG'], favorito: false},
        { id: 21, name: 'Jeans straight cropped', category: 'Ropa', subcategory: 'Jeans', price: 649.00, image: [require('../assets/img/JEA3_1.jpeg'), require('../assets/img/JEA3_2.jpeg'), require('../assets/img/JEA3_3.jpeg')], color:'Negro', characteristics: ['Jeans de cinco bolsillos en denim. Modelo en tela rígida que se suaviza con el uso. Piernas amplias de talle alto con cierre de zíper y botón. Diseño corto para mostrar el tobillo.'], sizes: ['XCH', 'CH', 'M', 'G', 'XG'], favorito: false},
        { id: 22, name: 'Wide regular jeans', category: 'Ropa', subcategory: 'Jeans', price: 599.00, image: [require('../assets/img/JEA4_1.jpeg'), require('../assets/img/JEA4_2.jpeg'), require('../assets/img/JEA4_3.jpeg')], color:'Azul denim', characteristics: ['Jeans de cinco bolsillos en denim con cinturón extraíble. Piernas amplias con detalle de línea de talle alto con cierre de zíper y botón. Largo estándar.'], sizes: ['XCH', 'CH', 'M', 'G', 'XG'], favorito: false},
    ],

    Pantalones: [
        { id: 23, name: 'Pantalón de vestir con pliegues', category: 'Ropa', subcategory: 'Pantalones', price: 999.00, image: [require('../assets/img/PAN1_1.jpeg'), require('../assets/img/PAN1_2.jpeg'), require('../assets/img/PAN1_3.jpeg'), require('../assets/img/PAN1_4.jpeg') ], color:'Gris', characteristics: ['Pantalón de corte amplio en tela tejida. Modelo de talle alto con cierre de zíper, botón oculto y gancho. Piernas anchas de corte recto con pliegues al frente.'], sizes: ['XCH', 'CH', 'M', 'G', 'XG'], favorito: false},
        { id: 24, name: 'Pantalón de vestir', category: 'Ropa', subcategory: 'Pantalones', price: 899.00, image: [require('../assets/img/PAN2_1.jpeg'), require('../assets/img/PAN2_2.jpeg'), require('../assets/img/PAN2_3.jpeg'), require('../assets/img/PAN2_4.jpeg') ], color:'Café claro', characteristics: ['Pantalón de corte amplio en tela tejida. Modelo de talle alto con cierre de zíper, botón oculto y gancho. Piernas anchas de corte recto con pliegues al frente.'], sizes: ['XCH', 'CH', 'M', 'G', 'XG'], favorito: false},
        { id: 25, name: 'Pantalón de vestir', category: 'Ropa', subcategory: 'Pantalones', price: 899.00, image: [require('../assets/img/PAN3_1.jpeg'), require('../assets/img/PAN3_2.jpeg'), require('../assets/img/PAN3_3.jpeg') ], color:'Gris oscuro', characteristics: ['Pantalón de corte amplio en tela tejida. Modelo de talle alto con cierre de zíper, botón oculto y gancho. Piernas anchas de corte recto con pliegues al frente.'], sizes: ['XCH', 'CH', 'M', 'G', 'XG'], favorito: false},
        { id: 26, name: 'Pantalón de vestir efecto piel', category: 'Ropa', subcategory: 'Pantalones', price: 999.00, image: [require('../assets/img/PAN4_1.jpeg'), require('../assets/img/PAN4_2.jpeg'), require('../assets/img/PAN4_3.jpeg')], color:'Negro', characteristics: ['Pantalón de corte amplio efecto piel. Modelo de talle alto con cierre de zíper y botón. Piernas anchas de corte recto con bolsillos laterales y traseros.'], sizes: ['XCH', 'CH', 'M', 'G', 'XG'], favorito: false},

    ],

    Suéteres: [
        { id: 27, name: 'Suéter tejido cuello alto', category: 'Ropa', subcategory: 'Suéteres', price: 649.00, image: [require('../assets/img/SUE1_1.jpeg'), require('../assets/img/SUE1_2.jpeg'), require('../assets/img/SUE1_3.jpeg'), require('../assets/img/SUE1_4.jpeg') ], color:'Bronce', characteristics: ['Suéter de corte amplio en tejido acanelado. Modelo de cuello alto con hombros caídos y abertura en cuello posterior.'], sizes: ['XCH', 'CH', 'M', 'G', 'XG'], favorito: false},
        { id: 28, name: 'Suéter cuello alto', category: 'Ropa', subcategory: 'Suéteres', price: 599.00, image: [require('../assets/img/SUE2_1.jpeg'), require('../assets/img/SUE2_2.jpeg'), require('../assets/img/SUE2_3.jpeg'), require('../assets/img/SUE2_4.jpeg') ], color:'Verde', characteristics: ['Suéter en tejido suave y fino. Modelo de corte amplio con cuello alto y hombros caídos. Borde acanelado en cuello, puños y bastilla.'], sizes: ['XCH', 'CH', 'M', 'G', 'XG'], favorito: false},
        { id: 29, name: 'Suéter cuello alto', category: 'Ropa', subcategory: 'Suéteres', price: 599.00, image: [require('../assets/img/SUE3_1.jpeg'), require('../assets/img/SUE3_2.jpeg'), require('../assets/img/SUE3_3.jpeg'), require('../assets/img/SUE3_4.jpeg') ], color:'Negro', characteristics: ['Suéter en tejido suave y fino. Modelo de corte amplio con cuello alto y hombros caídos. Borde acanelado en cuello, puños y bastilla.'], sizes: ['XCH', 'CH', 'M', 'G', 'XG'], favorito: false},
        
    ],

    Tops: [
        { id: 30, name: 'Top en tejido acanelado', category: 'Ropa', subcategory: 'Tops', price: 449.00, image: [require('../assets/img/TOP1_1.jpeg'), require('../assets/img/TOP1_2.jpeg'), require('../assets/img/TOP1_3.jpeg'), require('../assets/img/TOP1_4.jpeg') ], color:'Azul', characteristics: ['Top ajustado en tejido acanelado. Manga larga con abertura pronunciado en la parte frontal lateral.'], sizes: ['XCH', 'CH', 'M', 'G', 'XG'], favorito: false},
        { id: 31, name: 'Top plisado', category: 'Ropa', subcategory: 'Tops', price: 499.00, image: [require('../assets/img/TOP2_1.jpeg'), require('../assets/img/TOP2_1.jpeg'), require('../assets/img/TOP2_3.jpeg'), require('../assets/img/TOP2_4.jpeg') ], color:'Negro', characteristics: ['Top estilo plisado en corte amplio. Modelo con mangas extralargas y cuello de barco.'], sizes: ['XCH', 'CH', 'M', 'G', 'XG'], favorito: false},
        { id: 32, name: 'Top drapeado', category: 'Ropa', subcategory: 'Tops', price: 399.00, image: [require('../assets/img/TOP3_1.jpeg'), require('../assets/img/TOP3_2.jpeg'), require('../assets/img/TOP3_3.jpeg'), require('../assets/img/TOP3_4.jpeg') ], color:'Negro', characteristics: ['Top entallado en stretch. Modelo con cuello cisne corto y mangas extralargas. Diseño fruncido en un hombro y en un lateral que crea un efecto drapeado.'], sizes: ['XCH', 'CH', 'M', 'G', 'XG'], favorito: false},
        { id: 33, name: 'Top drapeado', category: 'Ropa', subcategory: 'Tops', price: 399.00, image: [require('../assets/img/TOP4_1.jpeg'), require('../assets/img/TOP4_2.jpeg'), require('../assets/img/TOP4_3.jpeg'), require('../assets/img/TOP4_4.jpeg') ], color:'Verde', characteristics: ['Top entallado en stretch. Modelo con cuello cisne corto y mangas extralargas. Diseño fruncido en un hombro y en un lateral que crea un efecto drapeado.'], sizes: ['XCH', 'CH', 'M', 'G', 'XG'], favorito: false},
  
    ],

    Vestidos: [   
        { id: 34, name: 'Vestido maxi en satín', category: 'Ropa', subcategory: 'Vestidos', price: 949.00, image: [require('../assets/img/VES1_1.jpeg'), require('../assets/img/VES1_2.jpeg'), require('../assets/img/VES1_3.jpeg') ], color:'Azul', characteristics: ['Vestido maxi en satín. Modelo de cuello redondo con mangas largas. Espalda descubierta y con lazo estrecho superior. Falda con ligero vuelo y abertura pronunciada. '], sizes: ['XCH', 'CH', 'M', 'G', 'XG'], favorito: false},
        { id: 35, name: 'Vestido mini blazer', category: 'Ropa', subcategory: 'Vestidos', price: 899.00, image: [require('../assets/img/VES2_1.jpeg'), require('../assets/img/VES2_2.jpeg'), require('../assets/img/VES2_3.jpeg'), require('../assets/img/VES2_4.jpeg') ], color:'Negro', characteristics: ['Vestido blazer de botonadura sencilla en tela tejida. Modelo corto con solapas de pico. Mangas largas con hombreras y bolsillos con solapa al frente. Cintúron decorativo en la parte posterior.'], sizes: ['XCH', 'CH', 'M', 'G', 'XG'], favorito: false},
        { id: 36, name: 'Vestido drapeado', category: 'Ropa', subcategory: 'Vestidos', price: 599.00, image: [require('../assets/img/VES3_1.jpeg'), require('../assets/img/VES3_2.jpeg'), require('../assets/img/VES3_3.jpeg'), require('../assets/img/VES3_4.jpeg') ], color:'Rosa', characteristics: ['Vestido midi en mesh. Modelo con cuello de ojal y mangas japonesas. Diseño plisado en un hombro y en un lateral de la cintura para un efecto drapeado.'], sizes: ['XCH', 'CH', 'M', 'G', 'XG'], favorito: false},
        { id: 37, name: 'Vestido drapeado', category: 'Ropa', subcategory: 'Vestidos', price: 599.00, image: [require('../assets/img/VES4_1.jpeg'), require('../assets/img/VES4_2.jpeg'), require('../assets/img/VES4_3.jpeg'), require('../assets/img/VES4_4.jpeg')], color:'Azul', characteristics: ['Vestido midi en mesh. Modelo con cuello de ojal y mangas japonesas. Diseño plisado en un hombro y en un lateral de la cintura para un efecto drapeado.'], sizes: ['XCH', 'CH', 'M', 'G', 'XG'], favorito: false},
    ],
    },
    Calzado: {
    Balerinas: [
        { id: 38, name: 'Balerinas Mary Jane', category: 'Calzado', subcategory: 'Balerinas', price: 599.00, image: [require('../assets/img/BAL1_1.jpeg'), require('../assets/img/BAL1_2.jpeg'), require('../assets/img/BAL1_3.jpeg')], color:'Negro', characteristics: ['Balerinas con diseño Mary Jane. Modelo con frente cuadrado y correa gruesa con hebilla de metal.'], sizes: ['XCH', 'CH', 'M', 'G', 'XG'], favorito: false},
        { id: 39, name: 'Balerinas Mary Jane', category: 'Calzado', subcategory: 'Balerinas', price: 599.00, image: [require('../assets/img/BAL2_1.jpeg'), require('../assets/img/BAL2_2.jpeg'), require('../assets/img/BAL2_3.jpeg')], color:'Plateado', characteristics: ['Balerinas con diseño Mary Jane. Modelo con frente cuadrado y correa gruesa con hebilla de metal.'], sizes: ['XCH', 'CH', 'M', 'G', 'XG'], favorito: false},
        { id: 40, name: 'Balerinas en malla', category: 'Calzado', subcategory: 'Balerinas', price: 799.00, image: [require('../assets/img/BAL3_1.jpeg'), require('../assets/img/BAL3_2.jpeg'), require('../assets/img/BAL3_3.jpeg'), ], color:'Rojo', characteristics: ['Balerinas Mary Jane en malla y tela revestida con un acabado metálico brillante. Punta cincelada y doble correa estrella con hebilla de metal.'], sizes: ['XCH', 'CH', 'M', 'G', 'XG'], favorito: false},
    ],

    Loafers: [
      { id: 41, name: 'Loafers de suela gruesa', category: 'Calzado', subcategory: 'Loafers', price: 699.00, image: [require('../assets/img/LOA1_1.jpeg'), require('../assets/img/LOA1_2.jpeg') ], color:'Negro', characteristics: ['Mocasines con trabilla decorativa al frente. Forro de satín. Altura de las suelas de 4 cm.'], sizes: ['XCH', 'CH', 'M', 'G', 'XG'], favorito: false},
    ],

    Botas: [
      { id: 42, name: 'Botas tacón ancho', category: 'Calzado', subcategory: 'Botas', price: 839.00, image: [require('../assets/img/BOT1_1.jpeg'), require('../assets/img/BOT1_2.jpeg'), require('../assets/img/BOT1_3.jpeg') ], color:'Café oscuro', characteristics: ['Botas de tela afieltrada con frente cuadrado. Tacón cuadrado de 4 cm. Forro de punto y plantillas de piel.'], sizes: ['XCH', 'CH', 'M', 'G', 'XG'], favorito: false},
      { id: 43, name: 'Botas punta fina con tacón dorado', category: 'Calzado', subcategory: 'Botas', price: 969.00, image: [require('../assets/img/BOT2_1.jpeg'), require('../assets/img/BOT2_2.jpeg'), require('../assets/img/BOT2_3.jpeg')], color:'Negro', characteristics: ['Botas de piel con frente en punta y tacón con detalle. Forro y plantillas de punto.'], sizes: ['XCH', 'CH', 'M', 'G', 'XG'], favorito: false},
    ],

    Zapatillas: [
      { id: 44, name: 'Zapatillas kitten destalonado', category: 'Calzado', subcategory: 'Zapatillas', price: 499.00, image: [require('../assets/img/ZAP1_1.jpeg'), require('../assets/img/ZAP1_2.jpeg') ], color:'Negro', characteristics: ['Zapatillas de piel. Modelo con frente en punta y correa cruzada y en el tobillo. Tacón fino de 5 cm.'], sizes: ['XCH', 'CH', 'M', 'G', 'XG'], favorito: false},
      { id: 45, name: 'Mary Jane tacón ancho', category: 'Calzado', subcategory: 'Zapatillas', price: 559.00, image: [require('../assets/img/ZAP2_1.jpeg'), require('../assets/img/ZAP2_2.jpeg')], color:'Negro', characteristics: ['Mary Janes en piel. Frente cuadradi y tacón de bloque forrado. Corres ajustables con hebillas de metal. Plantillas de piel.'], sizes: ['XCH', 'CH', 'M', 'G', 'XG'], favorito: false },
    ],
  },
    Bolsos: [
      { id: 46, name: 'Bolso bandolera efecto piel', category: 'Bolsos', subcategory: '', price: 599.00, image: [require('../assets/img/BOL1_1.jpeg'), require('../assets/img/BOL1_2.jpeg'), require('../assets/img/BOL1_3.jpeg'), ], color:'Borgoña', characteristics: ['Bolso bandolera efecto piel. Modelo con zíper superior y un compartimiento interior con zíper. Correa ajustable. Forrado.'], sizes: ['XCH', 'CH', 'M', 'G', 'XG'], favorito: false},
      { id: 47, name: 'Bolso bandolera bucket', category: 'Bolsos', subcategory: '', price: 599.00, image: [require('../assets/img/BOL2_1.jpeg'), require('../assets/img/BOL2_2.jpeg')], color:'Negro', characteristics: ['Bolso bucket efecto piel. Asa ajustable con hebillas en los laterales. Cierre oculto magnético. Forrado.'], sizes: ['XCH', 'CH', 'M', 'G', 'XG'], favorito: false},
      { id: 48, name: 'Bolso bandolera liso', category: 'Bolsos', subcategory: '', price: 699.00, image: [require('../assets/img/BOL3_1.jpeg'), require('../assets/img/BOL3_2.jpeg')], color:'Borgoña', characteristics: ['Bolso bandolera efecto piel. Modelo con solapa y cierre magnético oculto. Un compartimiento interior con zíper y correa ajustable. Forrado. '], sizes: ['XCH', 'CH', 'M', 'G', 'XG'], favorito: false},
      { id: 49, name: 'Bolso crossbody', category: 'Bolsos', subcategory: '', price: 499.00, image: [require('../assets/img/BOL4_1.jpeg'), require('../assets/img/BOL4_2.jpeg') ], color:'Negro', characteristics: ['Bolso crossbody efecto piel. Modelo con zíper superior y correa ajustable con hebillas de metal. Forrado.'], sizes: ['XCH', 'CH', 'M', 'G', 'XG'], favorito: false},
  ],
});

const getProductsByCategoryAndSubcategory = (category, subcategory) => {
  if (!productsByCategory[category]) return []; 
  if (subcategory) {
    return productsByCategory[category][subcategory] || []; 
  }


  return Object.values(productsByCategory[category]).flat(); 
};

const toggleFavorito = (id) => {
  setProductsByCategory(prevProducts => {
    const updatedProducts = { ...prevProducts };

    for (const category in updatedProducts) {
      const items = updatedProducts[category];
      
      if (Array.isArray(items)) {
        const productIndex = items.findIndex(product => product.id === id);
        
        if (productIndex !== -1) {
          items[productIndex].favorito = !items[productIndex].favorito;
          return updatedProducts;
        }
      } else {
        for (const subcategory in items) {
          const productIndex = items[subcategory].findIndex(product => product.id === id);
          
          if (productIndex !== -1) {
            items[subcategory][productIndex].favorito = !items[subcategory][productIndex].favorito;
            return updatedProducts;
          }
        }
      }
    }

    return prevProducts;
  });
};

const getFavoriteProducts = () => {
  return Object.values(productsByCategory)
    .flatMap(category => {
      if (Array.isArray(category)) {
        return category; 
      } else {
        return Object.values(category).flat();
      }
    })
    .filter(product => product.favorito);
};



return (
  <ProductContext.Provider value={{ productsByCategory, setProductsByCategory, getProductsByCategoryAndSubcategory, toggleFavorito, getFavoriteProducts }}>
    {children}
  </ProductContext.Provider>
);
};


export const useProducts = () => {
return useContext(ProductContext);
};