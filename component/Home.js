import React, {useState} from 'react';
import { ScrollView, Text} from "react-native";
import TopLayer from "./TopLayer";
import ContainerCards from "./ContainerCards";
import {useSelector} from "react-redux";

const Home = ({navigation}) => {
    const recipes = useSelector(state => state.recette.recettes)
    return (
        <ScrollView>
            <TopLayer/>
            <ContainerCards navigation={navigation} recipes={recipes}/>
        </ScrollView>
    );
};

export default Home;