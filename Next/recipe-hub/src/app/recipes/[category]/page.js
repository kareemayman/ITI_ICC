"use client"
import React, { useEffect, useState } from "react"
import styles from "../recipes.module.css"
import { useParams } from "next/navigation"
import MealCard from "@/components/MealCard/MealCard"

export default function Recipes() {
  const { category } = useParams()
  const [meals, setMeals] = useState([])

  useEffect(() => {
    if (category) {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}filter.php?c=${category}`).then((res) => {
        res.json().then((data) => {
          setMeals(data.meals)
        })
      })
    }
  }, [category])

  return (
    <div className={styles.recipesContainer}>
      {meals.map((meal) => (
        <MealCard key={meal.idMeal} meal={meal}></MealCard>
      ))}
    </div>
  )  
}
