import {Button, ScrollView, TextInput, StyleSheet, View} from "react-native";
import {useState} from "react";
import {useSelector} from "react-redux";
import ContainerCards from "./ContainerCards";

const Research = ({navigation}) => {
    const [rech,setRech] = useState("");
    const recipes = useSelector(state => state.recette.recettes)
    const [resultat,setResultat]=useState([])
    function addResearch(){
        setResultat([])
        setResultat(recipes.filter(meal => meal.strMeal.includes(rech)))
    }
    return (
        <ScrollView>
            <TextInput style={styles.research} placeholder={"Research meal "} onChangeText={(e)=> setRech(e)}></TextInput>
            <Button title={"Recherche"} onPress={()=> addResearch()}/>
            <ContainerCards navigation={navigation} recipes={resultat}/>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    research: {
        height: 40,
        margin: 12,
        padding: 10,
        borderWidth: 1,
    },
});

export default Research;
