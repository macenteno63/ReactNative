import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from "react-native";
import TopLayer from "./TopLayer";
import ContainerCards from "./ContainerCards";
import {useSelector} from "react-redux";
import Categorie from "./Categorie";

const Home = ({navigation}) => {
    const recipes = useSelector(state => state.recette.recettes)
    return (
        <ScrollView>
            <TopLayer/>
            <View style={styles.container}>
                <Categorie/>
                <Categorie/>
                <Categorie/>
            </View>
            <ContainerCards navigation={navigation} recipes={recipes}/>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    container: {
        display: "flex",
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
    },
})
export default Home;