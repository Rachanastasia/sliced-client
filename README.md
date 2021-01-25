# Sliced Client

Sliced allows you to save your recipes and scale the ingredients up or down by 1/4 increments

This repository is for the front-end client.

Live version: https://sliced.rachanastasia.vercel.app/

back-end repo: https://github.com/Rachanastasia/sliced-API

### Demo Account

- **email** test@gmail.com
- **password** test-password

## Images

![](/screenshots/list.jpg)

Users can view all the recipes in a list.

![](/screenshots/input.jpg)

Users can view a live preview of how their recipe is being parsed to adjust their input accordingly.

![](/screenshots/recipe.jpg)

Once a recipe is created, users can scale the list of ingredients up or down by increments of 1/4.

## Tech Stack

### Front End

- React
- CSS3
- HTML5
- GraphQL
- Apollo Client
- Apollo Link
- React Router
- Jest
- Deployed with Vercel

## Codebase Structure

### /src/App.js

This is where the user context lives. This component renders the header, footer, and router.

### /src/components

All other react components are stored in this folder. Every parent component has its own folder, containing the component file, the test file, and--in most cases--a CSS file.

The folders for RecipeList and RecipePage also contains relavent child components.

#### /Routes

This folder contains the public and private routes used in src/Router.js, and a componenet that controls scrolling to top between routes.

### /src/services

This folder contains Javascript helper files that function in different ways.

#### /parse-input-service

Takes in a string from the user input and splits it into the propor data format based on regex and valid types.

#### /parse-amount-service

Parses the amount_str returned from parse-input-service, seperating the number from the unit.

#### /scale-service

Provides the scaling functionality in the component RecipePage.js

#### /capitalize-recipe-title-service

Turns recipe title to lower case and capitalizes the first letter of every word.

#### /user-recipe-api-services

Makes GET, POST, and DELETE requests to server.

#### /token-service

Gets, clears, and verifies auth token.

#### /auth-api-service

Makes POST request to server.
