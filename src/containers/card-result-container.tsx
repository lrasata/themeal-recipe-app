import {Box} from "@mui/material";
import Grid from '@mui/material/Grid2';
import MealCard, {MealCardProps} from "../components/meal-card";
import {useState} from "react";
import Dialog from "../components/dialog";
import {RecipeContentProps} from "../components/recipe-content";


interface CardResultContainerProps {
    mealCards: MealCardProps[];
}

const CardResultContainer = ({ mealCards }: CardResultContainerProps) => {
    const [open, setOpen] = useState(false);
    const [dialogTitle, setDialogTitle] = useState<string>("");
    const [recipeContentToDisplay, setRecipeContentToDisplay] = useState<RecipeContentProps>();

    const handleClickOpen = (meal: MealCardProps) => {
        setOpen(true);
        setDialogTitle(meal.title);
        setRecipeContentToDisplay(meal.recipeContent);

    };

    const handleClose = () => {
        setOpen(false);
    };

    return <Box sx={{flexGrow: 1}}>
        <Grid container spacing={{xs: 1, md: 3}} columns={{xs: 1, sm: 6, md: 12}}>
            {
                mealCards.map((mealCard: MealCardProps, index) => (
                    <Grid size={{xs: 1, sm: 3, md: 4}} key={`${mealCard.title}-${index}`}>
                        <MealCard {...mealCard} onClick={() => handleClickOpen(mealCard)}/>
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