import React from "react";
import { TouchableOpacity, Image, StyleSheet} from 'react-native';

import star from '../../../assets/star.png';
import grayStar from '../../../assets/grayStar.png';


export default function Star({ 
    onPress, 
    disabled = true,
    preenchida,
    expanded = false,
}){

    const styles = stylesFunction(expanded);

    const getImage = () => {

        if(preenchida ){

            return star;
        }
        return grayStar;
    }
    return(
        <TouchableOpacity 
                
                onPress={onPress}
                disabled={disabled}
            >
            <Image style={styles.star} source={getImage()} />
            </TouchableOpacity>
    )
}

const stylesFunction = (expanded) => StyleSheet.create({

    star :{
        width: expanded ? 24 : 16,
        height: expanded ? 24 : 16,
        marginRight: 2
    },
});