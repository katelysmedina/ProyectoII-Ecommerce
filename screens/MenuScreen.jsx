import React, { useState, useContext } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput, FlatList } from 'react-native';
import NavBar from '../components/NavBar';
import Feather from '@expo/vector-icons/Feather';
import { ProductContext } from '../components/ProductProvider'; 

const MenuScreen = ({ navigation }) => {
  const { productsByCategory } = useContext(ProductContext); 
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  
  const getAllProducts = () => {
    return Object.values(productsByCategory)
      .flatMap(category => {
        if (Array.isArray(category)) {
          return category;
        } else {
          return Object.values(category).flat();
        }
      });
  };

  const handleSearch = (query) => {
    setSearchQuery(query);

    if (query.trim() === '') {
      setFilteredProducts([]); 
    } else {
      const allProducts = getAllProducts(); 
      const filtered = allProducts.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase()) 
      );
      setFilteredProducts(filtered);
    }
  };

  
  const handleSearchNavigate = () => {
    if (searchQuery.trim()) {
      navigation.navigate('SearchResults', { query: searchQuery });
    }
  };

  return (
    <View style={styles.container}>
      {}
      {searchQuery.length > 0 && (
        <View style={styles.overlay} />
      )}

      {/* Barra de búsqueda */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar productos"
          value={searchQuery}
          onChangeText={handleSearch} 
        />
        <TouchableOpacity onPress={handleSearchNavigate}>
          <Feather name="search" size={18} color="#555" />
        </TouchableOpacity>
      </View>

      {/* Sugerencias de búsqueda */}
      {searchQuery.length > 0 && (
  <View style={styles.suggestionsContainer}>
    {filteredProducts.length > 0 ? (
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('ProductDetail', { product: item })}>
            <Text style={styles.suggestionItem}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    ) : (
      <Text style={styles.noResults}>No se encontraron productos.</Text>
    )}
  </View>
)}

      {/* Menú */}
      <View style={styles.textContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('ProductList', { category: 'NEW IN' })}>
          <Text style={styles.menuNew}>NEW IN</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('ProductList', { category: 'Edición Invierno 24' })}>
          <Text style={styles.menuDenim}>Edición Invierno 24</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('ProductList', { category: 'Lo más vendido' })}>
          <Text style={styles.menuMasVendido}>Lo más vendido</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('RopaMenuScreen')}>
          <View style={styles.categoryContainer}>
            <Text style={styles.menuCategory}>Ropa</Text>
            <Feather name="chevron-right" size={17} color="black" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('CalzadoMenuScreen')}>
          <View style={styles.categoryContainer}>
            <Text style={styles.menuCategory}>Zapatos</Text>
            <Feather name="chevron-right" size={17} color="black" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('ProductList', { category: 'Bolsos' })}>
          <View style={styles.categoryContainer}>
            <Text style={styles.menuCategory}>Bolsos</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('ProductList', { category: 'Rebajas' })}>
          <Text style={styles.menuOffers}>Rebajas</Text>
        </TouchableOpacity>
        <Text style={styles.menuOffers2}>Hasta 50% de descuento</Text>
      </View>

      <NavBar navigation={navigation} activeScreen="Menu" />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 20,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#fff',
    zIndex: 1,
  },
  suggestionsContainer: {
    position: 'absolute',
    top: 150, 
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    zIndex: 2,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, 
  },
  suggestionItem: {
    padding: 10,
    fontSize: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  noResults: {
    padding: 10,
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginTop: 60,
    zIndex: 2, 
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 12,
    fontFamily: 'Figtree',
  },

  textContainer: {
    alignItems: 'flex-start',
    marginTop: 20,
    zIndex: 0,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  menuOffers: {
    marginTop: 35,
    fontSize: 17,
    color: '#de1b35',
    textTransform: 'uppercase',
    fontFamily: 'Figtree-SemiBold',
    fontWeight: '500',
  },
  menuCategory: {
    fontSize: 16,
    textTransform: 'uppercase',
    fontFamily: 'Figtree-Medium',
    fontWeight: '100',
  },
  menuNew: {
    fontSize: 18,
    textTransform: 'uppercase',
    marginBottom: 10,
    fontFamily: 'Figtree-SemiBold',
  },
  menuDenim: {
    fontSize: 18,
    textTransform: 'uppercase',
    marginBottom: 10,
    fontFamily: 'Figtree-SemiBold',
  },
  menuMasVendido: {
    fontSize: 18,
    textTransform: 'uppercase',
    marginBottom: 36,
    fontFamily: 'Figtree-SemiBold',
  },
  menuOffers2: {
    fontSize: 13,
    marginTop: 4,
    color: '#909090',
    fontFamily: 'Figtree',
  },

  menuOverlay: {
    opacity: 0.5, 
  },
});

export default MenuScreen;
