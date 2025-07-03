import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer, DarkTheme as NavigationDarkTheme } from "@react-navigation/native"
import { StatusBar } from "expo-status-bar"
import { StyleSheet } from "react-native"
import Home from "./screens/Home"
import Favorites from "./screens/Favorites"
import { Provider } from "react-redux"
import { store } from "./store/store"
import FlashMessage from "react-native-flash-message"

const Drawer = createDrawerNavigator()

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#181818" },
        headerTintColor: "#ffd700", // gold accent
        drawerStyle: { backgroundColor: "#181818" },
        drawerActiveTintColor: "#ffd700",
        drawerInactiveTintColor: "#aaa",
        drawerLabelStyle: { fontSize: 18, fontWeight: "600" },
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Favorites" component={Favorites} />
    </Drawer.Navigator>
  )
}

const CustomDarkTheme = {
  ...NavigationDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    background: "#181818", // your custom background
  },
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer theme={CustomDarkTheme}>
        <StatusBar style="light" backgroundColor="#181818" translucent={false} />
        <MyDrawer />
        <FlashMessage
          position="bottom"
          floating
          style={{ borderRadius: 12, margin: 16, backgroundColor: "#222" }}
          titleStyle={{ color: "#fff", fontWeight: "bold" }}
          textStyle={{ color: "#fff" }}
        />
      </NavigationContainer>
    </Provider>
  )
}

const styles = StyleSheet.create({})
