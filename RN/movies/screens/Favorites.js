import { FlatList, StyleSheet, Text, View } from "react-native"
import React from "react"
import { useSelector } from "react-redux"
import MovieCard from "../components/MovieCard"

export default function Favorites() {
  const favorites = useSelector((state) => state.favoriteSlice.favorites)

  return (
    <FlatList
      style={styles.movieList}
      data={favorites}
      renderItem={({ item }) => <MovieCard key={item.id} movie={item} />}
      contentContainerStyle={{ paddingBottom: 32 }}
    />
  )
}

const styles = StyleSheet.create({
  movieList: {
    backgroundColor: "#181818",
    paddingTop: 15,
  },
})
