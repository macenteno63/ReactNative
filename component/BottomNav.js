import React from 'react';
import {StyleSheet, Text, View} from "react-native";

const BottomNav = ({backgound}) => {
    return (
        <View style={backgound ? styles.container : styles.darkmode}>
            <Text>home</Text>
            <Text>profil</Text>
            <Text>recherche</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    darkmode: {
        flex: 1,
        backgroundColor: '#86A3B8',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});

export default BottomNav;