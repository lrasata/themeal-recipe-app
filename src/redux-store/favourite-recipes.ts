import { createSlice } from '@reduxjs/toolkit';

const initialFavouriteRecipesState = {recipes: []};

const favouriteRecipesSlice = createSlice({
    name: 'favouriteRecipes',
    initialState: initialFavouriteRecipesState,
    reducers: {
        saveFavouriteRecipes(state, action) {
            // @ts-ignore
            state.recipes = [...state.recipes, action.payload];
        },
    },
});

export const favouriteRecipesActions = favouriteRecipesSlice.actions;

export default favouriteRecipesSlice.reducer;