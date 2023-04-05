import {configureStore} from '@reduxjs/toolkit'
import {recetteReducer} from "./reducer/recetteReducer";
import {fetchRecette} from "./actions/actionsRecette";

export const store = configureStore({
    reducer:{
        recette : recetteReducer.reducer,
    },
})
store.dispatch(fetchRecette('a'));