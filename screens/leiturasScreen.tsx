import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Leituras = () => {
    const [status, setStatus] = useState(null); // Estado para armazenar a bolinha selecionada
    const navigation = useNavigation();

    const handleStatusChange = (newStatus) => {
        setStatus(newStatus);
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
            <Text style={styles.statusTitle}>Status de leitura</Text>
            <View style={styles.statusContainer}>
                <TouchableOpacity style={styles.statusItem} onPress={() => handleStatusChange('notRead')}>
                    <View style={[styles.statusCircle, status === 'notRead' && styles.selectedCircle]} />
                    <Text style={styles.statusText}>Não lido</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.statusItem} onPress={() => handleStatusChange('reading')}>
                    <View style={[styles.statusCircle, status === 'reading' && styles.selectedCircle]} />
                    <Text style={styles.statusText}>Lendo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.statusItem} onPress={() => handleStatusChange('read')}>
                    <View style={[styles.statusCircle, status === 'read' && styles.selectedCircle]} />
                    <Text style={styles.statusText}>Lido</Text>
                </TouchableOpacity>
            </View>
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
    statusTitle: {
        fontSize: 25,
        color: "#000",
        fontWeight: "bold",
        marginVertical: 20,
        textAlign: "center",
    },
    statusContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "80%",
    },
    statusItem: {
        alignItems: "center",
    },
    statusCircle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#000',
        marginBottom: 5,
        backgroundColor: "#fff", // Cor padrão da bolinha não selecionada
    },
    selectedCircle: {
        backgroundColor: "#000", // Cor da bolinha selecionada
    },
    statusText: {
        fontSize: 16,
        color: "#000",
    },
});

export default Leituras;