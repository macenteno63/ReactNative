import { View, Image, StyleSheet } from "react-native";



const DifficultyAndTime = () => {

    return (
        <View>
            <Image source={require('../assets/clockBlack.svg')} style={styles.clock} />
        </View>
    );
}

const styles = StyleSheet.create({
    clock: {
        alignSelf: 'flex-start',
        width: 20,
        height: 20,
    },
    time: {
        alignSelf: 'flex-end',
        paddingRight: 10,
        paddingTop: 5,
    },
})


export default DifficultyAndTime;