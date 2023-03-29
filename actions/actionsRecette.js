import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {getFavoris} from "../reducer/recetteReducer";

export const fetchRecette = () => {
    return async (dispatch) => {
        return axios
            .get('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
            .then((res) => {
                dispatch({ type: "recettes/getRecette", payload: res.data.meals });
            })
            .catch((err) => console.log(err))
    };
};
export const fetchApi = () => {
    return axios
        .get('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
        .then((res) => {
            return res.data.meals
        })
        .catch((err) => console.log(err))
}
export const storeFavoriteRecette = async (recettesFavoris) => {
    try {
        const jsonRecette = JSON.stringify(recettesFavoris)
        await AsyncStorage.setItem('favorite_recettes', jsonRecette);
    } catch (e) {
        console.log("An error occurred", e);
    }
}
export const getFavoriteRecettes = () => {
    return async (dispatch)=>{
        try {
            const jsonRecette = await AsyncStorage.getItem('favorite_recettes')
            return jsonRecette != null ? dispatch(getFavoris(JSON.parse(jsonRecette))) : dispatch(getFavoris([]));
        } catch(e) {
            console.log("An error occurred", e);
        }
    }
}