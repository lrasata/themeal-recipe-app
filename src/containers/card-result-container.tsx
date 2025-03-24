import {Box} from "@mui/material";
import Grid from '@mui/material/Grid2';
import MealCard from "../components/meal-card";

const CardResultContainer = () => {
    return <Box sx={{flexGrow: 1}}>
        <Grid container spacing={{xs: 1, md: 3}} columns={{xs: 1, sm: 6, md: 12}}>
            <Grid size={{xs: 1, sm: 3, md: 4}}>
                <MealCard title={'Spicy Arrabiata Penne'} altImage={'Spicy Arrabiata Penn'}
                          imageUrl={'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg'}/>
            </Grid>
            <Grid size={{xs: 1, sm: 3, md: 4}}>
                <MealCard title={'Spicy Arrabiata Penne'} altImage={'Spicy Arrabiata Penn'}
                          imageUrl={'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg'}/>
            </Grid>
            <Grid size={{xs: 1, sm: 3, md: 4}}>
                <MealCard title={'Spicy Arrabiata Penne'} altImage={'Spicy Arrabiata Penn'}
                          imageUrl={'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg'}/>
            </Grid>
            <Grid size={{xs: 1, sm: 3, md: 4}}>
                <MealCard title={'Spicy Arrabiata Penne'} altImage={'Spicy Arrabiata Penn'}
                          imageUrl={'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg'}/>
            </Grid>
            <Grid size={{xs: 1, sm: 3, md: 4}}>
                <MealCard title={'Spicy Arrabiata Penne'} altImage={'Spicy Arrabiata Penn'}
                          imageUrl={'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg'}/>
            </Grid>
        </Grid>
    </Box>
}

export default CardResultContainer;