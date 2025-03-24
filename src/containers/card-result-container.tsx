import {Box} from "@mui/material";
import Grid from '@mui/material/Grid2';
import MealCard, {MealCardProps} from "../components/meal-card";


interface CardResultContainerProps {
    mealCards: MealCardProps[];
}

const CardResultContainer = ({ mealCards }: CardResultContainerProps) => {
    return <Box sx={{flexGrow: 1}}>
        <Grid container spacing={{xs: 1, md: 3}} columns={{xs: 1, sm: 6, md: 12}}>
            {
                mealCards.map((mealCard: MealCardProps, index) => (
                    <Grid size={{xs: 1, sm: 3, md: 4}} key={`${mealCard.title}-${index}`}>
                        <MealCard {...mealCard} />
                    </Grid>
                ))
            }
        </Grid>
    </Box>
}

export default CardResultContainer;