import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";

export interface MealCardProps {
    imageUrl: string;
    altImage: string;
    title: string;
    description: string;
}

const MealCard = ({imageUrl, altImage, title, description}: MealCardProps) => {
    return (
        <Card sx={{maxWidth: 345, height: '100%'}}>
            <CardActionArea>
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
                    <Typography
                        sx={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            display: "-webkit-box",
                            WebkitLineClamp: "3",
                            WebkitBoxOrient: "vertical",
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