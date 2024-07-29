import { Navigate, useRoutes } from "react-router-dom";
import "./App.css";
import Category from "./page/Category";
import Detail from "./page/Detail";
import Admin from "./layout/Admin";
import Client from "./layout/Client";
import HomeAdmin from "./component/HomeAdmin";
import Home from "./page/Home";
import ListProducts from "./page/Admin/ListProducts";
import ProductContext from "./context/ProductsContext";
import CategoryContext from "./context/CategoryContext";
import AddProduct from "./page/Admin/AddProduct";
import EditProduct from "./page/Admin/EditProduct";
import AddCategory from "./page/Admin/AddCategory";

function App() {
   // Routers
   const routes = useRoutes([
      {
         path: "",
         element: (
            <ProductContext>
               <CategoryContext>
                  <Client />
               </CategoryContext>
            </ProductContext>
         ),
         children: [
            { path: "", element: <Home /> },
            { path: "category/:id", element: <Category /> },
            { path: "detail", element: <Detail /> },
         ],
      },
      {
         path: "/admin",
         element: (
            <ProductContext>
               <CategoryContext>
                  <Admin />
               </CategoryContext>
            </ProductContext>
         ),
         children: [
            { path: "", element: <Navigate to="home" /> },
            { path: "home", element: <HomeAdmin /> },
            { path: "products-list", element: <ListProducts /> },
            { path: "products-add", element: <AddProduct /> },
            { path: "category-add", element: <AddCategory /> },
            { path: "products-update/:id", element: <EditProduct /> },
         ],
      },
   ]);

   return routes;
}

export default App;
