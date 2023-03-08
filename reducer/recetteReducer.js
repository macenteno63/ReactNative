import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const recetteReducer = createSlice({
    name: "recettes",
    initialState: {
        recettes: null,
        favori: [],
    },
    reducers: {
        getRecette:(state, action)=>{
            state.recettes=action.payload
        },
        addFavori: (state,action)=>{
            state.favori.push(action.payload);
        },
        unFavori:(state, action)=>{
            state.favori = state.favori.filter(r => r.idMeal !== action.payload)
        },
    },
});

export const fetchRecette = () => {
    return (dispatch) => {
        return axios
            .get('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
            .then((res) => {
                dispatch({ type: "recettes/getRecette", payload: res.data.meals });
            })
            .catch((err) => console.log(err))
    };
};
export const { getRecette, addFavori, unFavori} = recetteReducer.actions;