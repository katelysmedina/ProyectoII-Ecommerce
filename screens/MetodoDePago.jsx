import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Feather from "@expo/vector-icons/Feather";

const MetodosDePagoScreen = ({ route, navigation }) => {
  const { total, tipoEnvio } = route.params;

  const handleSeleccionarPago = (metodoPago) => {
    if (metodoPago === "Tarjeta bancaria") {
      navigation.navigate("PagoConTarjeta", {
        total,
        tipoEnvio,
      });
    } else if (metodoPago === "Giftcard") {
      navigation.navigate("GiftcardScreen", {
        total,
        tipoEnvio,
        metodoPago,
      });
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
        <Feather name="chevron-left" size={20} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>Métodos de pago</Text>

      <View style={styles.optionContainer}>
        <Text style={styles.introText}>Seleccione un método de pago:</Text>
        <TouchableOpacity style={styles.optionButton} onPress={() => handleSeleccionarPago("Tarjeta bancaria")}>
          <View style={styles.optionContent}>
            <Feather name="credit-card" size={16} color="#000" style={styles.icon} />
            <Text style={styles.optionText}>Tarjeta bancaria</Text>
          </View>
          <Feather name="chevron-right" size={16} color="#000" style={styles.chevronIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionButton} onPress={() => handleSeleccionarPago("Giftcard")}>
          <View style={styles.optionContent}>
            <Feather name="gift" size={16} color="#000" style={styles.icon} />
            <Text style={styles.optionText}>Gift Card</Text>
          </View>
          <Feather name="chevron-right" size={16} color="#000" style={styles.chevronIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.totalText}>Total</Text>
        <Text style={styles.totalText1}>MXN ${total.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</Text>
      </View>
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
  optionContainer: {
    marginBottom: 270,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'Figtree',
    marginLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
  chevronIcon: {
    marginLeft: 10,
  },
  totalText: {
    fontSize: 16,
    fontFamily: 'WorkSans-Medium',
  },
  totalText1: {
    fontSize: 16,
    fontFamily: 'WorkSans-SemiBold',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 30,
  },
  introText: {
    fontSize: 16,
    color: '#666',
    fontFamily: 'Figtree',
    marginBottom: 20,
  },
});

export default MetodosDePagoScreen;
