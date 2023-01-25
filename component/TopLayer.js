import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TopLayer = ({ backgound }) => {
    return (
        <View style={backgound ? styles.container : styles.darkmode}>
            <Text style={backgound ? styles.title : styles.darkmodeTitle}>Yum</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#5BC0F8",
        padding: 30,
        alignSelf: "flex-start",
        alignItems: "center",
    },
    darkmode: {
        flex: 1,
        backgroundColor: "#333333",
        padding: 30,
        alignSelf: "flex-start",
        alignItems: "center",
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
    },
    darkmodeTitle: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#ffffff",
    },
});

export default TopLayer;