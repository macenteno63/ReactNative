import {Button, Image, Text, TextInput, View} from "react-native";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {recherche} from "../reducer/recetteReducer";
const Research = () => {
    const [rech,setRech] = useState("a");
    const recipes = useSelector(state => state.recette.recettes)
    const dispatch = useDispatch()
    function addResearch(){
        for(let meal of recipes){
            // if(meal.strMeal.search(rech)!==-1){
            //     dispatch(recherche(meal))
            // }
            dispatch(recherche(meal))
        }
    }
    return (
        <View>
            <TextInput placeholder={"research meal"} onChangeText={(e)=> setRech(e)}></TextInput>
            <Button title={"recherche"} onPress={()=> addResearch()}/>
        </View>
    );
};

export default Research;
