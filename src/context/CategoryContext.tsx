import { createContext, useEffect, useState } from "react";

import { TCategories } from "../interface/categories";
import CategoryService from "../service/category";

type Props = {
   children: React.ReactNode;
};
export const categoryCT = createContext({} as any);

const CategoryContext = ({ children }: Props) => {
   const categoryService = new CategoryService();
   const [categories, setCategories] = useState<TCategories[]>([]);
   useEffect(() => {
      (async () => {
         const { data } = await categoryService.GetAll();
         setCategories(data);
      })();
   });
   const handleDelete = async (id: number | string) => {
      try {
         if (confirm("Are you sure you want to delete ?")) {
            const { data } = await categoryService.DeleteCategory(id);
            alert(`Delete ${data} successfully !!!`);
            setCategories(
               categories.filter((item: TCategories) => item.id !== id)
            );
         }
      } catch (error) {}
   };

   const hanldeUpdate = async (formData: TCategories, id: number | string) => {
      try {
         const data = await categoryService.UpdateCategory(formData, id);
         const newCategory = categories.map((item) =>
            item.id == id ? data : item
         );
         setCategories(newCategory);
         alert(`Update Successfully!!!`);
      } catch (error) {
         console.log(error);
      }
   };

   const handleSubmitAdd = async (formData: TCategories) => {
      try {
         const { data } = await categoryService.AddCategory(formData);
         setCategories([...categories, data]);
         alert(`Add Successfully!!!`);
      } catch (error) {
         console.log(error);
      }
   };
   return (
      <categoryCT.Provider
         value={{
            categories,
            handleDelete,
            handleSubmitAdd,
            hanldeUpdate,
         }}
      >
         {children}
      </categoryCT.Provider>
   );
};
export default CategoryContext;
