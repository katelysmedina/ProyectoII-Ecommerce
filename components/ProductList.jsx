import React, { useState } from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  Image, 
  StyleSheet, 
  Dimensions, 
  TouchableOpacity, 
} from 'react-native';
import { useProducts } from './ProductProvider';
import Feather from '@expo/vector-icons/Feather';
import NavBar from './NavBar';

const ProductList = ({ route, navigation }) => { 
  const { productsByCategory } = useProducts();
  const { category } = route.params;

  const [expanded, setExpanded] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeSort, setActiveSort] = useState(null); 
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null); 

  const getProductsByCategory = () => {
    switch (category) {
      case 'Cazadoras y abrigos':
        return productsByCategory.Ropa['Cazadoras y abrigos'];
      case 'Blazers':
        return productsByCategory.Ropa.Blazers;
      case 'Jeans':
        return productsByCategory.Ropa.Jeans;
      case 'Pantalones':
        return productsByCategory.Ropa.Pantalones;
      case 'Suéteres':
        return productsByCategory.Ropa.Suéteres;
      case 'Tops':
        return productsByCategory.Ropa.Tops;
      case 'Vestidos':
        return productsByCategory.Ropa.Vestidos;
      case 'Blusas':
        return productsByCategory.Ropa.Blusas;
      case 'Faldas':
        return productsByCategory.Ropa.Faldas;
      case 'Botas':
        return productsByCategory.Calzado.Botas;
      case 'Balerinas':
        return productsByCategory.Calzado.Balerinas;
      case 'Zapatillas':
        return productsByCategory.Calzado.Zapatillas;
      case 'Loafers':
        return productsByCategory.Calzado.Loafers;
      case 'Bolsos':
        return productsByCategory.Bolsos;
      default:
        return [];
    }
  };

  const products = getProductsByCategory();

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const sortProducts = (criteria) => {
    let sorted = [...(filteredProducts.length ? filteredProducts : products)];
    if (criteria === 'asc') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (criteria === 'desc') {
      sorted.sort((a, b) => b.price - a.price);
    }
    setFilteredProducts(sorted);
    setActiveSort(criteria); 
  };

  const filterByColor = (color) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(prev => prev.filter(c => c !== color));
    } else {
      setSelectedColors(prev => [...prev, color]);
    }
  };

  const filterByPriceRange = (range) => {
    setSelectedPriceRange(range);
  };

  const clearFilters = () => {
    setFilteredProducts([]);
    setSelectedColors([]);
    setActiveSort(null);
    setSelectedPriceRange(null); 
  };

  const applyFilters = () => {
    toggleExpanded(); // Cerrar la ventana de filtros
  };

  const renderProduct = ({ item }) => (
    <View style={styles.productContainer}>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productName} numberOfLines={1} ellipsizeMode="tail">
        {item.name}
      </Text>
      <Text style={styles.productPrice}>MXN ${item.price.toFixed(2)}</Text>
    </View>
  );

  const uniqueColors = [...new Set(products.map(item => item.color))];

  // Filtrar productos según colores 
  let filteredByColorProducts = filteredProducts.length > 0 ? filteredProducts : products;
  let finalProducts = selectedColors.length > 0 
    ? filteredByColorProducts.filter(item => selectedColors.includes(item.color))
    : filteredByColorProducts;

  // Filtrar productos según el rango de precios 
  if (selectedPriceRange) {
    const maxPrice = parseInt(selectedPriceRange.split('$')[1].replace(',', ''), 10);
    finalProducts = finalProducts.filter(item => item.price <= maxPrice);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.chevronButton} 
        onPress={() => navigation.navigate('RopaMenuScreen')}
      >
        <Feather name="chevron-left" size={24} color="black" />
      </TouchableOpacity>

      <Text style={styles.categoryTitle}>{category}</Text>
      
      <TouchableOpacity onPress={toggleExpanded} style={styles.toggleButton}>
        <Text style={styles.toggleText}> Filtrar {expanded ? '-' : '+'}</Text>
      </TouchableOpacity>

      {expanded && (
        <View style={styles.overlayContainer}>
          <View style={styles.headerContainer}>
            <TouchableOpacity onPress={toggleExpanded}>
              <Feather name="x" size={18} color="black" />
            </TouchableOpacity>
            <Text style={styles.filterTitle}>Filtrar</Text>
            <TouchableOpacity onPress={clearFilters} style={styles.clearFiltersText}>
            <Text style={styles.clearFiltersText}>Limpiar</Text>
          </TouchableOpacity>
          </View>
    

          
          <Text style={styles.orderByText}>Ordenar por</Text>
          <View style={styles.sortButtonsContainer}>
            <TouchableOpacity 
              style={[styles.sortButton, activeSort === 'asc' && styles.activeButton]} 
              onPress={() => sortProducts('asc')}
            >
              <Text style={[styles.sortText, activeSort === 'asc' && styles.activeText]}>Precio ascendente</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.sortButton, activeSort === 'desc' && styles.activeButton]} 
              onPress={() => sortProducts('desc')}
            >
              <Text style={[styles.sortText, activeSort === 'desc' && styles.activeText]}>Precio descendente</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.separator} />
          
          
          <Text style={styles.orderByText}>Precio</Text>
          <View style={styles.priceButtonsContainer}>
            {['Hasta $399', 'Hasta $699', 'Hasta $999', 'Hasta $1299', 'Hasta $1599'].map((priceRange) => (
              <TouchableOpacity 
                key={priceRange} 
                style={[styles.priceButton, selectedPriceRange === priceRange && styles.activePriceButton]} 
                onPress={() => filterByPriceRange(priceRange)}
              >
                <Text style={[styles.priceText, selectedPriceRange === priceRange && styles.activeText]}>{priceRange}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.separator} />

          <Text style={styles.orderByText}>Color</Text>
          <View style={styles.colorButtonsContainer}>
            {uniqueColors.map(color => (
              <TouchableOpacity 
                key={color} 
                style={[styles.colorButton, selectedColors.includes(color) && styles.activeColorButton]} 
                onPress={() => filterByColor(color)}
              >
                <Text style={[styles.colorText, selectedColors.includes(color) && styles.activeColorText]}>{color}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.separator} />
          
          <TouchableOpacity onPress={applyFilters} style={styles.applyFiltersButton}>
            <Text style={styles.applyFiltersText}>Aplicar filtros</Text>
          </TouchableOpacity>

        </View>
      )}

    <FlatList
      data={finalProducts}
      renderItem={renderProduct}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2} 
      showsVerticalScrollIndicator={false}
      style={styles.productList} 
      contentContainerStyle={{ paddingBottom: 70 }} 
    />

    <NavBar style={{ zIndex: 2 }} navigation={navigation} />
  </View>
);
};

