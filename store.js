import {configureStore} from '@reduxjs/toolkit'
import {fetchRecette, getRecette, recetteReducer} from "./reducer/recetteReducer";

export const store = configureStore({
    reducer:{
        recette : recetteReducer.reducer,
    },
})
store.dispatch(fetchRecette())