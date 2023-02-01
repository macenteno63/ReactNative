import React from "react";
import {StyleSheet, Text, View, Image} from "react-native";
import DifficultyAndTime from "./DifficultyAndTime";

const Cards = ({recipe}) => {
    return (
        <View style={styles.container}>
            <Image source={{uri:recipe.strMealThumb}} style={styles.image}/>
            {/* <DifficultyAndTime/> */}
            <Text style={styles.text}>{recipe.strMeal}</Text>
            <Text style={styles.difficulty}>Easy</Text>
            <Text style={styles.time}>20 min</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        paddingBottom: 10,
        margin: 10,
        alignItems: 'center',
        width: 150,
        height: 250,
    },
    image: {
        width: 150,
        height: 100,
        borderRadius: 10,
    },
    text: {
        alignSelf: 'flex-start',
        fontWeight: 'bold',
        paddingTop: 5,
        paddingHorizontal: 10,
    },
    difficulty: {
        alignSelf: 'flex-start',
        paddingLeft: 10,
        paddingTop: 5,
    },

})

export default Cards;