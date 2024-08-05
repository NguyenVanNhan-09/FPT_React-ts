import { createContext, useEffect, useState } from "react";
import { TProduct } from "../interface/products";
import { toast } from "react-toastify";
import instance from "../API";

type Props = {
   children: React.ReactNode;
};

type CartItem = {
   id?: number | string;
   qty: number;
   title: string;
   price: number;
   image: string;
};

// interface ShoppingContextType {
//    cartQty: number;
//    totalPrice: number;
//    cartItems: CartItem[];
//    increaseQty: (id: number) => void;
//    decreaseQty: (id: number) => void;
//    addCartItem: (item: TProduct) => void;
//    removeCartItem: (id: number) => void;
//    clearCart: () => void;
// }

export const cartCT = createContext({} as any);

const CartContext = ({ children }: Props) => {
   const [cartItems, setCartItems] = useState<CartItem[]>(() => {
      const jsonCartData = localStorage.getItem("shopping_cart");
      return jsonCartData ? JSON.parse(jsonCartData) : [];
   });

   useEffect(() => {
      localStorage.setItem("shopping_cart", JSON.stringify(cartItems));
   }, [cartItems]);

   // số lượng item trong cart
   const cartQty = cartItems.reduce((qty, item) => qty + item.qty, 0);

   // tổng sô tiền các item trong cart
   const totalPrice = cartItems.reduce(
      (total, item) => total + item.qty * item.price,
      0
   );

   // Tăng số lượng
   const increaseQty = (id: number | string) => {
      const currentCartItem = cartItems.find((item) => item.id === id);
      if (currentCartItem) {
         const newItems = cartItems.map((item) => {
            if (item.id === id) {
               return { ...item, qty: item.qty + 1 };
            } else {
               return item;
            }
         });
         setCartItems(newItems);
      }
   };

   // Giảm số lượng
   const decreaQty = (id: number | string) => {
      const currentCartItem = cartItems.find((item) => item.id === id);
      if (currentCartItem) {
         if (currentCartItem.qty == 1) {
            removeCartItem(id);
         } else {
            const newItems = cartItems.map((item) => {
               if (item.id === id) {
                  return { ...item, qty: item.qty - 1 };
               } else {
                  return item;
               }
            });
            setCartItems(newItems);
         }
      }
   };

   // Thêm item vào cart
   const addCartItem = (product: TProduct) => {
      if (product) {
         const currentCartItem = cartItems.find(
            (item) => item.id === product.id
         );
         console.log(currentCartItem);
         if (currentCartItem) {
            const newItems = cartItems.map((item) => {
               if (item.id === product.id) {
                  return { ...item, qty: item.qty + 1 };
               } else {
                  return item;
               }
            });
            toast.success("Thêm giỏ hàng thành công!", {
               position: "top-right",
               autoClose: 1000,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: false,
               draggable: true,
               progress: undefined,
               theme: "light",
            });
            setCartItems(newItems);
         } else {
            const newItem = { ...product, qty: 1 };
            toast.success("Thêm giỏ hàng thành công!", {
               position: "top-right",
               autoClose: 1000,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: false,
               draggable: true,
               progress: undefined,
               theme: "light",
            });
            setCartItems([...cartItems, newItem]);
         }
      } else {
         toast.error("🦄 Wow so easy!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
         });
      }
   };

   // Xóa item khỏi cart
   const removeCartItem = (id: number | string) => {
      const currentCartItemIndex = cartItems.findIndex(
         (item) => item.id === id
      );
      const newItems = [...cartItems];
      if (newItems) {
         newItems.splice(currentCartItemIndex, 1);
         toast.success("Xóa thành công!", {
            position: "top-left",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
         });
         setCartItems(newItems);
      } else {
         toast.error("🦄 Wow so easy!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
         });
      }
   };

   // Xóa cart
   const clearCart = async () => {
      toast.success("Đặt thành công!", {
         position: "top-center",
         autoClose: 1000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: false,
         draggable: true,
         progress: undefined,
         theme: "light",
      });
      setCartItems([]);
   };

   return (
      <cartCT.Provider
         value={{
            cartItems,
            cartQty,
            totalPrice,
            addCartItem,
            removeCartItem,
            clearCart,
            increaseQty,
            decreaQty,
         }}
      >
         {children}
      </cartCT.Provider>
   );
};

export default CartContext;
