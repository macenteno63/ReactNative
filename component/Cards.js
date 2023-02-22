import React from "react";
import {StyleSheet, Text, View, Image, Button} from "react-native";
import DifficultyAndTime from "./DifficultyAndTime";
import {isEmpty} from "../util";
import {useDispatch, useSelector} from "react-redux";
import {addFavori, unFavori} from "../reducer/recetteReducer";

const Cards = ({recipe}) => {
    const dispatch = useDispatch()
    const favori = useSelector(state => state.recette.favori)
    function listIngredient(){
            return <Text>{recipe.strIngredient1}</Text>
    }
    const isFavori = () => {
        return favori.find((r) => r === recipe.idMeal) !== undefined;
    }
    console.log(favori)
    return (
        <View style={styles.container}>
            <Image source={{uri:recipe.strMealThumb}} style={styles.image}/>
            <Text style={styles.text}>{recipe.strMeal}</Text>
            <Text style={styles.difficulty}>Easy</Text>
            <DifficultyAndTime/>
            <Text style={styles.time}>20 min</Text>
            <Button title={"Fav"} onPress={()=> isFavori() ? dispatch(unFavori(recipe.idMeal)) : dispatch(addFavori(recipe.idMeal))}/>
            {isFavori() ? <Text>favori</Text> : <Text>pas favori</Text>}
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
    time: {
        alignSelf: 'flex-end',
        paddingRight: 10,
        paddingTop: 5,
    },

})

export default Cards;