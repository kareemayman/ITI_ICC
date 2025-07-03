import { FlatList, StyleSheet, Text, View, Pressable } from "react-native"
import React, { useEffect, useState } from "react"
import { TextInput } from "react-native-gesture-handler"
import Icon from "react-native-vector-icons/Feather"
import MovieCard from "../components/MovieCard"

export default function Home() {
  const [search, setSearch] = useState("")
  const [movies, setMovies] = useState([])
  const [filteredMovies, setFilteredMovies] = useState([])
  const [category, setCategory] = useState("now_playing")
  const [showCategories, setShowCategories] = useState(false)

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${category}?api_key=2b8ae95655c3c94b07a89fda8837500f`
        )
        const data = await response.json()
        setMovies(data.results)
        setFilteredMovies(data.results)
      } catch (error) {
        console.error("Error fetching movies:", error)
      }
    }

    fetchMovies()
  }, [category])

  useEffect(() => {
    if (search.trim() === "") {
      setFilteredMovies(movies)
      return
    } else {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=2b8ae95655c3c94b07a89fda8837500f&query=${search
          .toLowerCase()
          .trim()}`
      )
        .then((res) => {
          return res.json()
        })
        .then((data) => {
          setFilteredMovies(data.results)
        })
        .catch((error) => {
          console.error("Error fetching search results:", error)
        })
    }
  }, [search])

  return (
    <>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={search}
          onChangeText={setSearch}
          placeholderTextColor={"#aaa"} // <-- light placeholder text
        ></TextInput>

        <Pressable
          style={styles.filterButton}
          onPress={() => setShowCategories(!showCategories)}
          android_ripple={{ color: "#ccc" }}
        >
          <Text style={{ color: "#aaa" }}>Filter </Text>
          <Icon name="filter" size={12} color="#aaa"></Icon>
        </Pressable>
      </View>

      <View style={styles.movieList}>
        <FlatList
          data={filteredMovies}
          renderItem={({ item }) => <MovieCard key={item.id} movie={item}></MovieCard>}
        ></FlatList>

        {showCategories && (
          <View style={styles.categories}>
            <Pressable
              style={[
                styles.categoryOption,
                category === "now_playing" && { backgroundColor: "#686868" },
              ]}
              onPress={() => {setCategory("now_playing"), setShowCategories(false)}}
            >
              <Text style={{ color: "#fff" }}>Now Playing</Text>
            </Pressable>
            <Pressable
              style={[
                styles.categoryOption,
                category === "popular" && { backgroundColor: "#686868" },
              ]}
              onPress={() => {setCategory("popular"), setShowCategories(false)}}
            >
              <Text style={{ color: "#fff" }}>Popular</Text>
            </Pressable>
            <Pressable
              style={[
                styles.categoryOption,
                category === "top_rated" && { backgroundColor: "#686868" },
              ]}
              onPress={() => {setCategory("top_rated"), setShowCategories(false)}}
            >
              <Text style={{ color: "#fff" }}>Top Rated</Text>
            </Pressable>
            <Pressable
              style={[
                styles.categoryOption,
                category === "upcoming" && { backgroundColor: "#686868" },
              ]}
              onPress={() => {setCategory("upcoming"), setShowCategories(false)}}
            >
              <Text style={{ color: "#fff" }}>Upcoming</Text>
            </Pressable>
          </View>
        )}
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  searchContainer: {
    marginHorizontal: 15,
    marginTop: 15,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  searchInput: {
    flex: 1,
    height: 50,
    borderColor: "#444",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 12,
    backgroundColor: "#222",
    color: "#fff", // <-- light text
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    fontSize: 16,
  },
  filterButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    marginLeft: 10,
    paddingHorizontal: 15,
    borderRadius: 12,
    backgroundColor: "#333", // <-- darker button
    borderWidth: 1,
    borderColor: "#444",
  },
  movieList: {
    position: "relative",
    zIndex: 1,
  },
  categories: {
    position: "absolute",
    top: -10,
    right: 15,
    backgroundColor: "#333",
    zIndex: 2,
    borderRadius: 12,
  },
  categoryOption: {
    padding: 10,
    paddingHorizontal: 15,
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderBottomColor: "#444",
    borderRadius: 12,
  },
})
