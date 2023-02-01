import React from 'react';
import {FlatList, Text, View} from "react-native";

const CardDetail = ({route}) => {
    const recette = route.params.recipe
    function ingredient(){ // l'api est toute nul y'a pas de liste d'ingedients va falloir parcourir les 20 ingrédients et vérifié que c'est pas nul
                            // puis les mettre dans une flatlist
        for (let i = 1; i < 21; i++) {

        }
    }
    return (
        <View>
            <Text> nom: {recette.strMeal}</Text>
            <Text>categorie : {recette.strCategory}</Text>
            <Text>origine : {recette.strArea}</Text>
            <Text>recette : {recette.strInstructions}</Text>

        </View>
    );
};

export default CardDetail;