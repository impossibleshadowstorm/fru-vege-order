import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Cart from "./pages/cart";
import About from "./pages/about";
import Shop from "./pages/shop";
import Contact from "./pages/contact";
import { useEffect } from "react";
import Layout from "./components/common/layout";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import ProductDetail from "./pages/product-detail";
import { useSelector, useDispatch } from "react-redux";
import { lightTheme, darkTheme } from "./reducers/website-theme-reducer";
import alldata from "./utils/consts";

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
        path: "/product/:id/",
        element: <ProductDetail />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/auth",
        children: [
          {
            index: true,
            element: <Login />,
          },
          {
            path: "/auth/register",
            element: <Register />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  const theme = useSelector((state) => state.websiteTheme.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedTheme = localStorage.getItem(alldata.themeConstants.name);

    if (!storedTheme) {
      localStorage.setItem(alldata.themeConstants.name, theme);
    } else {
      if (
        storedTheme === alldata.themeConstants.LIGHT_THEME &&
        theme !== alldata.themeConstants.LIGHT_THEME
      ) {
        dispatch(lightTheme());
      } else if (
        storedTheme === alldata.themeConstants.DARK_THEME &&
        theme !== alldata.themeConstants.DARK_THEME
      ) {
        dispatch(darkTheme());
      }
    }
  }, [dispatch, theme]); //eslint-disable-line
  return <RouterProvider router={router} />;
}

export default App;
