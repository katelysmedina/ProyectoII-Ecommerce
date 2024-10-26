import React, { useContext, useState } from 'react';
import {
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  FlatList,
  Dimensions,
  Modal, 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; 
import NavBar from './NavBar';
import { MiBolsaContext } from './MiBolsaProvider';
import Toast from 'react-native-root-toast';


const { width } = Dimensions.get('window');

const ProductDetail = ({ route }) => {
  const navigation = useNavigation();
  const { product } = route.params;

  const [selectedSize, setSelectedSize] = useState(null);
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false); 
  const [isShippingVisible, setIsShippingVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false); 


  const { addItemToMiBolsa } = useContext(MiBolsaContext);

  const reviews = [
    {
      id: 1,
      user: 'Adela Aguilar',
      comment: 'Me encantó, ¡lo quiero en más colores!',
      rating: 5,
    },
    {
      id: 2,
      user: 'Alice Martínez',
      comment: 'Buena relación calidad-precio.',
      rating: 5,
    },
    {
      id: 3,
      user: 'Bianca Monroy',
      comment: 'Súper bonito, me encantó la calidad.',
      rating: 5,
    },
    
  ];

  const addProduct = (product) => {
    Toast.show('Producto añadido a tu carrito', {
      duration: Toast.durations.SHORT,
    });
    addItemToMiBolsa({...product, selectedSize: selectedSize})
  }

  const handleSizePress = (size) => {
    setSelectedSize(size);
  };

  const toggleDescription = () => {
    setIsDescriptionVisible(!isDescriptionVisible); 
  };

  const toggleShipping = () => {
    setIsShippingVisible(!isShippingVisible); 
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        {/* Botón de regreso */}
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>

        {/* Carrusel de imágenes */}
        <FlatList
          data={product.image}
          renderItem={({ item }) => <Image source={item} style={styles.productImage} />}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        />

        {/* Nombre y precio */}
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productPrice}>MXN ${product.price.toFixed(2)}</Text>

        {/* Color */}
        <View style={styles.colorContainer}>
          <Text style={styles.sectionTitle}>Color - </Text>
          <Text style={styles.characteristicText}>{product.color}</Text>
        </View>

        {/* Tallas */}
        <Text style={styles.sectionTitle}>Seleccione la talla: {selectedSize || ''}</Text>
        <View style={styles.sizeContainer}>
          {product.sizes.map((size, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.sizeButton, selectedSize === size && styles.selectedSizeButton]}
              onPress={() => handleSizePress(size)}
            >
              <Text style={styles.sizeButtonText}>{size}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Botón Agregar */}
        <TouchableOpacity style={(selectedSize == null ? [styles.addButton, styles.addButtonDisabled]: styles.addButton)} disabled={selectedSize == null } 
          onPress={() => addProduct(product)}>
          <Text style={styles.addButtonText}>Agregar</Text>
        </TouchableOpacity>

        {/* Descripción */}
        <View style={styles.descriptionHeader}>
          <Text style={styles.sectionTitleD}>Descripción</Text>
          <TouchableOpacity onPress={toggleDescription}>
            <Ionicons name={isDescriptionVisible ? 'remove' : 'add'} size={16} color="black" />
          </TouchableOpacity>
        </View>

        {isDescriptionVisible && (
          <View style={styles.characteristicsContainer}>
            {product.characteristics.map((char, index) => (
              <Text key={index} style={styles.characteristicText}>
                {char}
              </Text>
            ))}
          </View>
        )}

        {/* Sección Envío y Pago */}
        <View style={styles.shippingHeader}>
          <Text style={styles.sectionTitleD}>Envío y pago</Text>
          <TouchableOpacity onPress={toggleShipping}>
            <Ionicons name={isShippingVisible ? 'remove' : 'add'} size={16} color="black" />
          </TouchableOpacity>
        </View>

        {isShippingVisible && (
          <View style={styles.shippingContainer}>
            <Text style={styles.shippingText}>
              Para miembros, el envío estándar es gratuito en compras mayores a $999.
            </Text>
            <Text style={styles.shippingText}>
              ENTREGA: El envío está disponible para direcciones dentro de México.
              Ten en cuenta que algunas áreas pueden quedar excluidas de entregas.
              También ofrecemos la opción de Entrega Express. Selecciona la opción
              que más te convenga durante el proceso de pago.
            </Text>
            <Text style={styles.shippingText}>
              DEVOLUCIONES: Puedes devolver tus artículos online solamente vía Estafeta
              hasta durante 30 días después de tu entrega.
            </Text>
            <Text style={styles.shippingText}>
              PAGO: Aceptamos pagos con tarjetas MasterCard y Visa.
            </Text>
            <Text style={styles.shippingText}>
              Enviado por Ophelia, Entrega estándar (3-5 días hábiles, $90).
            </Text>
          </View>
        )}

        {/* Comentarios */}
        <View style={styles.commentsContainer}>
          <TouchableOpacity onPress={toggleModal} style={styles.commentsAndStars}>
            <Text style={styles.sectionTitleC}>Comentarios [{reviews.length}]</Text>
            <View style={styles.starRating}>
              {Array.from({ length: 5 }, (_, index) => (
                <Ionicons key={index} name="star" size={16} color="#000" />
              ))}
              <Text style={styles.ratingText}> 5.0</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Modal
    animationType="slide"
    transparent={true}
    visible={modalVisible}
    onRequestClose={toggleModal} 
>
    <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
            <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
                <Ionicons name="close" size={20} color="black" />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Comentarios</Text>
        </View>
        <FlatList
    data={reviews}
    renderItem={({ item }) => (
        <View style={styles.reviewCard}>
            <View style={styles.reviewHeader}>
                <Text style={styles.reviewUser}>{item.user}</Text>
                <View style={styles.starRating}>
                    {Array.from({ length: item.rating }, (_, index) => (
                        <Ionicons key={index} name="star" size={16} color="#000" />
                    ))}
                </View>
                
            </View>
            <Text style={styles.reviewComment}>{item.comment}</Text>
            <View style={styles.separator} />
        </View>
        
    )}
    keyExtractor={(item) => item.id.toString()}
    style={styles.reviewsList}
/>

    </View>
</Modal>

      <NavBar style={{ zIndex: 2 }} navigation={navigation} />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  backButton: {
    position: 'absolute',
    top: 35,
    left: 14,
    zIndex: 1,
  },
  productImage: {
    width: width,
    height: 665,
    resizeMode: 'cover',
  },
  productName: {
    fontSize: 17,
    marginVertical: 10,
    fontFamily: 'WorkSans-Regular',
    fontWeight: 'bold',
    paddingHorizontal: 13,
    marginBottom: 0,
  },
  productPrice: {
    fontSize: 16,
    color: '#333',
    paddingHorizontal: 13,
    fontFamily: 'WorkSans-Regular',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 15,
    marginVertical: 10,
    paddingLeft: 13,
    fontFamily: 'WorkSans-Regular',
  },
  sectionTitleD: {
    fontSize: 15,
    marginVertical: 10,
    paddingLeft: 13,
    fontFamily: 'WorkSans-Regular',
    fontWeight: 'bold',
  },
  sectionTitleC: {
    fontSize: 15,
    marginVertical: 10,
    fontFamily: 'WorkSans-Regular',
    fontWeight: 'bold',
  },
  characteristicText: {
    fontSize: 14,
    fontFamily: 'WorkSans-Regular',
    paddingLeft: 13,
    marginTop: 5,
    marginBottom: 10,
  },
  descriptionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 13,
    marginTop: 15,
  },
  shippingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 13,
    
  },
  commentsContainer: {
    paddingLeft: 13,
    marginBottom: 20,
  },
  commentsAndStars: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 70,
  },
  starRating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shippingContainer: {
    paddingLeft: 13,
    marginBottom: 20,
  },
  shippingText: {
    fontSize: 14,
    fontFamily: 'WorkSans-Regular',
    marginTop: 5,
    marginBottom: 10,
  },
  colorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  sizeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
    marginHorizontal: 13,
  },
  sizeButton: {
    flex: 1,
    margin: 1,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderColor: '#b3b3b3',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedSizeButton: {
    borderColor: '#000',
    borderWidth: 2,
  },
  sizeButtonText: {
    fontSize: 15,
    fontFamily: 'WorkSans-Regular',
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#000',
    paddingVertical: 15,
    marginHorizontal: 13,
    marginVertical: 40,
    alignItems: 'center',
  },

  addButtonDisabled: {
    backgroundColor: '#4F4F4F',
    paddingVertical: 15,
    marginHorizontal: 13,
    marginVertical: 40,
    alignItems: 'center',
  },

  addButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontFamily: 'WorkSans-Regular',
  },
  ratingText: {
    fontSize: 14,
    fontFamily: 'WorkSans-Regular',
    fontWeight: 'bold',
    marginRight: 18,
  },
  reviewCard: {
    marginTop: 20,
    paddingTop: 10,
    
},
reviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
},
reviewUser: {
    fontWeight: 'bold',
    marginRight: 10, 
},
starRating: {
    flexDirection: 'row',
    alignItems: 'center',
},
reviewComment: {
    marginVertical: 10,
},
  reviewRating: {
    color: '#FFA500',
  },
  reviewsList: {
    marginTop: 10,
  },
  modalContainer: {
    position: 'absolute',
    top: 0, 
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    paddingVertical: 20,
    paddingHorizontal: 20,
    elevation: 2, 
    zIndex: 10,
  },
  modalContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 35,
  },
  closeButton: {
    position: 'absolute',
    left: 10, 
    top: 0,
  },
  modalTitle: {
    fontFamily: 'Figtree-Bold', 
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1, 
  
    
  },
  separator: {
    height: 1, 
    backgroundColor: '#ddd', 
    marginTop: 10, 
  },
});

export default ProductDetail;
