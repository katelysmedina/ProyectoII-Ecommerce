import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity, StyleSheet} from "react-native";
import Feather from "@expo/vector-icons/Feather";

const GiftCardScreen = ({ route, navigation }) => {
  const { total, tipoEnvio } = route.params;
  const [giftCardCode, setGiftCardCode] = useState("");
  const [pin, setPin] = useState("");

  const handleApplyGiftCard = () => {
     {
      navigation.navigate("PantallaConfirmacionScreen", {
        total,
        tipoEnvio,
        metodoPago: "Gift Card",
      });
  };
  };

  const formatGiftCardCode = (text) => {
    
    const alphanumeric = text.toUpperCase().replace(/[^a-zA-Z0-9]/g, "");
    
    
    const limited = alphanumeric.slice(0, 6);
    
    
    const grouped = limited.match(/.{1,3}/g);
    
    setGiftCardCode(grouped ? grouped.join("-") : "");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
        <Feather name="chevron-left" size={20} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>Gift Card</Text>
      <Text style={styles.introText}>Por favor, ingrese los datos de su Gift Card</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Código de la gift card"
        value={giftCardCode}
        onChangeText={formatGiftCardCode}
      />
      
      <TextInput
        style={styles.input}
        placeholder="PIN"
        value={pin}
        onChangeText={setPin}
        secureTextEntry
        maxLength={4} 
        keyboardType="numeric" 
      />
        <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: </Text>
        <Text style={styles.totalText1}>MXN ${total.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleApplyGiftCard}>
        <Text style={styles.buttonText}>Aplicar Gift Card</Text>
      </TouchableOpacity>
      
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  closeButton: {
    position: 'absolute',
    top: 35,
    left: 14,
    zIndex: 1, 
  },
  title: {
    fontFamily: 'Figtree-SemiBold',
    fontSize: 25,
    marginBottom: 20,
    marginTop: 80,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    fontFamily: 'Figtree',
    fontSize: 15,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 15,
    marginVertical: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontFamily: 'WorkSans-Regular',
  },
  totalContainer: {
    marginTop: 220,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalText: {
    fontSize: 16,
    fontFamily: 'WorkSans-Medium',
  },
  totalText1: {
    fontSize: 16,
    fontFamily: 'WorkSans-SemiBold',
  },
  introText: {
    fontSize: 16,
    color: '#666',
    fontFamily: 'Figtree',
    marginBottom: 20,
  },
});

export default GiftCardScreen;

