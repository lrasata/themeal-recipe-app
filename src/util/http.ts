import { SetStateAction } from "react";
import {MealCardProps} from "../components/meal-card";

interface APIResponse {
    strMeal: string;
    strMealThumb: string;
    strInstructions: string;
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
                    description: meal.strInstructions
                })));
            } else {
                setResults([])
            }
            setLoading(false);

        });
}