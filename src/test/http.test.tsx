import {describe, expect, test} from "vitest";
import {transformAPIResponse} from "../util/http";
import {mealCardData} from "./meal-card.test";

const API_RESPONSE_DATA = [
    {
        "idMeal": "53014",
        "strMeal": "Pizza Express Margherita",
        "strCategory": "Miscellaneous",
        "strArea": "Italian",
        "strInstructions": "1 Preheat the oven to 230\u00b0C.\r\n\r\n2 Add the sugar and crumble the fresh yeast into warm water.",
        "strMealThumb": "https:\/\/www.themealdb.com\/images\/media\/meals\/x0lk931587671540.jpg",
        "strIngredient1": "Water",
        "strIngredient2": "Sugar",
        "strIngredient3": "Yeast",
        "strIngredient4": "Plain Flour",
        "strIngredient5": "Salt",
        "strIngredient6": "Olive Oil",
        "strIngredient7": "Passata",
        "strIngredient8": "Mozzarella"
    }
]

describe('http functions', () => {
    test('transform API response to correct format', () => {
        const expectedResponse = [
            {
                id: "53014",
                title: "Pizza Express Margherita",
                altImage: "Pizza Express Margherita",
                imageUrl: "https:\/\/www.themealdb.com\/images\/media\/meals\/x0lk931587671540.jpg",
                description: "1 Preheat the oven to 230\u00b0C.\r\n\r\n2 Add the sugar and crumble the fresh yeast into warm water.",
                category: "Miscellaneous",
                area: "Italian",
                instructions: "1 Preheat the oven to 230\u00b0C.\r\n\r\n2 Add the sugar and crumble the fresh yeast into warm water.",
                ingredients: [
                    "Water","Sugar","Yeast","Plain Flour","Salt","Olive Oil","Passata","Mozzarella"
                ],
                isFavourite: false
            }
        ]

        const result = transformAPIResponse(API_RESPONSE_DATA, [])
        expect(result).toStrictEqual(expectedResponse);
    });

    test('transform API response to correct format for favourite recipe', () => {
        const expectedResponse = [
            {
                id: "53014",
                title: "Pizza Express Margherita",
                altImage: "Pizza Express Margherita",
                imageUrl: "https:\/\/www.themealdb.com\/images\/media\/meals\/x0lk931587671540.jpg",
                description: "1 Preheat the oven to 230\u00b0C.\r\n\r\n2 Add the sugar and crumble the fresh yeast into warm water.",
                category: "Miscellaneous",
                area: "Italian",
                instructions: "1 Preheat the oven to 230\u00b0C.\r\n\r\n2 Add the sugar and crumble the fresh yeast into warm water.",
                ingredients: [
                    "Water","Sugar","Yeast","Plain Flour","Salt","Olive Oil","Passata","Mozzarella"
                ],
                isFavourite: true
            }
        ]

        const result = transformAPIResponse(API_RESPONSE_DATA, [{...mealCardData, id: "53014"}])
        expect(result).toStrictEqual(expectedResponse);
    });
})