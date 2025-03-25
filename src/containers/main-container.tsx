import SearchBar from "../components/search-bar";
import {Alert, Box, Typography} from "@mui/material";
import CardResultContainer from "./card-result-container";
import {useEffect, useState} from "react";
import {fetchDataBySearchedTerm} from "../util/http";
import {MealCardProps} from "../components/meal-card";
import Spinner from "../components/spinner";

const MainContainer = () => {
    const [searchText, setSearchText] = useState("");
    const [recipes, setRecipes] = useState<MealCardProps[]>([]);
    const [searchPerformed, setSearchPerformed] = useState(false);
    const [loading, setLoading] = useState(false);

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
        </Box>
        <>
            {
                loading ? <Spinner /> : <>
                    {
                        recipes && recipes.length > 0 && <CardResultContainer mealCards={recipes}/>
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