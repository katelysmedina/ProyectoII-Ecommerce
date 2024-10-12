import React from "react";
import { TouchableOpacity } from "react-native";
import { Modal, Text, SafeAreaView, View, StyleSheet, ScrollView} from "react-native";

const CustomModal = ({isOpenModal, titulo, data, closeModal}) => {
    return (
        <Modal
           visible={isOpenModal} 
           animationType="slide"
           onRequestClose={closeModal}>
           <SafeAreaView style={{flex: 1}}>
                <View style={styles.containerTitle}>
                    <Text style={styles.title}>
                        {titulo}
                    </Text>
                </View>
                <ScrollView 
                  style={styles.container}
                  horizontal={false}>
                    <Text style={styles.textData}>
                        {data}
                    </Text>
                </ScrollView>
                <View>
                    <TouchableOpacity style={styles.button} onPress={closeModal}>
                        <Text style={styles.buttonText}>Cerrar</Text>
                    </TouchableOpacity>
                </View>
           </SafeAreaView>
        </Modal>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#000000',
        borderRadius: 4,
        paddingVertical: 15,
        alignItems: 'center',
        marginTop: 50,
      },
      buttonText: {
        color: '#fff',
        fontSize: 15,
        textTransform: 'uppercase',
        fontFamily: 'Figtree-Bold',
      },
      containerTitle:{
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 20
      },
      title:{
        fontFamily: 'Figtree-SemiBold',
        fontSize: 23,
        marginTop: 25
      },
      container:{
        flex: 1,
      },
      textData:{
        fontFamily: 'WorkSans-Regular',
        fontSize: 12,
        padding: 18
      }
});

export default CustomModal;