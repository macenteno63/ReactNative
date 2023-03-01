import React from "react";
import {StyleSheet, Text, View, Image, Button} from "react-native";
import DifficultyAndTime from "./DifficultyAndTime";
import {isEmpty} from "../util";
import {useDispatch, useSelector} from "react-redux";
import {addFavori, unFavori} from "../reducer/recetteReducer";
import { TouchableOpacity } from "react-native-gesture-handler";

const Cards = ({recipe}) => {
    const dispatch = useDispatch()
    const favori = useSelector(state => state.recette.favori)

    function listIngredient(){
            return <Text>{recipe.strIngredient1}</Text>
    }
    const isFavori = () => {
        return favori.find((r) => r === recipe.idMeal) !== undefined;
    }
    return (
        <View style={styles.container}>
            <Image source={{uri:recipe.strMealThumb}} style={styles.image}/>
            <Text style={styles.titre}>{recipe.strMeal}</Text>
            <Button title={"Fav"} onPress={()=> isFavori() ? dispatch(unFavori(recipe.idMeal)) : dispatch(addFavori(recipe.idMeal))}/>
            <TouchableOpacity
                onPress={() => isFavori() ? dispatch(unFavori(recipe.idMeal)) : dispatch(addFavori(recipe.idMeal))}
                
            >
                <Image source={
                    isFavori() ? require('../assets/favori.png') : require('../assets/nonFavori.png')
                }/>
            </TouchableOpacity>
            {/* <DifficultyAndTime difficulty={recipe.strCategory} time={recipe.strArea}/> */}
            <DifficultyAndTime />
        </View>
    );
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
    time: {
        alignSelf: 'flex-end',
    },

})

export default Cards;