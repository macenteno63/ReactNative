import { View, Image, StyleSheet, Text } from "react-native";
import Time from "./Time";


const DifficultyAndTime = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.difficulty}>Easy</Text>
            <Time />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 5,
    },
    difficulty: {
        fontStyle: 'italic',
        alignSelf: 'flex-start',
        marginTop: 5,
    },
})


export default DifficultyAndTime;