import { createContext, useEffect, useState } from "react";

import { TProduct, fromType } from "../interface/products";
import ProductService from "../service/products";
import { Bounce, toast } from "react-toastify";

type Props = {
   children: React.ReactNode;
};
export const productCT = createContext({} as any);

const ProductContext = ({ children }: Props) => {
   const productService = new ProductService();
   const [products, setProducts] = useState<TProduct[]>([]);
   useEffect(() => {
      (async () => {
         const { data } = await productService.GetAll();
         setProducts(data);
      })();
   }, []);
   const handleDelete = async (id: number | string) => {
      try {
         if (confirm("Are you sure you want to delete ?")) {
            await productService.DeleteProduct(id);
            toast.success("xóa thành công!!!", {
               position: "top-center",
               autoClose: 2000,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: false,
               draggable: true,
               progress: undefined,
               theme: "light",
               transition: Bounce,
            });
            setProducts(
               products.filter((product: TProduct) => product.id !== id)
            );
         }
      } catch (error) {
         console.log(error);
         toast.error("Lỗi! Vui lòng thử lại sau...", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
         });
      }
   };

   const hanldeUpdate = async (formData: fromType, id: number | string) => {
      try {
         const data = await productService.updateProduct(formData, id);
         const newProducts = products.map((product) =>
            product.id == id ? data : product
         );
         setProducts(newProducts);
         toast.success("Sửa thành công!!!", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
         });
      } catch (error) {
         console.log(error);
         toast.error("Lỗi! Vui lòng thử lại sau...", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
         });
      }
   };

   const handleSubmitAdd = async (formData: fromType) => {
      try {
         const { data } = await productService.AddProduct(formData);
         alert("thêm thành công");
         setProducts([...products, data]);
      } catch (error) {
         console.log(error);
         toast.error("Lỗi! Vui lòng thử lại sau...", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
         });
      }
   };
   return (
      <productCT.Provider
         value={{
            products,
            handleDelete,
            handleSubmitAdd,
            hanldeUpdate,
         }}
      >
         {children}
      </productCT.Provider>
   );
};
export default ProductContext;
