import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useSelector} from "react-redux";
import Cards from "./Cards";
import ContainerCards from "./ContainerCards";

const ContainerFavoris = ({navigation}) => {

    const favoris = useSelector(state => state.recette.favori)
    
    return (
        <ScrollView style={styles.container}>
            {favoris !== null && <ContainerCards navigation={navigation} recipes={favoris}/>}
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        // flexDirection: 'row',
        // justifyContent: 'space-evenly',
        // margin: 20,
        // flexWrap: 'wrap',
    },
})

export default ContainerFavoris;
