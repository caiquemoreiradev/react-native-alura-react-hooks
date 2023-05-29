import React, { useReducer, useMemo } from "react";
import { Text, TouchableOpacity, View, Image, StyleSheet } from "react-native";

import StarsContainer from "./StarsContainer";

export default function Show({ name, poster, stars, seasons, description }) {

    //const [ selecionado, setSelecionado] = useState(false);

    //useReducer alternar estado da variável
    const [selected, setSelected] = useReducer(
        (selected) => !selected,
        false
    );


    return (
        <TouchableOpacity style={styles.card}
            onPress={setSelected}
        >
            <Image style={styles.image} source={poster} accessibilityLabel={name} />
            <View style={styles.info}>
                <View>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.seasons}>Temporadas: {seasons}</Text>
                    <StarsContainer
                        quantity={stars}
                        editable={selected}
                        expanded={selected}
                    />
                </View>
                <Text style={styles.description} numberOfLines={5}>{description}</Text>
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    card: {
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 6,
        flexDirection: 'row',
        borderBottomColor: "#A3A3A3",
        borderBottomWidth: 1,
        paddingVertical: 16
    },

    image: {
        width: 120,
        height: 220,
        borderRadius: 6,
        marginVertical: 16,
        marginLeft: 16
    },

    info: {
        flex: 1,
        marginLeft: 16,
        marginVertical: 16,
    },

    name: {
        fontSize: 20,
        lineHeight: 22,
        fontWeight: 'bold',
        marginBottom: 4,
        color: '#2A9F85'
    },

    seasons: {
        fontSize: 12,
        lineHeight: 19,
        fontWeight: 'bold',
        color: "#fafafa",
        marginBottom: 16,
    },

    description: {
        fontSize: 12,
        lineHeight: 19,
        color: "#a3a3a3",
        marginTop: 20,
    }
});