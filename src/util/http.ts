import {SetStateAction} from "react";
import {MealCardProps} from "../components/meal-card";

interface APIResponse {
    strMeal: string;
    strMealThumb: string;
    strInstructions: string;
    strCategory: string;
    strArea: string;
    strIngredient1: string;
    strIngredient2: string;
    strIngredient3: string;
    strIngredient4: string;
    strIngredient5: string;
    strIngredient6: string;
    strIngredient7: string;
    strIngredient8: string;
}

export const fetchData = async (
    setResults: { (value: SetStateAction<MealCardProps[]>): void; (arg0: any): void; },
    setLoading: { (value: SetStateAction<boolean>): void; (arg0: boolean): void; },
    searchedWord: string
) => {
    const url = `${import.meta.env.VITE_THE_MEAL_API_URL}/json/v1/1/search.php?s=${searchedWord}`;

    fetch(url)
        .then((res) => {
            return res.json();
        })
        .then(({meals}) => {
            if (meals && meals.length > 0) {
                setResults(meals.map((meal: APIResponse) => ({
                    title: meal.strMeal,
                    altImage: meal.strMeal,
                    imageUrl: meal.strMealThumb,
                    description: meal.strInstructions,
                    category: meal.strCategory,
                    area: meal.strArea,
                    recipeContent: {
                        instructions: meal.strInstructions,
                        ingredients: [
                            meal.strIngredient1,
                            meal.strIngredient2,
                            meal.strIngredient3,
                            meal.strIngredient4,
                            meal.strIngredient5,
                            meal.strIngredient6,
                            meal.strIngredient7,
                            meal.strIngredient8,
                        ],
                        altImage: meal.strMeal,
                        imageUrl: meal.strMealThumb,
                    }
                })));
            } else {
                setResults([])
            }
            setLoading(false);

        });
}