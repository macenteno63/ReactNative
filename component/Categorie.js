import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

const Categorie = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=> console.log("test")}>
                <Text>vegetarian</Text>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        borderRadius:2,
        borderColor: "black",
        borderWidth: 2,
    },
})
export default Categorie;
