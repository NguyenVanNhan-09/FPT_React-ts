import { useForm } from "react-hook-form";
import TProduct, { fromType } from "../interface/products";
import { productCT } from "../context/productcontext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export const AddProduct = () => {
   const navi = useNavigate();
   const { register, handleSubmit } = useForm<fromType>();
   const { handleSubmitAdd } = useContext(productCT);
   const onSubmit = async (data: TProduct) => {
      await handleSubmitAdd(data);
      navi("/home");
      location.reload();
   };
   return (
      <div>
         <h1 className="text-3xl text-center font-bold">Add Product </h1>
         <form
            className="max-w-sm mx-auto mb-6"
            onSubmit={handleSubmit(onSubmit)}
         >
            <div className="mb-5">
               <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                  name
               </label>
               <input
                  type="text"
                  id="name"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  {...register("name")}
               />
            </div>
            <div className="mb-5">
               <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                  price
               </label>
               <input
                  type="number"
                  id="price"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  {...register("price")}
               />
            </div>
            <div className="mb-5">
               <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                  category
               </label>
               <input
                  type="text"
                  id="category"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  {...register("category")}
               />
            </div>
            <button
               type="submit"
               className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
               Submit
            </button>
         </form>
      </div>
   );
};
