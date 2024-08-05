import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter } from "react-router-dom";
import CartContext from "./context/CartContext.tsx";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")!).render(
   <CartContext>
      <React.StrictMode>
         <BrowserRouter>
            <ThemeProvider>
               <ToastContainer
                  position="top-right"
                  autoClose={1000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover={false}
                  theme="light"
               />
               <App />
            </ThemeProvider>
         </BrowserRouter>
      </React.StrictMode>
   </CartContext>
);
