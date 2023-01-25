import {StatusBar} from 'expo-status-bar';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import BottomNav from "./component/BottomNav";
import TopLayer from "./component/TopLayer";
import ContainerCards from "./component/ContainerCards";
import {useState} from "react";

export default function App() {
    const [color, setColor] = useState(true)

    return (
        <View style={color ? styles.container : styles.darkmode}>
            <TopLayer backgound={color}></TopLayer>
            <ContainerCards></ContainerCards>
            {/* <Button title={"test"} onPress={event => color ? setColor(false) : setColor(true)}/> */}
            <BottomNav backgound={color}></BottomNav>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#D6E4E5',
        alignItems: 'flex-end',
        flexDirection: "row",
    },
    darkmode: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'flex-end',
        flexDirection: "row",
    }
});