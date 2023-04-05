import {createSlice} from "@reduxjs/toolkit";
import {storeFavoriteRecette} from "../actions/actionsRecette";


export const recetteReducer = createSlice({
    name: "recettes",
    initialState: {
        recettes: null,
        favori: [],
    },
    reducers: {
        getRecette:(state, action)=>{
            if(state.recettes === null)
                state.recettes=action.payload
            else
                state.recettes=[...state.recettes,...action.payload]
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
        // clean:(state,action)=>{
        //     state.recettes = state.recettes.slice(0,5)
        // }
    },
});

export const { getRecette, addFavori, unFavori,getFavoris,clean} = recetteReducer.actions;