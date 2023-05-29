import React from "react";
import Header from './components/Header';
import ShowsList from './components/ShowsList';
import { StyleSheet, View } from "react-native";

export default function Home() {

    return (
        <View styles={styles.homeContainer}>
            <Header />
            <ShowsList header={Header} />
        </View>
    )
}

const styles = StyleSheet.create({

    homeContainer: {
        flex: 1
    }
})