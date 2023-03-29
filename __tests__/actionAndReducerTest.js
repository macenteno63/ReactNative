import {describe, expect, it} from "@jest/globals";
import {store} from "../store";
import {fetchApi, fetchRecette} from "../actions/actionsRecette";
import {addFavori, unFavori} from "../reducer/recetteReducer";
describe('testActionReducer', ()=>{
    let initialState = {
        recettes: null,
        favori: [],
    }
    const recipe = {"idMeal":"52771","strMeal":"Spicy Arrabiata Penne","strDrinkAlternate":null,"strCategory":"Vegetarian","strArea":"Italian","strInstructions":"Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.\r\nIn a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes. Add the chopped tomatoes, red chile flakes, Italian seasoning and salt and pepper to taste. Bring to a boil and cook for 5 minutes. Remove from the heat and add the chopped basil.\r\nDrain the pasta and add it to the sauce. Garnish with Parmigiano-Reggiano flakes and more basil and serve warm.","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/ustsqw1468250014.jpg","strTags":"Pasta,Curry","strYoutube":"https:\/\/www.youtube.com\/watch?v=1IszT_guI08","strIngredient1":"penne rigate","strIngredient2":"olive oil","strIngredient3":"garlic","strIngredient4":"chopped tomatoes","strIngredient5":"red chile flakes","strIngredient6":"italian seasoning","strIngredient7":"basil","strIngredient8":"Parmigiano-Reggiano","strIngredient9":"","strIngredient10":"","strIngredient11":"","strIngredient12":"","strIngredient13":"","strIngredient14":"","strIngredient15":"","strIngredient16":null,"strIngredient17":null,"strIngredient18":null,"strIngredient19":null,"strIngredient20":null,"strMeasure1":"1 pound","strMeasure2":"1\/4 cup","strMeasure3":"3 cloves","strMeasure4":"1 tin ","strMeasure5":"1\/2 teaspoon","strMeasure6":"1\/2 teaspoon","strMeasure7":"6 leaves","strMeasure8":"spinkling","strMeasure9":"","strMeasure10":"","strMeasure11":"","strMeasure12":"","strMeasure13":"","strMeasure14":"","strMeasure15":"","strMeasure16":null,"strMeasure17":null,"strMeasure18":null,"strMeasure19":null,"strMeasure20":null,"strSource":null,"strImageSource":null,"strCreativeCommonsConfirmed":null,"dateModified":null}

    it('should return initial state',()=>{
        const state = store.getState().recette;
        expect(state).toEqual(initialState);
    })

    it('should fecth recettes',async ()=>{
        // const mock = new MockAdapter(fetchApi)
        // mock.onGet('https://www.themealdb.com/api/json/v1/1/search.php?f=b').reply(200, getListResponse)
        await store.dispatch(fetchRecette());
        const state = store.getState().recette;
        expect(state).not.toEqual(initialState);

        const result = await fetchApi();
        expect(state.recettes).toEqual(result);
    })

    it('should add favorite',()=>{
        const state = store.getState().recette;
        expect(state.favori).toEqual([]);

        store.dispatch(addFavori(recipe))
        const newState = store.getState().recette;
        expect(newState.favori.length).toEqual(1);
        expect(newState.favori).toEqual([recipe]);
    })

    it('should unfavoris', ()=>{
        const state = store.getState().recette
        const longueur = state.favori.length
        store.dispatch(addFavori(recipe))
        const state1 = store.getState().recette
        expect(state1.favori.length).toEqual(longueur + 1)

        store.dispatch(unFavori(recipe))
        const newState = store.getState().recette
        expect(newState.favori.length).toEqual(longueur) // aucune idée de pourquoi ça passe pas
    })
});