import React from 'react';
import {FlatList, StyleSheet, Text, View} from "react-native";
import {isEmpty} from "../util";

const CardDetail = ({route}) => {
    const recette = route.params.recipe
    function ingredient(){ // l'api est toute nul y'a pas de liste d'ingedients va falloir parcourir les 20 ingrédients et vérifié que c'est pas nul
        // puis les mettre dans une flatlist
        let ingredient = []
        let test;
        for (let i = 1; i < 21; i++) {
            if (isEmpty(recette["strIngredient" +i]))
                break;
            test= "strIngredient" + i
            console.log(test)
            ingredient.push(recette["strIngredient" +i])
        }
        return ingredient;
    }
    return (
        <View>
            <Text> nom: {recette.strMeal}</Text>
            <Text>categorie : {recette.strCategory}</Text>
            <Text>origine : {recette.strArea}</Text>
            <Text>recette : {recette.strInstructions}</Text>
            <Text style={styles.titre}>Voici la liste des ingrédients :</Text>
            <FlatList data={ingredient()} renderItem={({item}) => <Text>- {item}</Text>}/>
        </View>
    );
};
const styles = StyleSheet.create({
    titre:{
        fontWeight: 'bold',
    }
})
export default CardDetail;