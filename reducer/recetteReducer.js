import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {storeFavoriteRecette} from "../actions/actionsRecette";


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
        getFavoris:(state,action)=>{
           state.favori = action.payload
        },
        addFavori: (state,action)=>{
            state.favori.push(action.payload);
            storeFavoriteRecette(state.favori);
        },
        unFavori:(state, action)=>{
            state.favori = state.favori.filter(r => r.idMeal !== action.payload);
            storeFavoriteRecette(state.favori);
        },
    },
});

export const { getRecette, addFavori, unFavori,getFavoris} = recetteReducer.actions;