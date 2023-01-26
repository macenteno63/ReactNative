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
        width: 20,
        height: 20,
    },
})


export default DifficultyAndTime;