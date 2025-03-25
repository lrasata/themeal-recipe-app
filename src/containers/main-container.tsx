import SearchBar from "../components/search-bar";
import {Alert, Box, Typography} from "@mui/material";
import CardResultContainer from "./card-result-container";
import {useEffect, useState} from "react";
import {fetchDataByFilterType, fetchDataBySearchedTerm} from "../util/http";
import {MealCardProps} from "../components/meal-card";
import Spinner from "../components/spinner";
import FiltersContainer from "./filters-container";
import {FilterItemProps} from "../components/filter";

const MainContainer = () => {
    const [searchText, setSearchText] = useState("");
    const [recipes, setRecipes] = useState<MealCardProps[]>([]);
    const [searchPerformed, setSearchPerformed] = useState(false);
    const [loading, setLoading] = useState(false);

    const [categoryFilterItems, setCategoryFilterItems] = useState<FilterItemProps[]>([]);
    const [areaFilterItems, setAreaFilterItems] = useState<FilterItemProps[]>([]);


    const handleSearch = (searchText: string) => {
        setSearchText(searchText);
    }

    useEffect(() => {
        if (searchText !== '') {
            setSearchPerformed(true);
            setLoading(true)
            fetchDataBySearchedTerm(setRecipes, setLoading, searchText)
        }
    }, [searchText]);

    useEffect(() => {
        // TODO this can be optimised to handle x amount of filters
        fetchDataByFilterType(setAreaFilterItems, 'area');
        fetchDataByFilterType(setCategoryFilterItems, 'category');
    }, []);


    return <>
        <Box my={6} justifyContent={'center'} display={'flex'} flexDirection={'column'} alignItems={'center'}>
            <Typography component="h1" variant="h4" gutterBottom>
                The Meal Recipe
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
                Search for your favourite meal
            </Typography>
        </Box>
        <Box mb={3}>
            <SearchBar handleSearch={handleSearch}/>
            <FiltersContainer filters={[{type: 'area', filterItems: areaFilterItems}, {type: 'category', filterItems: categoryFilterItems}]} />
        </Box>
        <>
            {
                loading ? <Spinner /> : <>
                    {
                        recipes && recipes.length > 0 && <CardResultContainer searchedWord={searchText} mealCards={recipes}/>
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