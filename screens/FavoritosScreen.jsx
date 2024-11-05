import React from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  Image, 
  StyleSheet, 
  Dimensions, 
  TouchableOpacity, 
} from 'react-native';
import { useProducts } from '../components/ProductProvider';
import Feather from '@expo/vector-icons/Feather';
import NavBar from '../components/NavBar';
import { Ionicons } from '@expo/vector-icons';

const FavoritosScreen = ({ navigation }) => { 
  const { getFavoriteProducts, toggleFavorito } = useProducts();

  const renderProduct = ({ item }) => (
    <TouchableOpacity 
      style={styles.productContainer} 
      onPress={() => navigation.navigate('ProductDetail', { product: item })} 
    >
        <TouchableOpacity 
            style={styles.botonFavoritos}
            onPress={() => toggleFavorito(item.id)}
        >
        <Ionicons name="heart-sharp" size={24} color="black" />
        </TouchableOpacity>
        <Image source={item.image[0]} style={styles.productImage} />
        <Text style={styles.productName} numberOfLines={1} ellipsizeMode="tail">
            {item.name}
        </Text>
        <Text style={styles.productPrice}>MXN ${item.price.toFixed(2)}</Text>
    </TouchableOpacity>
  );
  

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.chevronButton} 
        onPress={() => navigation.goBack()}
      >
        <Feather name="chevron-left" size={20} color="black" />
      </TouchableOpacity>

      <Text style={styles.categoryTitle}>Favoritos</Text>

    <FlatList
      data={ getFavoriteProducts()}
      renderItem={renderProduct}
      keyExtractor={(item) => item.id}
      numColumns={2} 
      showsVerticalScrollIndicator={false}
      style={styles.productList} 
      contentContainerStyle={{ paddingBottom: 70 }}
      ListEmptyComponent={
        <View style={[styles.container, styles.containerEmpty]}>
            <Text style={styles.emptyList}>No tienes  productos en tu lista</Text>
            <Text style={styles.emptySubText}>Descubre todo lo que tenemos para ti</Text>
                <TouchableOpacity 
                    style={styles.menuButton} 
                    onPress={() => navigation.navigate('Menu')} 
                >
                    <Text style={styles.menuButtonText}>Descubrir</Text>
                </TouchableOpacity>
        </View>
    }
    />

    <NavBar style={{ zIndex: 2 }} navigation={navigation} />
  </View>
);
};

const { width } = Dimensions.get('window');


const styles = StyleSheet.create({
    containerEmpty: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: 'transparent',
        marginTop: 160,
    },

    emptyList: {
        fontFamily: 'WorkSans-Medium',
        fontSize: 18,
        marginBottom: 10,
        backgroundColor: 'transparent',
    },
    emptySubText: {
        fontFamily: 'WorkSans-Medium',
        fontSize: 14,
        color: '#777',
        textAlign: 'center',
        marginBottom: 20,
    },
    menuButton: {
        backgroundColor: '#000',
        paddingVertical: 11,
        paddingHorizontal: 25,
        borderRadius: 4,
        alignItems: 'center',
    },
    menuButtonText: {
        color: '#fff',
        fontFamily: 'Figtree-SemiBold',
        fontSize: 15,
        textTransform: 'uppercase',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
    },
    categoryTitle: {
        paddingHorizontal: 20,
        fontFamily: 'Figtree-SemiBold',
        fontSize: 25,
        marginBottom: 16,
        marginTop: 80,
    },

    productContainer: {
        width: (width / 2),
        marginBottom: 60,
        position: 'relative'
    },
    productImage: {
        width: '100%',
        height: 280,
    },
    productName: {
        fontSize: 14,
        textAlign: 'left',
        marginTop: 5,
        paddingHorizontal: 8,
        fontFamily: 'WorkSans',
        width: '100%',
    },
    productPrice: {
        fontFamily: 'WorkSans-Regular',
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 2,
        paddingHorizontal: 8,
    },
    chevronButton: {
        position: 'absolute',
        top: 35,
        left: 14,
        zIndex: 1,
    },
    botonFavoritos:{
        position: 'absolute',
        zIndex: 100,
        top: 10,
        right: 10,
        padding: 2
      },
});

export default FavoritosScreen;
