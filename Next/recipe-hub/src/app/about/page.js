import React from "react"
import styles from "./about.module.css"

export default function About() {
  return (
    <div className={`container ${styles.aboutContainer}`}>
      <h1>About Recipe Hub</h1>
      <p>
        <strong>Recipe Hub</strong> is your go-to platform for discovering, searching, and saving
        delicious recipes from around the world. Whether you’re a seasoned chef or just starting out
        in the kitchen, our app makes it easy to find inspiration for your next meal.
      </p>
      <ul>
        <li>
          🔍 <strong>Search</strong> for recipes by name, ingredient, or cuisine.
        </li>
        <li>
          ❤️ <strong>Save your favorites</strong> for quick access anytime.
        </li>
        <li>
          🍽️ <strong>Explore</strong> new dishes and cooking ideas daily.
        </li>
      </ul>
      <p>
        Built with Next.js and React, Recipe Hub is designed to be fast, user-friendly, and
        accessible on any device. We’re passionate about food and technology, and we hope to make
        your cooking journey more enjoyable!
      </p>
      <p>
        Have feedback or suggestions? Reach out to us via the contact form or connect with us on
        social media.
      </p>
    </div>
  )
}
