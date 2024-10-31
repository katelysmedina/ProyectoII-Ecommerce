import React, { useContext } from 'react';
import { View, StyleSheet, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { MisComprasContext } from '../components/MisComprasProvider';
import Feather from '@expo/vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import NavBar from '../components/NavBar'; // Asegúrate de tener la ruta correcta

const NotificacionesScreen = () => {
    const navigation = useNavigation();
    const { notificaciones } = useContext(MisComprasContext);
    


    const handleButtonPress = (action) => {
        if (action === 'ayuda') {
            console.log("Solicitando ayuda...");
        } else if (action === 'seguirEnvio') {
            console.log("Siguiendo el envío...");
        }
    };

    const renderNotification = ({ item }) => (
        <View style={styles.notificationContainer}>
            <Image source={item.imagen} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.notification}>{item.mensaje}</Text>
                {item.mensaje.includes("¡Gracias por realizar tu primer pedido!") && (
                    <Text style={styles.subMessage}>
                        Si tuviste algún problema o dificultad, infórmanos.
                    </Text>
                )}
                {item.mensaje.includes("Tu pedido está en tránsito") && (
                    <Text style={styles.subMessage}>
                        Consulta el seguimiento de tu pedido.
                    </Text>
                )}
                <View style={styles.buttonContainer}>
                    {item.mensaje.includes("Tu pedido está en tránsito") && (
                        <TouchableOpacity 
                            style={styles.button} 
                            onPress={() => handleButtonPress('seguirEnvio')}
                        >
                            <Text style={styles.buttonText}>Seguir envío</Text>
                        </TouchableOpacity>
                    )}
                    {item.mensaje.includes("¡Gracias por realizar tu primer pedido!") && (
                        <TouchableOpacity 
                            style={styles.button} 
                            onPress={() => handleButtonPress('ayuda')}
                        >
                            <Text style={styles.buttonText}>Ayuda</Text>
                        </TouchableOpacity>
                    )}
                </View>
            </View>
        </View>
    );

    // Calcular el contador de notificaciones
    const notificationCount = notificaciones.length;

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
                <Feather name="chevron-left" size={20} color="black" />
            </TouchableOpacity>
            <Text style={styles.title}>Notificaciones</Text>
            {notificaciones.length > 0 ? (
                <FlatList
                    data={notificaciones}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderNotification}
                    showsVerticalScrollIndicator={true}
                    contentContainerStyle={{ paddingBottom: 70 }}
                />
            ) : (
                <Text>No hay notificaciones.</Text>
            )}
            
            <NavBar 
                navigation={navigation} 
                activeScreen="Notificaciones" 
                notificationCount={notificationCount} 
            />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
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
        marginBottom: 35,
        marginTop: 80,
    },
    notificationContainer: {
        flexDirection: 'row',
        alignItems: 'left',
        marginBottom: 20,
        backgroundColor: 'white',
        borderRadius: 4,
        padding: 20,
        borderWidth: 1,
        borderColor: 'white',
    },
    notification: {
        fontSize: 15,
        flex: 1,
        fontFamily: 'WorkSans-Medium',
        marginBottom: 1,
    },
    subMessage: {
        fontSize: 14,
        color: 'gray',
        fontFamily: 'Figtree',
    },
    image: {
        width: 90,
        height: 120,
    },
    textContainer: {
        flex: 1,
        marginLeft: 10,
    },
    buttonContainer: {
        marginTop: 5,
    },
    button: {
        backgroundColor: 'black',
        paddingVertical: 5,
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 0,
        marginTop: 5,
        alignSelf: 'flex-start',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'WorkSans-SemiBold',
        textTransform: 'uppercase',
    },
});

export default NotificacionesScreen;
