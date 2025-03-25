import {useSelector} from "react-redux";
import CardResultContainer from "../containers/card-result-container";

const FavouritesPage = () => {

    // @ts-ignore
    const favouriteRecipesSelector = useSelector((state) => state.favouriteRecipes.recipes);

    return <CardResultContainer mealCards={favouriteRecipesSelector} path="/favourites" />;
}

export default FavouritesPage;