import React from "react";
import { FlatList, Text, StyleSheet, View } from "react-native";

import Show from "./Show";
import useShows from "../../../hooks/useShows";

export default function Produtores({ topo: Topo }) {

    const [title, list] = useShows();

    const ListHeader = () => {

        return (
            <>
                <Text style={styles.title}>Melhores séries</Text>
            </>
        )
    }

    return (
        <View style={styles.listContainer}>
            <FlatList
                data={list}
                renderItem={({ item }) => <Show {...item} />}
                keyExtractor={({ name }) => name}
                ListHeaderComponent={ListHeader}
            />
        </View>
    )
}

const styles = StyleSheet.create({

    listContainer: {
        marginBottom: 314
    },  

    title: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 24,
        fontWeight: 'bold',
        color: "#fafafa"
    }
})
