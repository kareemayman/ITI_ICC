import React from 'react'
import styles from './MealCard.module.css'
import Link from 'next/link'

export default function MealCard({ meal, featured }) {
  return (
    <Link href={`/recipe/${meal.idMeal}`}>
      <div className={styles.mealCard}>
        <img src={meal.strMealThumb} alt={meal.strMeal} />
        <div className={styles.title}>
          {featured && <h2>Featured Recipe</h2>}
          {<h1>{meal.strMeal}</h1>}
        </div>
      </div>
    </Link>
  )
}
