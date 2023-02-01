import {StyleSheet, View, SafeAreaView, Platform, ScrollView} from 'react-native';
import TopLayer from "./component/TopLayer";
import ContainerCards from "./component/ContainerCards";
import Navigation from "./Navigation/Navigation";

export default function App() {

    return (
        <SafeAreaView style={styles.container}>
            <Navigation/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D6E4E5',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
});