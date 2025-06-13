"use client"
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import styles from './SearchResults.module.css'
import MealCard from '@/components/MealCard/MealCard'

export default function SearchResults() {
  const { ingredient } = useParams()
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (ingredient) {
      setLoading(true)
      fetch(`${process.env.NEXT_PUBLIC_API_URL}filter.php?i=${ingredient}`)
        .then((res) => res.json())
        .then((data) => {
          setResults(data.meals || [])
          setLoading(false)
        })
    }
  }, [ingredient])

  return (
    <div className="container">
      <h1 className={styles.heading}>
        Search Results for <span className={styles.ingredient}>{ingredient}</span>
      </h1>
      {loading ? (
        <div className={styles.loading}>Loading...</div>
      ) : results.length === 0 ? (
        <div className={styles.noResults}>No recipes found for "{ingredient}"</div>
      ) : (
        <div className={styles.grid}>
          {results.map((meal) => (
            <MealCard key={meal.idMeal} meal={meal} />
          ))}
        </div>
      )}
    </div>
  )
}