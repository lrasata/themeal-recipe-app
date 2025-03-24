import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";

interface MealCardProps{
    imageUrl: string;
    altImage: string;
    title: string;
}
const MealCard = ({imageUrl, altImage, title}: MealCardProps) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
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
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}

export default MealCard;