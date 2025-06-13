"use client"
import React, { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import MealPage from "@/components/mealPage/MealPage"

export default function Recipes() {
  const { mealId } = useParams()
  const [meal, setMeal] = useState({})

  useEffect(() => {
    if (mealId) {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}lookup.php?i=${mealId}`).then((res) => {
        res.json().then((data) => {
          setMeal(data.meals[0])
        })
      })
    }
  }, [mealId])

  return (
    <div className="container">
      <MealPage meal={meal}></MealPage>
    </div>
  )  
}
