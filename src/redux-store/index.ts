import { configureStore } from '@reduxjs/toolkit';
import favouriteRecipesReducer from "./favourite-recipes";
import searchTextReducer from "./search-text"

const store = configureStore({
    reducer: { searchText: searchTextReducer, favouriteRecipes: favouriteRecipesReducer },
});

export default store;