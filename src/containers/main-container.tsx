import SearchBar from "../components/search-bar";
import {Alert, Box, Typography} from "@mui/material";
import CardResultContainer from "./card-result-container";
import {useEffect, useState} from "react";
import {fetchDataByFilterType} from "../util/http";
import Spinner from "../components/spinner";
import FiltersContainer from "./filters-container";
import {useDispatch, useSelector} from "react-redux";
import {FilterItemProps} from "../components/types";
import {fetchDataBySearchText} from "../redux-store/fetched-recipes-slice";

const MainContainer = () => {
    const dispatch = useDispatch();
    // @ts-ignore
    const searchTextSelector = useSelector(state => state.fetchedRecipes.searchText);
    // @ts-ignore
    const fetchedRecipesSelector = useSelector(state => state.fetchedRecipes.recipes);
    // @ts-ignore
    const isLoading = useSelector((state) => state.fetchedRecipes.isLoading)

    // @ts-ignore
    const favouriteRecipesSelector = useSelector(state => state.favouriteRecipes.recipes);

    const [searchWord, setSearchWord] = useState(searchTextSelector);
    const [categoryFilterItems, setCategoryFilterItems] = useState<FilterItemProps[]>([]);
    const [areaFilterItems, setAreaFilterItems] = useState<FilterItemProps[]>([]);

    useEffect(() => {
        fetchDataByFilterType(setAreaFilterItems, 'area');
        fetchDataByFilterType(setCategoryFilterItems, 'category');
    }, []);

    const handleSearch = (searchText: string) => {
        setSearchWord(searchText);
        // @ts-ignore
        dispatch(fetchDataBySearchText({searchedWord: searchText, favouriteRecipes: [...favouriteRecipesSelector] }))
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
                isLoading ? <Spinner /> : <>
                    {
                        fetchedRecipesSelector && fetchedRecipesSelector.length > 0 && <CardResultContainer searchedWord={searchWord} mealCards={fetchedRecipesSelector} path="/" />
                    }
                    {
                        fetchedRecipesSelector.length === 0 && <Alert severity="info">No recipes found.</Alert>
                    }
                </>
            }

        </>


    </>
}

export default MainContainer;