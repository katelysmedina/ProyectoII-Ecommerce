import React, { useContext, useState } from "react";
import { View, TextInput, StyleSheet, Alert, Text, TouchableOpacity } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { MiBolsaContext } from "../components/MiBolsaProvider";
import { MisComprasContext } from "../components/MisComprasProvider";

const PagoConTarjetaScreen = ({ route, navigation }) => {
  const { total, tipoEnvio } = route.params; 

  const { MiBolsa, vaciarBolsa } = useContext(MiBolsaContext);
  const { misCompras, addItemToMisCompras } = useContext(MisComprasContext);

  const [cardDetails, setCardDetails] = useState({
    number: '',
    expMonth: '',
    expYear: '',
    cvc: '',
    holderName: '', 
  });

  const formatCardNumber = (text) => {
    const cleanText = text.replace(/\D/g, '');
    const formatted = cleanText.match(/.{1,4}/g)?.join(' ') || '';
    setCardDetails({ ...cardDetails, number: formatted });
  };

  const  handlePayment = () => {
    addItemToMisCompras(MiBolsa);
    vaciarBolsa();
      navigation.navigate("PantallaConfirmacionScreen", {
        total,
        tipoEnvio,
        metodoPago: "Pago con tarjeta",
      });
  };

  const handleExpiryChange = (text) => {
    const cleanText = text.replace(/\D/g, '');
    let month = cleanText.slice(0, 2);
    let year = cleanText.slice(2, 4);
    
    const formattedExpiry = month ? `${month}${year ? '/' : ''}${year}` : '';

    setCardDetails({ ...cardDetails, expMonth: month, expYear: year });
    return formattedExpiry;
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
        <Feather name="chevron-left" size={20} color="black" />
      </TouchableOpacity>

      <Text style={styles.title}>Tarjeta bancaria</Text>
      <Text style={styles.introText}>Por favor, ingrese los datos de su tarjeta bancaria</Text>

      <TextInput
        style={styles.input}
        placeholder="Titular"
        value={cardDetails.holderName}
        onChangeText={(text) => setCardDetails({ ...cardDetails, holderName: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Número de tarjeta"
        value={cardDetails.number}
        onChangeText={formatCardNumber}
        keyboardType="numeric"
        maxLength={19} 
      />
      <View style={styles.expiryCvcContainer}>
        <TextInput
          style={styles.expiryInput}
          placeholder="MM/AA"
          value={`${cardDetails.expMonth}${cardDetails.expMonth && cardDetails.expYear ? '/' : ''}${cardDetails.expYear}`}
          onChangeText={(text) => {
            const formattedExpiry = handleExpiryChange(text);
            setCardDetails({ ...cardDetails, expMonth: formattedExpiry.split('/')[0], expYear: formattedExpiry.split('/')[1] || '' });
          }}
          keyboardType="numeric"
          maxLength={5} 
        />
        <TextInput
          style={styles.cvcInput}
          placeholder="CVV"
          value={cardDetails.cvc}
          onChangeText={(text) => {
            const cleanText = text.replace(/\D/g, '');
            if (cleanText.length <= 3) {
              setCardDetails({ ...cardDetails, cvc: cleanText });
            }
          }}
          secureTextEntry
          keyboardType="numeric"
          maxLength={3} 
        />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.totalText}>Total</Text>
        <Text style={styles.totalText1}>MXN ${total.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</Text>
      </View>
      
      
      <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
        <Text style={styles.payButtonText}>Pagar</Text>
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
  expiryCvcContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  expiryInput: {
    flex: 1,
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
    fontFamily: 'Figtree',
    fontSize: 15,
    marginVertical: 10,
  },
  cvcInput: {
    width: '30%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontFamily: 'Figtree',
    fontSize: 15,
    marginVertical: 10,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 130,
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
  payButton: {
    backgroundColor: '#000',
    paddingVertical: 15,
    marginVertical: 20,
    alignItems: 'center',
  },
  payButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontFamily: 'WorkSans-Regular',
  },
});

export default PagoConTarjetaScreen;