const { width } = Dimensions.get('window');


const styles = StyleSheet.create({
  
  
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  toggleButton: {
    borderRadius: 5,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  toggleText: {
    fontSize: 15,
    fontFamily: 'WorkSans-Medium',
    textAlign: 'right',
    marginBottom: 10,
  },
  categoryTitle: {
    paddingHorizontal: 20,
    fontFamily: 'Figtree-SemiBold',
    fontSize: 25,
    marginBottom: 16,
    marginTop: 80,
  },
  overlayContainer: {
    position: 'absolute',
    top: 20, 
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    paddingVertical: 20,
    paddingHorizontal: 20,
    elevation: 2, 
    zIndex: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    marginBottom: 20,
  },
  filterTitle: {
    fontFamily: 'Figtree-Bold', 
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center', 
    flex: 1, 
  },
  orderByText: {
    fontSize: 16,
    fontFamily: 'WorkSans-Medium',
    marginVertical: 10,
    textAlign: 'left',
  },
  sortButtonsContainer: {
    flexDirection: 'row', 
    justifyContent: 'flex-start', 
    marginVertical: 10,
  },
  sortButton: {
    backgroundColor: 'white',
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
  },
  activeButton: {
    backgroundColor: 'black',
  },
  sortText: {
    fontSize: 14,
    fontFamily: 'WorkSans-Regular',
    textAlign: 'center',
    color: 'black', 
  },
  activeText: {
    color: 'white', 
  },
  priceButtonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 10,
  },
  priceButton: {
    backgroundColor: 'white',
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    margin: 5,
  },
  activePriceButton: {
    backgroundColor: 'black',
  },
  priceText: {
    color: 'black',
  },
  colorButtonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 10,
  },
  colorButton: {
    backgroundColor: 'white',
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    margin: 5,
  },
  activeColorButton: {
    backgroundColor: 'black',
  },
  colorText: {
    color: 'black',
  },
  activeColorText: {
    color: 'white',
  },
  applyFiltersButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: 'black',
    borderRadius: 5,
    alignItems: 'center',
  },
  applyFiltersText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  productContainer: {
    width: width / 2,
    marginBottom: 60,
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
  separator: {
    height: 1, 
    backgroundColor: '#ddd', 
    marginVertical: 20, 
  },
  chevronButton: {
    position: 'absolute',
    top: 35,
    left: 14,
    zIndex: 1,
  },
  clearFiltersText: {
    fontFamily: 'Figtree-Bold', 
    fontSize: 13,
    fontWeight: 'bold',
    color: '#aaa'
  }
});

export default ProductList;
