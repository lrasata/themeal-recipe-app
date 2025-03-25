import {Box, Typography} from "@mui/material";
import Grid from "@mui/material/Grid2";
import MealCard, {MealCardProps} from "../components/meal-card";
import {useSelector} from "react-redux";
import Dialog from "../components/dialog";
import {useState} from "react";
import {RecipeContentProps} from "../components/recipe-content";

const FavouritesPage = () => {

    // @ts-ignore
    const favouriteRecipesSelector = useSelector((state) => state.favouriteRecipes.recipes);
    const [open, setOpen] = useState(false);
    const [dialogTitle, setDialogTitle] = useState<string>("");
    const [recipeContentToDisplay, setRecipeContentToDisplay] = useState<RecipeContentProps>();

    const handleClose = () => {
        setOpen(false);
    };

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

    return <Box sx={{flexGrow: 1}}>
        <Typography variant="subtitle2" my={2}>Your favourite recipes</Typography>
        <Grid container spacing={{xs: 1, md: 3}} columns={{xs: 1, sm: 6, md: 12}}>
            {
                favouriteRecipesSelector && favouriteRecipesSelector.map((mealCard: MealCardProps, index) => (
                    <Grid size={{xs: 1, sm: 3, md: 4}} key={`${mealCard.title}-${index}`}>
                        <MealCard {...mealCard}
                                  onClickOpenDetails={() => handleClickOpen(mealCard)}
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
    </Box>;
}

export default FavouritesPage;