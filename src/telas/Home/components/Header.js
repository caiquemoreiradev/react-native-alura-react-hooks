import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

import logo from '../../../assets/logo.png';

export default function Header() {


    return (
        <View style={styles.headerContainer}>
            <Image resizeMode="contain" source={logo} style={styles.poster} />
            <Text style={styles.welcomeMessage}>Olá Caique, </Text>
            <Text style={styles.subTitle}>Encontre e avalie as suas séries favoritas</Text>
        </View>
    )
}


const styles = StyleSheet.create({

    headerContainer: {
        backgroundColor: '#333',
        padding: 16,
    },

    poster: {
        width: 120,
        height: 40
    },

    welcomeMessage: {
        marginTop: 16,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
        color: '#fafafa'
    },

    subTitle: {
        fontSize: 16,
        lineHeight: 26,
        color: '#A3A3A3'
    }
})