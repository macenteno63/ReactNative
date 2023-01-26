import {StyleSheet, View, SafeAreaView, Platform, ScrollView} from 'react-native';
import TopLayer from "./component/TopLayer";
import ContainerCards from "./component/ContainerCards";

export default function App() {

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <TopLayer/>
                <ContainerCards/>
            </ScrollView>
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