import SearchBar from "../components/search-bar";
import {Box, Typography} from "@mui/material";
import CardResultContainer from "./card-result-container";

const MainContainer = () => {
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
            <SearchBar searchText={'this is a text'} />
        </Box>
        <CardResultContainer />
    </>
}

export default MainContainer;