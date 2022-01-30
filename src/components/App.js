import React, {useEffect, useState} from 'react'
import RecipeList from './RecipeList'
import "../css/app.css"
import RecipeEdit from './RecipeEdit';
const { v4: uuidv4 } = require('uuid');

export const RecipeContex = React.createContext()
const LOCAL_STORAGE_KEY = 'cookingWithReact.recipes'

function App() {
    const [selectedRecipeId, setSelectedRecipeId] = useState()
    const [recipes, setRecipes] = useState(sampleRecipes)
    const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeId)

    useEffect(() => {
        const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
        if (recipeJSON != null) setRecipes(JSON.parse(recipeJSON))
    }, [])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes))
    }, [recipes])

    const recipeContextValue = {
        handleRecipeAdd,
        handleRecipeDelete,
        handleRecipeSelect,
        handleRecipeChange
    }

    function handleRecipeChange(id, recipe) {
        const newRecipes = [...recipes]
        const index = newRecipes.findIndex(r => r.id === id)
        newRecipes[index] = recipe
        setRecipes(newRecipes)
    }

    function handleRecipeSelect(id) {
        setSelectedRecipeId(id)
    }
    
    function handleRecipeAdd() {
        const newRecipe = {
            id: uuidv4(),
            name: '',
            servings: 1,
            cookTime: '',
            instructions: '',
            ingredients: [
                {
                    id: uuidv4(),
                    name: '',
                    amount: ''
                }
            ]
        }

        setSelectedRecipeId(newRecipe.id)
        setRecipes([...recipes, newRecipe])
    }

    function handleRecipeDelete(id) {
        if (selectedRecipeId != null && selectedRecipeId === id) {
            setSelectedRecipeId(undefined)
        }
        setRecipes(recipes.filter(recipe => recipe.id !== id))
    }

    return (
        <RecipeContex.Provider value={recipeContextValue}>
            <RecipeList recipes={recipes} />
            {selectedRecipe && <RecipeEdit recipe={selectedRecipe} />}
        </RecipeContex.Provider>
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
