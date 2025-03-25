import {SetStateAction} from "react";
import {MealCardProps} from "../components/meal-card";
import {FilterItemProps} from "../components/filter";

const THE_MEAL_DB_API_URL = `${import.meta.env.VITE_THE_MEAL_DB_API_URL}/json/v1/1/`;
const THE_MEAL_DB_API_URL_CATEGORIES = `${import.meta.env.VITE_THE_MEAL_DB_API_URL}/json/v1/1/list.php?c=list`;
const THE_MEAL_DB_API_URL_AREA = `${import.meta.env.VITE_THE_MEAL_DB_API_URL}/json/v1/1/list.php?a=list`;

interface MealAPIResponse {
    idMeal: string;
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

export const transformAPIResponse = (meals: MealAPIResponse[]) => {
    return meals.map((meal: MealAPIResponse) => ({
        id: meal.idMeal,
        title: meal.strMeal,
        altImage: meal.strMeal,
        imageUrl: meal.strMealThumb,
        description: meal.strInstructions,
        category: meal.strCategory,
        area: meal.strArea,
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
    }))
}

export const fetchDataBySearchText = async (
    setResults: { (value: SetStateAction<MealCardProps[]>): void; (arg0: any): void; },
    setLoading: { (value: SetStateAction<boolean>): void; (arg0: boolean): void; },
    searchedWord: string
) => {
    const url = `${THE_MEAL_DB_API_URL}search.php?s=${searchedWord}`;

    fetch(url)
        .then((res) => {
            return res.json();
        })
        .then(({meals}) => {
            if (meals && meals.length > 0) {
                setResults(transformAPIResponse(meals));
            } else {
                setResults([])
            }
            setLoading(false);

        });
}

export const fetchDataByFilterType = async (
    setFilters: { (value: SetStateAction<FilterItemProps[]>): void; (arg0: any): void; },
    type: 'category' | 'area'
) => {
    const url = type === 'category' ? THE_MEAL_DB_API_URL_CATEGORIES : THE_MEAL_DB_API_URL_AREA;

    fetch(url)
        .then((res) => {
            return res.json();
        })
        .then(({meals}) => {
            if (meals && meals.length > 0) {
                setFilters(
                    meals.map((meal) => type === 'category' ? {
                            name: meal.strCategory,
                            selected: false
                        } :
                        {
                            name: meal.strArea,
                            selected: false
                        }
                ));
            }
        });
}