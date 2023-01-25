import React from "react";
import {StyleSheet, Text, View, Image} from "react-native";

const Cards = ({backgound}) => {
    return (
        <View style={backgound ? styles.container : styles.darkmode}>
            <Image source={require('../assets/pateCarbo.jpg')} style={styles.image}/>
            <Text style={styles.text}>Pate Carbo</Text>
            <Text style={styles.difficulty}>Easy</Text>
            <Text style={styles.time}>20 min</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 10,
    },
    // darkmode: {
    //     flex: 1,
    //     backgroundColor: '#000000',
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     borderRadius: 10,
    // },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },

})

export default Cards;