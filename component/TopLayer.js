
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TopLayer = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Yum</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#5BC0F8',
        padding: 30,
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000000',
    },
})

export default TopLayer;