import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Acervo = () => {
    const navigation = useNavigation();

    const handleAddBook = () => {
        navigation.navigate('Coleções');
    };

    const handleAddCollection = () => {
        navigation.navigate('AddCollectionScreen');
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={require("../assets/images/images-project/bibliotech.png")}
                    style={styles.logo}
                />
                <Text style={styles.pageTitle}>Bibliotech</Text>
            </View>
            <Image
                source={require('../assets/images/images-project/empty.png')}
                style={styles.image}
            />
            <Text style={styles.message}>Comece sua coleção!</Text>
            <TouchableOpacity style={styles.button} onPress={handleAddCollection}>
                <Text style={styles.buttonText}>Criar nova coleção</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#be7abb",
    },
    header: {
        position: 'absolute',
        top: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start', // Alinha os itens à esquerda
        width: '90%', // Ajusta a largura conforme necessidade
        paddingHorizontal: 10, // Espaçamento horizontal para margem
    },
    logo: {
        height: 45,
        width: 45,
    },
    pageTitle: {
        color: "#000000",
        fontWeight: "bold",
        fontSize: 30,
        marginLeft: 10, // Espaçamento entre a logo e o texto
    },
    image: {
        width: 150,
        height: 150,
    },
    message: {
        fontSize: 25,
        color: "#000",
        marginVertical: 20,
    },
    button: {
        backgroundColor: "#ac58aa",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        width: 200,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
    },
});

export default Acervo;