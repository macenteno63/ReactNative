import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import Cards from "./Cards";
import ContainerCards from "./ContainerCards";
import {useEffect} from "react";
import {getFavoriteRecettes} from "../actions/actionsRecette";

const ContainerFavoris = ({navigation}) => {
    const dispatch = useDispatch()
    const favoris = useSelector(state => state.recette.favori)
    useEffect(() => {
        dispatch(getFavoriteRecettes())
    }, [dispatch]);
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
