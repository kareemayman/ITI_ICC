import { RouterProvider } from "react-router-dom"
import { router } from "./router"
import { Provider } from "react-redux"
import store from "./redux/store/store"
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
  )
}

export default App
