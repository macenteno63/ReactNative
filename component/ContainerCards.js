import React, {useEffect, useState} from "react";
import {StyleSheet, Text, View,} from "react-native";
import Cards from "./Cards";
import axios from "axios";
const ContainerCards = () => {
    const [recipes,setRecipes]=useState(null)
// Fetch the recipes
    const fetchMeal = async () => {
        await axios({
            method: "GET",
            url: "https://www.themealdb.com/api/json/v1/1/search.php?f=a",
        })
            .then((res) => {
                setRecipes(res.data.meals);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        fetchMeal();
    },[recipes]);

    function createCards() {
        const cards = [];
        for (let i = 0; i < 10; i++) {
            cards.push(<Cards key={i}></Cards>);
        }
        return cards;
    }



    return (
        <View style={styles.container}>
            {/*{createCards()}*/}
            {/*{recipes !== null && recipes.map((rec)=>{*/}
            {/*    <Cards recipe={rec} key={rec.idMeal}></Cards>*/}
            {/*})}*/}
            {recipes !== null && <Cards recipe={recipes[0]}/>}
            {recipes !== null && <Cards recipe={recipes[1]}/>}
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