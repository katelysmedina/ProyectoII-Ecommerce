import React, { useContext } from "react";
import { SafeAreaView,
        Text,
        StyleSheet,
        TouchableOpacity,
        View,
        FlatList,
        Image
     } from "react-native";
import { MiBolsaContext } from "../components/MiBolsaProvider";
import Feather from '@expo/vector-icons/Feather';



const MiBolsaScreen = ({ navigation }) => {
    const { MiBolsa, eliminarProductoFromMiBolsa, addItemToMiBolsa} = useContext(MiBolsaContext);
    const total = MiBolsa.reduce((acc, product) => acc + (product.price * product.quantity), 0);
    
    const renderProduct = ({ item }) => (
        <View style={styles.items}>
            <View style={styles.infoProduct}>
                <Image source={item.image[0]} style={styles.productImage} />
            </View>
            <View style={styles.infoProduct}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.textDescription}>${item.price} | {item.selectedSize}</Text>
                
                <View style={styles.cantidadContainer}>
                
                    <TouchableOpacity
                    style={styles.cantidadButton}
                    onPress={() => eliminarProductoFromMiBolsa(item)}
                    >
                    <Text style={styles.cantidadButtonText}> - </Text>
                    </TouchableOpacity>


                    <Text style={styles.cantidad}>{item.quantity}</Text>

                    <TouchableOpacity
                    style={styles.cantidadButton}
                    onPress={() => addItemToMiBolsa(item)}
                    >
                    <Text style={styles.cantidadButtonText}> + </Text>
                    </TouchableOpacity>
            
                </View>
            </View>
        </View>
      );

    return (
        <View style={styles.container}>
             <TouchableOpacity 
                style={styles.chevronButton} 
                onPress={() => navigation.goBack()}
            >
                <Feather name="chevron-left" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.title}>Mi Bolsa</Text>

            <FlatList
                data={MiBolsa}
                renderItem={renderProduct}
                keyExtractor={(_, index) => index.toString()}
                showsVerticalScrollIndicator={true}
                style={styles.productList} 
                contentContainerStyle={{ paddingBottom: 70 }} 
                ListEmptyComponent={<View style= {[styles.container, styles.containerEmpty]}><Text style={styles.
                    emptyMiBolsa}>No hay productos en tu bolsa :(</Text></View>}
            />
            <View style={styles.containerFixed}> 
               
                <TouchableOpacity
                style={styles.continuarButton}
                onPress={() =>continuar()}
                >
                <Text style={styles.continuarButtonText}>Continuar </Text>
                </TouchableOpacity>
                
                <View style={styles.totalMiBolsa}>
                    <Text style={styles.textDescription}>Total: ${total.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</Text>
                    <Text  style={styles.subText}>+ IVA incluido</Text>
                </View>
 
            </View>
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
      },
      containerFixed: {
        flex: 1,
        flexDirection: "row",
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        borderTopWidth: 2,
        borderTopColor: '#E3E3E3',
        backgroundColor: '#fff',
        height: 58
      },
      containerEmpty: {
        alingItems: 'center',
      },

      title: {
        fontFamily: 'Figtree-SemiBold',
        fontSize: 25,
        marginBottom: 20,
        marginTop: 50,
        marginLeft: 'auto',
        marginRight: 'auto'
      },
      chevronButton: {
        position: 'absolute',
        top: 35,
        left: 14,
        zIndex: 1,
      },

      emptyMiBolsa: {
        fontSize: 17,
        marginVertical: 10,
        fontFamily: 'WorkSans-Regular',
        fontWeight: 'semi-bold',
        marginLeft: 'auto',
        marginRight: 'auto'
      },

      items:{
        flex: 1,
        flexDirection: "row",
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        marginTop: 5,
        borderColor: "#E3E3E3"
      },
      productImage: {
        width: '100%',
        height: 180,
        objectFit: 'contain'
      },
      infoProduct:{
        padding: 5,
        flex: 1
      },
      productName: {
        fontSize: 16,
        marginVertical: 4,
        fontFamily: 'WorkSans-Regular',
        fontWeight: 'bold',
      },
      textDescription: {
        fontSize: 14,
        marginVertical: 4,
        fontFamily: 'WorkSans-Regular',
        fontWeight: 'semi-bold',
      },

      subText:{
        fontSize: 10,
        marginVertical: 4,
        fontFamily: 'WorkSans-Regular',
        fontWeight: 'normal',
        color: "b3b3b3"
      },
      cantidadContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 30,
        marginHorizontal: 13,
      },

      cantidadButton: {
        flex: 1,
        margin: 1,
        paddingVertical: 12,
        backgroundColor: '#fff',
        borderColor: '#b3b3b3',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      cantidadButtonText: {
        fontSize: 15,
        fontFamily: 'WorkSans-Regular',
        fontWeight: 'bold',
      },
      cantidad:{
        margin: 1,
        paddingVertical: 12,
        paddingHorizontal: 12,
        backgroundColor: '#fff',
        borderColor: '#b3b3b3',
        borderWidth: 1,
        justifyContent: 'center',
        fontSize: 15,
        fontFamily: 'WorkSans-Regular',
        fontWeight: 'semi-bold',
      },
      continuarButton: {
        flex: 1,
        backgroundColor: '#000000',
        paddingVertical: 15,
        alignItems: 'center',
      },
      totalMiBolsa: {
        flex: 1,
        marginTop: 5,
        paddingRight: 15,
        alignItems: 'flex-end'
      },
      continuarButtonText: {
        fontSize: 15,
        fontFamily: 'WorkSans-Regular',
        fontWeight: 'semi-bold',
        color: "#FFF"
      },
  });

export default MiBolsaScreen;