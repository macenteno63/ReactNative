import React, {useEffect, useState} from "react";
import {StyleSheet, Text, TouchableOpacity, View,} from "react-native";
import Cards from "./Cards";
import axios from "axios";
import {useSelector} from "react-redux";
const ContainerCards = ({navigation}) => {
    // const [recipes,setRecipes]=useState(null)
    const recipes = useSelector(state => state.recette.recettes)
    console.log(recipes)
// Fetch the recipes
//     const fetchMeal = async () => {
//         await axios({
//             method: "GET",
//             url: "https://www.themealdb.com/api/json/v1/1/search.php?f=a",
//         })
//             .then((res) => {
//                 setRecipes(res.data.meals);
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     };
//
//     useEffect(() => {
//         fetchMeal();
//     },[]);

    function createCards() {
        const cards = []
        for (let i = 0; i < recipes.length; i++) {
            cards.push(
                <TouchableOpacity onPress={()=> navigation.navigate("RecetteDetail", {"recipe":recipes[i]})}>
                    <Cards recipe={recipes[i]} key={i}></Cards>
                </TouchableOpacity>
            );
        }
        return cards
    }



    return (
        <View style={styles.container}>
            {recipes !== null && createCards()}
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        margin: 20,
        flexWrap: 'wrap',
    },
})

export default ContainerCards;