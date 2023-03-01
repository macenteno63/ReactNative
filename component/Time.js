import { View, Image, StyleSheet, Text } from "react-native";


const Time = () => {

    return (
        <View style={styles.container}>
            <Image source={require('../assets/clockBlack.png')} style={styles.clock} />
            <Text>30 min</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    clock: {
        width: 20,
        height: 20,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        marginHorizontal: 5,
    },
})


export default Time;