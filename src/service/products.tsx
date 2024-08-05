import axios from "axios";
import instance from "../API";
import { fromType } from "../interface/products";
class ProductService {
   GetAll = () => {
      try {
         const data = instance.get("/products");
         return data;
      } catch (error) {
         throw new Error("Lỗi");
      }
   };
   GetById = async (id: number | string) => {
      try {
         const { data } = await instance.get(`/products/${id}`);
         return data;
      } catch (error) {
         console.log(error);
      }
   };
   AddProduct = async (productdata: fromType) => {
      try {
         const { data } = await instance.post("/products", productdata);
         return data;
      } catch (error) {
         throw new Error("Lỗi");
      }
   };
   updateProduct = async (productdata: fromType, id: string | number) => {
      try {
         const { data } = await instance.put(`/products/${id}`, productdata);
         return data;
      } catch (error) {
         throw new Error("Lỗi");
      }
   };
   DeleteProduct = async (id: string | number) => {
      try {
         const { data } = await instance.delete(`/products/${id}`);
         return data;
      } catch (error) {
         throw new Error("Lỗi");
      }
   };
   Search = async (keyword: any) => {
      try {
         const { data } = await instance.get(`/products?title_like=${keyword}`);
         console.log(keyword);
         console.log(data);
         return data;
      } catch (error) {
         console.log(error);
      }
   };
   UploadImageProductToCloudinary = async (formdata: any) => {
      try {
         const { data } = await axios.post(
            `https://api.cloudinary.com/v1_1/dbaq8kdwn/upload`,
            formdata
         );
         return data;
      } catch (error) {
         console.log(error);
      }
   };
}

export default ProductService;
