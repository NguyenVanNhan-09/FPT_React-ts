import instance from "../API";
import { TCategories } from "../interface/categories";
class CategoryService {
   GetAll = () => {
      try {
         const data = instance.get("/categories");
         return data;
      } catch (error) {
         throw new Error("Lỗi");
      }
   };
   GetById = async (id: number | string) => {
      try {
         const { data } = await instance.get(`/categories/${id}`);
         return data;
      } catch (error) {
         console.log(error);
      }
   };
   AddCategory = async (categorydata: TCategories) => {
      try {
         const { data } = await instance.post("/categories", categorydata);
         return data;
      } catch (error) {
         throw new Error("Lỗi");
      }
   };
   UpdateCategory = async (categorydata: TCategories, id: string | number) => {
      try {
         const { data } = await instance.put(`/categories/${id}`, categorydata);
         return data;
      } catch (error) {
         throw new Error("Lỗi");
      }
   };
   DeleteCategory = async (id: string | number) => {
      try {
         const { data } = await instance.delete(`/categories/${id}`);
         return data;
      } catch (error) {
         throw new Error("Lỗi");
      }
   };
}

export default CategoryService;
