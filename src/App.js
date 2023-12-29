import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { useThemeContext } from "./components/context/theme-context";
import Home from "./pages/home";
import Shop from "./pages/shop";
import Cart from "./pages/cart";
import About from "./pages/about";
import Pages from "./pages/pages";
import Contact from "./pages/contact";
import { useEffect } from "react";
import Layout from "./components/common/layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/pages",
        element: <Pages />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  const { theme, setTheme } = useThemeContext();

  useEffect(() => {
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", theme);
    } else {
      setTheme(localStorage.getItem("theme"));
    }
  }, []); //eslint-disable-line
  return <RouterProvider router={router} />;
}

export default App;
