import {SetStateAction} from "react";
import {FilterItemProps, MealCardProps} from "../components/types";
import {THE_MEAL_DB_API_URL, THE_MEAL_DB_API_URL_AREA, THE_MEAL_DB_API_URL_CATEGORIES} from "./constants";

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

export const transformAPIResponse = (meals: MealAPIResponse[], favouriteRecipes: MealCardProps[]) => {
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
        isFavourite: favouriteRecipes.filter( recipe => recipe.id === meal.idMeal).length === 1
    }))
}

export const fetchDataBySearchText = async (
    setResults: { (value: SetStateAction<MealCardProps[]>): void; (arg0: any): void; },
    setLoading: { (value: SetStateAction<boolean>): void; (arg0: boolean): void; },
    searchedWord: string,
    favouriteRecipes: MealCardProps[]
) => {
    const url = `${THE_MEAL_DB_API_URL}search.php?s=${searchedWord}`;

    fetch(url)
        .then((res) => {
            return res.json();
        })
        .then(({meals}) => {
            if (meals && meals.length > 0) {
                setResults(transformAPIResponse(meals, favouriteRecipes));
            } else {
                setResults([])
            }
            setLoading(false);

        });
}

export const fetchDataByFilterType = async (
    setFilters: { (value: SetStateAction<FilterItemProps[]>): void; (arg0: any): void; },
    type: "category" | "area"
) => {
    const url = type === 'category' ? THE_MEAL_DB_API_URL_CATEGORIES : THE_MEAL_DB_API_URL_AREA;

    fetch(url)
        .then((res) => {
            return res.json();
        })
        .then(({meals}) => {
            if (meals && meals.length > 0) {
                setFilters(
                    meals.map((meal : {strCategory?: string, strArea?: string}) => type === 'category' ? {
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