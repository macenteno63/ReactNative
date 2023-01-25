import React from "react";
import {StyleSheet, Text, View} from "react-native";
import Cards from "./Cards";

const ContainerCards = ({backgound}) => {
    return (
        <View style={styles.container}>
            <Cards></Cards>
            <Cards></Cards>
            <Cards></Cards>
            <Cards></Cards>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 5,
        borderRadius: 10,
        flexWrap: 'wrap',
    },
    // darkmode: {
    //     flex: 1,
    //     backgroundColor: '#000000',
    //     flexDirection: 'column',
    //     justifyContent: 'space-between',
    // }
})

export default ContainerCards;