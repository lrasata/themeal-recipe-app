import {CardMedia, Divider, Typography} from "@mui/material";

export interface RecipeContentProps {
    ingredients: string[];
    instructions: string;
    imageUrl: string;
    altImage: string;
}

const RecipeContent = ({ingredients, instructions, imageUrl, altImage}: RecipeContentProps) => (
    <>
        <CardMedia
            component="img"
            alt={altImage}
            height="140"
            image={imageUrl}
        />
        <Typography variant="h5" component="div" mb={3}>Ingredients</Typography>
        {
            ingredients.map((ingredient: string, index: number) => (
                <Typography gutterBottom key={`${index}-${ingredient}`}>
                    {ingredient}
                </Typography>
            ))
        }
        <Divider />

        <Typography variant="h5" component="div" my={3}>Instructions</Typography>
        <Typography gutterBottom>
            {instructions}
        </Typography>
    </>
)

export default RecipeContent;