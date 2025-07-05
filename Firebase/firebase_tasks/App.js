import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text } from "react-native"
import Login from "./screens/Login"
import Register from "./screens/Register"
import { NavigationContainer } from "@react-navigation/native"
import { createDrawerNavigator } from "@react-navigation/drawer"
import Home from "./screens/Home"
import Logout from "./screens/Logout"

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

const MyDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#fbc465", // Golden/yellowish background
        },
        headerStyle: {
          backgroundColor: "#fbc465", // Golden/yellowish header
        },
        headerTintColor: "#000", // Black text/icons in header
        headerTitleAlign: "center", // Center the title
        drawerActiveTintColor: "#000", // Active item color
        drawerInactiveTintColor: "#000", // Inactive item color
      }}
    >
      <Drawer.Screen
        name="Posts"
        component={Home}
        options={{
          headerTitle: () => (
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 20,
                color: "#000",
                width: "100%",
                textAlign: "center",
              }}
            >
              Posts
            </Text>
          ),
        }}
      />
      <Drawer.Screen name="Logout" component={Logout} options={{ headerShown: false }} />
    </Drawer.Navigator>
  )
}

const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={MyDrawer} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
      <StatusBar style="auto" />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})
