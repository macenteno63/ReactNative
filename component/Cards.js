import React from "react";
import {StyleSheet, Text, View, Image, Button, TouchableOpacity} from "react-native";
import DifficultyAndTime from "./DifficultyAndTime";
import {useDispatch, useSelector} from "react-redux";
import {addFavori, unFavori} from "../reducer/recetteReducer";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Cards = ({recipe}) => {
    const dispatch = useDispatch()
    const favori = useSelector(state => state.recette.favori)

    function listIngredient(){
            return <Text>{recipe.strIngredient1}</Text>
    }

    
    /**
     * If the recipe is in the favorites array, return true, otherwise return false.
     * @returns The function isFavori is returning a boolean value.
     */
    const isFavori = () => {
        return favori.find((r) => r.idMeal === recipe.idMeal) !== undefined;
    }


    return (
        <View style={styles.container}>
            <Image source={{uri:recipe.strMealThumb}} style={styles.image}/>
            <Text style={styles.titre}>{recipe.strMeal}</Text>
            <DifficultyAndTime/>
            <TouchableOpacity onPress={()=> isFavori() ? dispatch(unFavori(recipe.idMeal)) : dispatch(addFavori(recipe))}  style={styles.star}>
                {isFavori() ? <StarIcon /> : <EmptyStarIcon />}
            </TouchableOpacity>
        </View>
    );
}




function StarIcon() {
    return <FontAwesome size={30} name={"star"}/>;
}


function EmptyStarIcon() {
    return <FontAwesome size={30} name={"star-o"}/>;
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        paddingBottom: 10,
        margin: 10,
        width: 150,
        height: 250,
        justifyContent: 'space-between',
    },
    image: {
        width: '100%',
        height: '40%',
        borderTopEndRadius: 10,
        borderTopStartRadius: 10,
    },
    titre: {
        alignSelf: 'flex-start',
        fontWeight: 'bold',
        marginTop: 5,
        marginHorizontal: 5,
    },
    star: {
        alignSelf: 'flex-end',
        marginHorizontal: 5,
    },
})

export default Cards;