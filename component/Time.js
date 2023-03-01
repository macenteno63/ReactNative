import { View, Image, StyleSheet, Text } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { EvilIcons } from '@expo/vector-icons';



const Time = () => {

    return (
        <View style={styles.container}>
            <EvilIcons name="clock" size={24} color="black"/>
            <Text>30 min</Text>
        </View>
    );
}


function ClockIcon() {
    return <FontAwesome size={30} name={"clock-circle-o"}/>;
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        marginHorizontal: 5,
    },
})


export default Time;