import React from 'react';
import {ScrollView, Text} from "react-native";
import TopLayer from "./TopLayer";
import ContainerCards from "./ContainerCards";

const Home = ({navigation}) => {
    return (
        <ScrollView>
            <TopLayer/>
            <ContainerCards navigation={navigation}/>
        </ScrollView>
    );
};

export default Home;