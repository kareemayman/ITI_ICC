import React from "react"
import styles from "./page.module.css"
import MealCard from "@/components/MealCard/MealCard"
import SearchMeal from "@/components/SearchMeal/SearchMeal"

async function getFeaturedRecipe() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}random.php`)

  return res.json()
}

async function getLatestRecipes() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}filter.php?i=egg`, { cache: 'force-cache' })

  return res.json()
}

export default async function Home() {
  const recipe = await getFeaturedRecipe()
  const latest = await getLatestRecipes()

  return <div className="container">
    <div className={styles.featuredRecipe}>
      <MealCard meal={recipe.meals[0]} featured={true}></MealCard>
    </div>

    <SearchMeal></SearchMeal>

    <div className={styles.latestRecipes}>
      <h2>Latest Recipes</h2>
      <div className={styles.latestRecipesContainer}>
        <MealCard meal={latest.meals[0]}></MealCard>
        <MealCard meal={latest.meals[1]}></MealCard>
        <MealCard meal={latest.meals[2]}></MealCard>
        <MealCard meal={latest.meals[3]}></MealCard>
      </div>
    </div>

    <div className={styles.latestRecipes}>
      <h2>Most Cooked</h2>
      <div className={styles.latestRecipesContainer}>
        <MealCard meal={latest.meals[4]}></MealCard>
        <MealCard meal={latest.meals[5]}></MealCard>
        <MealCard meal={latest.meals[6]}></MealCard>
        <MealCard meal={latest.meals[7]}></MealCard>
      </div>
    </div>
  </div>
}
