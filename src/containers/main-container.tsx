import SearchBar from "../components/search-bar";
import {Alert, Box, Typography} from "@mui/material";
import CardResultContainer from "./card-result-container";
import {useEffect, useState} from "react";
import {fetchDataByFilterType, fetchDataBySearchText} from "../util/http";
import {MealCardProps} from "../components/meal-card";
import Spinner from "../components/spinner";
import FiltersContainer from "./filters-container";
import {FilterItemProps} from "../components/filter";
import {useDispatch, useSelector} from "react-redux";
import {searchTextActions} from "../redux-store/search-text";

const MainContainer = () => {
    // @ts-ignore
    const searchTextSelector = useSelector(state => state.searchText.searchText);
    // @ts-ignore
    const favouriteRecipesSelector = useSelector(state => state.favouriteRecipes.recipes);

    const dispatch = useDispatch();

    const [searchWord, setSearchWord] = useState(searchTextSelector);
    const [recipes, setRecipes] = useState<MealCardProps[]>([]); // TODO to improve UX save this in redux store so it is not fetched all the time
    const [searchPerformed, setSearchPerformed] = useState(false);
    const [loading, setLoading] = useState(false);

    const [categoryFilterItems, setCategoryFilterItems] = useState<FilterItemProps[]>([]);
    const [areaFilterItems, setAreaFilterItems] = useState<FilterItemProps[]>([]);

    useEffect(() => {
            setSearchPerformed(true);
            setLoading(true)
            fetchDataBySearchText(setRecipes, setLoading, searchWord, [...favouriteRecipesSelector]);
    }, [searchWord, favouriteRecipesSelector]);

    useEffect(() => {
        // TODO this can be optimised to handle x amount of filters
        fetchDataByFilterType(setAreaFilterItems, 'area');
        fetchDataByFilterType(setCategoryFilterItems, 'category');
    }, []);

    const handleSearch = (searchText: string) => {
        setSearchWord(searchText);
        dispatch(searchTextActions.updateSearchText({searchText}));
    }

    return <>
        <Box my={6} justifyContent={'center'} display={'flex'} flexDirection={'column'} alignItems={'center'}>
            <Typography component="h1" variant="h4" gutterBottom>
                The Meal recipe db
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
                Search for your favourite meal
            </Typography>
        </Box>
        <Box mb={3}>
            <SearchBar inputSearchText={searchWord} handleSearch={handleSearch}/>
            <FiltersContainer filters={[{type: 'area', filterItems: areaFilterItems}, {type: 'category', filterItems: categoryFilterItems}]} />
        </Box>
        <>
            {
                loading ? <Spinner /> : <>
                    {
                        recipes && recipes.length > 0 && <CardResultContainer searchedWord={searchWord} mealCards={recipes} path="/" />
                    }
                    {
                        recipes.length === 0 && searchPerformed && <Alert severity="info">No recipes found.</Alert>
                    }
                </>
            }

        </>


    </>
}

export default MainContainer;