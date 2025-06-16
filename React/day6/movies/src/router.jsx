import { createBrowserRouter, Outlet, Navigate, useLocation } from "react-router-dom";
import { lazy } from "react";
import Footer from "./Footer";
import Landing from "./pages/Landing";
import { useSelector } from "react-redux";

const NavBar = lazy(() => import("./NavBar"));
const Movies = lazy(() => import("./pages/movies"));
const About = lazy(() => import("./pages/about"));
const Contact = lazy(() => import("./pages/contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const MovieDetails = lazy(() => import("./pages/MovieDetails"));

// Protected route wrapper
function RequireAuth({ children }) {
  const isLoggedIn = useSelector((state) => state.loginSlice.isLoggedIn);
  const location = useLocation();
  if (!isLoggedIn) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
}

function NavLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    element: (
      <RequireAuth>
        <NavLayout />
      </RequireAuth>
    ),
    children: [
      { path: "/movies", element: <Movies /> },
      { path: "/movies/:id", element: <MovieDetails /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);