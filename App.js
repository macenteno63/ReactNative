import {StyleSheet, SafeAreaView, Platform,} from 'react-native';
import Navigation from "./Navigation/Navigation";
import BottomNavigation from './Navigation/BottomNavigation';

export default function App() {

    return (
        <SafeAreaView style={styles.container}>
            <BottomNavigation/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
});