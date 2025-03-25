import {Box, Typography} from "@mui/material";
import Grid from '@mui/material/Grid2';
import MealCard, {MealCardProps} from "../components/meal-card";
import {useState} from "react";
import {RecipeContentProps} from "../components/recipe-content";
import {useDispatch} from "react-redux";
import {favouriteRecipesActions} from "../redux-store/favourite-recipes";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Dialog from "../components/dialog";


interface CardResultContainerProps {
    searchedWord?: string,
    path: string,
    mealCards: MealCardProps[];
}

const CardResultContainer = ({searchedWord, path, mealCards}: CardResultContainerProps) => {
    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);
    const [dialogTitle, setDialogTitle] = useState<string>("");
    const [recipeContentToDisplay, setRecipeContentToDisplay] = useState<RecipeContentProps>();

    const title = path === '/' ? `Showing ${mealCards.length} results for "${searchedWord}"` : 'Your favourite recipes';

    const handleClickOpen = (meal: MealCardProps) => {
        setOpen(true);
        setDialogTitle(meal.title);
        setRecipeContentToDisplay(
            {
                ingredients: meal.ingredients,
                instructions: meal.instructions,
                imageUrl: meal.imageUrl,
                altImage: meal.altImage
            }
        );

    };

    const handleAddToFavourites = (meal: MealCardProps) => {
        dispatch(favouriteRecipesActions.saveFavouriteRecipes(meal));
    }

    const handleRemoveFromFavourites = (meal: MealCardProps) => {
        dispatch(favouriteRecipesActions.removeFromFavouriteRecipes({
            id: meal.id,
        }));
    }

    const handleClose = () => {
        setOpen(false);
    };

    const getCardActionIcon = (meal: MealCardProps) => {
        if (path === '/') {
            if (meal.isFavourite) {
                return <FavoriteIcon />
            }
            return <FavoriteBorderIcon />
        }
        return <DeleteOutlineIcon />
    }

    const getCardActionText = (meal: MealCardProps) => {
        if (path === '/') {
            if (meal.isFavourite) {
                return "Added to favourites"
            }
            return "Add to favourites"
        }
        return "Remove from favourites"
    }

    return <Box sx={{flexGrow: 1}}>
        {
            searchedWord !== '' && <Typography variant="subtitle2" my={2}>{title}</Typography>
        }
        <Grid container spacing={{xs: 1, md: 3}} columns={{xs: 1, sm: 6, md: 12}}>
            {
                mealCards.map((mealCard: MealCardProps, index) => (
                    <Grid size={{xs: 1, sm: 3, md: 4}} key={`${mealCard.title}-${index}`}>
                        <MealCard {...mealCard}
                                  onClickOpenDetails={() => handleClickOpen(mealCard)}
                                  cardActionIcon={getCardActionIcon(mealCard)}
                                  cardActionText={getCardActionText(mealCard)}
                                  {...path === '/' && !mealCard.isFavourite && {
                                      onClickCardAction: () => handleAddToFavourites(mealCard)
                                  }}
                                  {...path !== '/' && {
                                      onClickCardAction: () => handleRemoveFromFavourites(mealCard)
                                  }}
                        />
                    </Grid>
                ))
            }
        </Grid>
        <Dialog
            open={open}
            onClose={handleClose}
            title={dialogTitle}
            recipeContent={recipeContentToDisplay}
        />
    </Box>
}

export default CardResultContainer;