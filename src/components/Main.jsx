import React from 'react'

const Main = () => {
    const ingredients = ["Chicken", "Oregano", "Tomatoes"]
   
const ingredientsListItems = ingredients.map(ingredient => (
    <li key={ingredient} >{ingredient}</li>
))

function submitted(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const newIngredient = formData.get("ingredient")
   ingredients.push(newIngredient)
   console.log(ingredients)
}

  return (
<main>
        <form className='add-ingredient-form' onSubmit={submitted} >
            <input type="text" 
            aria-label='Add Ingredient'
            placeholder='e.g oregono'
            name='ingredient'
             />
            <button >+ Add ingredient</button>
            
        </form>
        <ul>
           {ingredientsListItems}
               </ul>
    </main>
  )
}

export default Main