import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Chip,
    Stack,
    Typography
} from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export interface MealCardProps {
    imageUrl: string;
    altImage: string;
    title: string;
    description: string;
    category: string;
    area: string;
    onClickOpenDetails?: () => void;
    onClickCardAction?: () => void;
    ingredients: string[];
    instructions: string;
}

const MealCard = ({
                      imageUrl,
                      altImage,
                      title,
                      description,
                      category,
                      area,
                      onClickOpenDetails,
                      onClickCardAction
                  }: MealCardProps) => {
    return (
        <Card sx={{maxWidth: 345, height: '100%'}}>
            <CardActionArea onClick={onClickOpenDetails}>
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
            {
                onClickCardAction && <CardActions>
                    <Button startIcon={<FavoriteBorderIcon/>} size="small" onClick={onClickCardAction}>Add to
                        favourites</Button>
                </CardActions>
            }


        </Card>
    );
}

export default MealCard;