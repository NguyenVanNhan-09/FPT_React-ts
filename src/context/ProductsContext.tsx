import { createContext, useEffect, useState } from "react";

import { TProduct, fromType } from "../interface/products";
import ProductService from "../service/products";

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
            const { data } = await productService.DeleteProduct(id);
            alert(`Delete ${data} successfully !!!`);
            setProducts(
               products.filter((product: TProduct) => product.id !== id)
            );
         }
      } catch (error) {}
   };

   const hanldeUpdate = async (formData: fromType, id: number | string) => {
      try {
         const data = await productService.updateProduct(formData, id);
         const newProducts = products.map((product) =>
            product.id == id ? data : product
         );
         setProducts(newProducts);
         alert(`Update Successfully!!!`);
      } catch (error) {
         console.log(error);
      }
   };

   const handleSubmitAdd = async (formData: fromType) => {
      try {
         const { data } = await productService.AddProduct(formData);
         setProducts([...products, data]);
         alert(`Add Successfully!!!`);
      } catch (error) {
         console.log(error);
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
