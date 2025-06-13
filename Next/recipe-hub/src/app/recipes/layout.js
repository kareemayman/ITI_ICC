import React from "react"
import styles from "./recipes.module.css"
import Link from "next/link"

async function getMealCategories() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}categories.php`, {
    next: { revalidate: 60 },
  })

  return res.json()
}

export default async function RecipeLayout({ children }) {
  const categories = await getMealCategories()

  return (
    <div className="container">
      <header className={styles.header}>
        <h1>Recipes</h1>

        <div className={styles.categories}>
          <h3>Filter By Category</h3>

          <div className={styles.categoriesContainer}>
            {categories.categories.map((cat) => (
              <Link key={cat.idCategory} href={`/recipes/${cat.strCategory}`}>
                <span key={cat.idCategory} className={`${styles.category}`}>
                  {cat.strCategory}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </header>

      {children}
    </div>
  )
}
