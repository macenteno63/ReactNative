import {StatusBar} from 'expo-status-bar';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import BottomNav from "./component/BottomNav";
import {useState} from "react";

export default function App() {
    const [color, setColor] = useState(true)
    return (
        <View style={color ? styles.container : styles.test}>
            <Button title={"test"} onPress={event => color ? setColor(false) : setColor(true)}/>
            <BottomNav backgound={color}></BottomNav>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#86A3B8',
        alignItems: 'flex-end',
        flexDirection: "row",
    },
    test: {
        flex: 1,
        backgroundColor: '#FFFF',
        alignItems: 'flex-end',
        flexDirection: "row",
    }
});
