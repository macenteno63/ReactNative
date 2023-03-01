import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useSelector} from "react-redux";
import Cards from "./Cards";

const ContainerFavoris = () => {
    const favoris = useSelector(state => state.recette.favori)
    function createCards() {
        const cards = []
        for (let i = 0; i < favoris.length; i++) {
            cards.push(
                <TouchableOpacity onPress={()=> navigation.navigate("RecetteDetail", {"recipe":favoris[i]})}>
                    <Cards recipe={favoris[i]} key={i}></Cards>
                </TouchableOpacity>
            );
        }
        return cards
    }
    return (
        <View style={styles.container}>
            {favoris !== null && createCards()}
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        margin: 20,
        flexWrap: 'wrap',
    },
})

export default ContainerFavoris;
