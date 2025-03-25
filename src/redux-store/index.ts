import { configureStore } from '@reduxjs/toolkit';
import favouriteRecipesReducer from "./favourite-recipes.ts";


const store = configureStore({
    reducer: { favouriteRecipes: favouriteRecipesReducer },
});

export default store;