import { useEffect, useState } from "react";
import TProduct from "./interface/products";
import instance from "./API";
import { AddProduct } from "./components/AddProduct";
import EditProduct from "./components/editProduct";
import { useRoutes } from "react-router-dom";
import Home from "./components/Home";
import ProductItem from "./components/ProductItem";
import Client from "./layout/client";
import ProductContext from "./context/productcontext";

function App() {
   const routes = useRoutes([
      {
         path: "",
         element: (
            <ProductContext>
               <Client />
            </ProductContext>
         ),
         children: [
            { path: "/home", element: <Home /> },
            { path: "/product-add", element: <AddProduct /> },
            { path: "/product-edit/:id", element: <EditProduct /> },
         ],
      },
   ]);

   return routes;
   // <>
   //    <Routes>
   //       <Route
   //          path="/product-add"
   //          element={<AddProduct onAdd={handleCreate} />}
   //       />
   //       <Route
   //          path="/home"
   //          element={<Home products={products} onDel={handleDelete} />}
   //       />
   //       <Route
   //          path="/product-edit/:id"
   //          element={<EditProduct onEdit={handleUpdate} />}
   //       />
   //       <Route
   //          path="/product-item"
   //          element={<ProductItem products={products} />}
   //       />
   //    </Routes>
   // </>
}

export default App;
