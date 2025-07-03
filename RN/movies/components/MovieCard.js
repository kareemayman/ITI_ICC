import { Dimensions, Image, Pressable, StyleSheet, Text, View } from "react-native"
import React from "react"
import Icon from "react-native-vector-icons/MaterialIcons"
import { useDispatch, useSelector } from "react-redux"
import { addFavorite, removeFavorite } from "../store/favoriteSlice"
import { showMessage } from "react-native-flash-message"

const { width } = Dimensions.get("window")

export default function MovieCard({ movie }) {
  const favorites = useSelector((state) => state.favoriteSlice.favorites)
  const dispatch = useDispatch()

  const isFavorite = favorites.some((fav) => fav.id === movie.id)
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`

  function handlePress() {
    if (isFavorite) {
      dispatch(removeFavorite(movie.id))
      showMessage({
        message: "Removed from favorites",
        type: "info",
        duration: 2000,
      })
    } else {
      dispatch(addFavorite(movie))
      showMessage({
        message: "Added to favorites",
        type: "success",
        duration: 2000,
      })
    }
  }

  return (
    <View style={styles.movieCard}>
      <Image source={{ uri: imageUrl }} style={styles.movieImage}></Image>

      <View style={styles.info}>
        <Text style={styles.movieTitle}>{movie.title}</Text>

        <Pressable onPress={handlePress}>
          {isFavorite ? (
            <Icon name="favorite" size={20} color={"#d49b43"}></Icon>
          ) : (
            <Icon name="favorite-border" size={20} color={"#fff"}></Icon>
          )}
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  movieCard: {
    backgroundColor: "#222",
    borderRadius: 12,
    margin: 15,
    marginTop: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  movieImage: {
    width: width - 30,
    height: 200,
    borderRadius: 12,
    resizeMode: "cover",
  },
  info: {
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  movieTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: 600,
    maxWidth: width - 90,
  },
})
