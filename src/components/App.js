import React from 'react'
import RecipeList from './RecipeList';
import "../css/app.css"

function App() {
    return (
        <RecipeList recipes={sampleRecipes}/>
    )    
}

const sampleRecipes = [
    {
        id: 1,
        name: 'Plain Chicken',
        servings: 3,
        cookTime: '1:45',
        instructions: '1. Put salt on chicken \n2. Put chicken in oven\n3. Eat chicken',
        ingredients: [
            {
                id: 1,
                name: 'Chicken',
                amount: '3 pounds'
            },
            {
                id: 2,
                name: 'Salt',
                amount: '1 tbsp'
            }

        ]
    },
    {
        id: 2,
        name: 'Pork',
        servings: 2,
        cookTime: '1:15',
        instructions: '1. Put paprika on pork \n2. Put pork in oven\n3. Eat pork',
        ingredients: [
            {
                id: 1,
                name: 'Pork',
                amount: '2 pounds'
            },
            {
                id: 2,
                name: 'Paprika',
                amount: '2 tbsp'
            }

        ]
    },
    {
        id: 3,
        name: 'Plain Beef',
        servings: 5,
        cookTime: '1:55',
        instructions: '1. Put pepper on chicken \n2. Put beef in oven\n3. Eat beff',
        ingredients: [
            {
                id: 1,
                name: 'Pork',
                amount: '4 pounds'
            },
            {
                id: 2,
                name: 'Pepper',
                amount: '4 tbsp'
            }

        ]
    }
]

export default App;
