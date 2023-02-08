import React from 'react';
import {FlatList, StyleSheet, Text, View} from "react-native";
import {isEmpty} from "../util";
import Cards from './Cards';
import {ScrollView} from "react-native-gesture-handler";

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
            ingredient.push(recette["strIngredient" +i])
        }
        return ingredient;
    }

    

    return (
        <ScrollView>
            {/* <Cards recipe={recette} /> */}
            {/* Refaire la carte */}
            <Text>Nom: {recette.strMeal}</Text>
            <Text>Categorie : {recette.strCategory}</Text>
            <Text>Origine : {recette.strArea}</Text>
            <Text>Recette : {recette.strInstructions}</Text>
            <Text style={styles.titre}>Liste des ingrédients : </Text>
            <FlatList data={ingredient()} renderItem={({item}) => <Text>- {item}</Text>}/>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    titre:{
        fontWeight: 'bold',
    },
})
export default CardDetail;