import React,  { useState }  from 'react';
import { 
    View, 
    Text,
    TextInput,
    StyleSheet, 
    TouchableOpacity, 
} from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Feather from '@expo/vector-icons/Feather';

const AyudaScreen = ({ navigation }) => {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [celular, setCelular] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [terminos, setTerminos] = useState(false);

    const handleAyuda = () =>{
       navigation.navigate('Home');
    }

    const canSubmit = (nombre != '' && correo != '' && celular != '' && mensaje != '' && terminos);

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
             <Feather name="chevron-left" size={20} color="black" />
            </TouchableOpacity>
    
            <Text style={styles.title}>Ayuda</Text>
            <Text style={styles.introText}>Dinos en qué podemos ayudarte, te responderemos tan pronto sea posible</Text>
    
            <Text style={styles.label}>Nombre *</Text>
            <TextInput
            style={styles.input}
            placeholder="Ingresa tu nombre"
            value={nombre}
            onChange={setNombre}/> 

            <Text style={styles.label}>Correo electrónico *</Text>
            <TextInput
            style={styles.input}
            placeholder="Ingresa tu correo electrónico"
            value={correo}
            onChange={setCorreo}/> 
            
            <Text style={styles.label}>Celular *</Text>
            <TextInput
            style={styles.input}
            placeholder="Ingresa tu celular"
            value={celular}
            onChange={setCelular}/> 

    
            <Text style={styles.label}>Mensaje *</Text>
            <TextInput
                style={[styles.input, styles.textArea]}
                multiline
                numberOfLines={4}
                onChangeText={setMensaje}
                value={mensaje}
                placeholder="Escribe aquí tu mensaje..."
                textAlignVertical="top"
            />
          <BouncyCheckbox
            size={20}
            fillColor="black"
            unFillColor="#FFFFFF"
            text="Acepto terminos y condiciones"
            iconStyle={{ borderColor: "black"}}
            innerIconStyle={{ borderWidth: 1 }}
            value={terminos}
            textStyle={{ fontFamily: "JosefinSans-Regular", textDecorationLine: "none" }}
            onPress={(isChecked) => setTerminos(isChecked)}
            />
        <TouchableOpacity style={[styles.ayudaButton,  {backgroundColor: canSubmit ? '#000000' : '#4F4F4F'}]}  onPress={handleAyuda} disabled={!canSubmit}>
            <Text style={styles.ayudaButtonText}>Enviar</Text>
        </TouchableOpacity>
        </View>
        );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
      },
      ayudaButton: {
        backgroundColor: '#000',
        paddingVertical: 15,
        marginVertical: 20,
        alignItems: 'center',
      },
      ayudaButtonText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontFamily: 'WorkSans-Regular',
      },
      textArea: {
        height: 100,
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
      introText: {
        fontSize: 16,
        color: '#666',
        fontFamily: 'Figtree',
        marginBottom: 20,
      },
      label: {
        fontSize: 14,
        color: '#666',
        fontFamily: 'Figtree',
        marginBottom: 3,
      }
});

export default AyudaScreen;
