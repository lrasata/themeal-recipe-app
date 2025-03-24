import {Card, CardActionArea, CardContent, CardMedia, Chip, Stack, Typography} from "@mui/material";
import {RecipeContentProps} from "./recipe-content";

export interface MealCardProps {
    imageUrl: string;
    altImage: string;
    title: string;
    description: string;
    category: string;
    area: string;
    onClick?: () => void;
    recipeContent: RecipeContentProps;
}

const MealCard = ({imageUrl, altImage, title, description, category, area, onClick}: MealCardProps) => {
    return (
        <Card sx={{maxWidth: 345, height: '100%'}}>
            <CardActionArea onClick={onClick}>
                <CardMedia
                    component="img"
                    alt={altImage}
                    height="140"
                    image={imageUrl}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5">
                        {title}
                    </Typography>
                    <Stack direction="row" spacing={1}>
                        <Chip variant="outlined" component="div" label={category} color='info'/>
                        <Chip variant="outlined" component="div" label={area} color='warning'/>
                    </Stack>

                    <Typography
                        sx={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            display: "-webkit-box",
                            WebkitLineClamp: "3",
                            WebkitBoxOrient: "vertical",
                            paddingTop: 4,
                        }}
                        variant="body1">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>

        </Card>
    );
}

export default MealCard;