import React from 'react'
import styles from './MealPage.module.css'

export default function MealPage({ meal }) {
  if (!meal || !meal.strMeal) return <div className={styles.loading}>Loading...</div>

  // Gather ingredients and measures
  const ingredients = []
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`]
    const measure = meal[`strMeasure${i}`]
    if (ingredient && ingredient.trim()) {
      ingredients.push(`${measure ? measure : ''} ${ingredient}`.trim())
    }
  }

  return (
    <div className={styles.mealPage}>
      <div className={styles.header}>
        <img src={meal.strMealThumb} alt={meal.strMeal} className={styles.image} />
        <div className={styles.info}>
          <h1 className={styles.title}>{meal.strMeal}</h1>
          <div className={styles.meta}>
            <span className={styles.category}>{meal.strCategory}</span>
            <span className={styles.area}>{meal.strArea}</span>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.ingredients}>
          <h2>Ingredients</h2>
          <ul>
            {ingredients.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
        <div className={styles.instructions}>
          <h2>Instructions</h2>
          <p>{meal.strInstructions}</p>
        </div>
      </div>
      {meal.strYoutube && (
        <div className={styles.video}>
          <h2>Video Tutorial</h2>
          <iframe
            src={`https://www.youtube.com/embed/${meal.strYoutube.split('v=')[1]}`}
            title="YouTube video"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  )
}