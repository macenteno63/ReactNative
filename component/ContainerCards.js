import React from "react";
import {StyleSheet, View,} from "react-native";
import Cards from "./Cards";

const ContainerCards = () => {

    function createCards() {
        const cards = [];
        for (let i = 0; i < 10; i++) {
            cards.push(<Cards key={i}></Cards>);
        }
        return cards;
    }



    return (
        <View style={styles.container}>
            {createCards()}
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