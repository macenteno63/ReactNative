import {Button, Image, ScrollView, Text, TextInput, View} from "react-native";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {recherche} from "../reducer/recetteReducer";
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
            <TextInput placeholder={"research meal"} onChangeText={(e)=> setRech(e)}></TextInput>
            <Button title={"recherche"} onPress={()=> addResearch()}/>
            <ContainerCards navigation={navigation} recipes={resultat}/>
        </ScrollView>
    );
};

export default Research;
