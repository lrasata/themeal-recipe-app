import { createSlice } from '@reduxjs/toolkit';

const initialSearchTextState = {searchText: ''};

const searchTextSlice = createSlice({
    name: 'searchText',
    initialState: initialSearchTextState,
    reducers: {
        updateSearchText(state, action) {
            // @ts-ignore
            state.searchText = action.payload.searchText;
        },
    },
});

export const searchTextActions = searchTextSlice.actions;

export default searchTextSlice.reducer;