# The Meal recipe database App

This project allows you to look for your favourite recipes thanks to [TheMealDB API](https://www.themealdb.com/).

This project has been built for training to showcase usage of `React, Redux, Redux toolkit, Redux thunk and React router`.

### Enter an input to look for a recipe
![homepage](./docs/homepage.png)

### Add a recipe to the favourites
![favourites](./docs/favourites-page.png)

## Installation and Setup Instructions

You will need `node` and `npm` installed globally on your machine.

### Prerequisites
Provide the `VITE_THE_MEAL_DB_API_URL` in  `.env`

```
VITE_THE_MEAL_DB_API_URL=https://www.themealdb.com/api
```

Installation:

`npm install`


To Start Server:

`npm run dev`

To Visit App:

`http://localhost:5173/`

To Test:
`npm run test`

## Future improvements
- Make filters work to narrow down the results
  ![filters](./docs/filters.png)
- Add Load More or Pagination to display limited amount of recipes