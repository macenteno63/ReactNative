import {StyleSheet, SafeAreaView, Platform,} from 'react-native';
import Navigation from "./Navigation/Navigation";
import BottomNavigation from './Navigation/BottomNavigation';
import {store} from "./store";
import {Provider} from "react-redux";
import { StatusBar } from 'expo-status-bar';

export default function App() {

    return (
        <Provider store={store}>
            <SafeAreaView style={styles.container}>
                <BottomNavigation/>
                {/*<Navigation></Navigation>*/}
            </SafeAreaView>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
});