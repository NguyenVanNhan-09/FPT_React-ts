import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { TProduct } from "../../interface/products";
import { productCT } from "../../context/ProductsContext";
import { useContext } from "react";
import { categoryCT } from "../../context/CategoryContext";
import { TCategories } from "../../interface/categories";

const productSchema = Joi.object({
   title: Joi.string().required().min(3),
   price: Joi.number().required().min(0),
   image: Joi.string(),
   category: Joi.string(),
});

const AddProduct = () => {
   const navi = useNavigate();
   const { handleSubmitAdd } = useContext(productCT);
   const { categories } = useContext(categoryCT);
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<TProduct>({ resolver: joiResolver(productSchema) });
   const onSubmit = async (data: TProduct) => {
      await handleSubmitAdd(data);
      navi("/admin/products-list");
      location.reload();
   };
   return (
      <>
         <div className="text-center p-10">
            <h1 className="font-bold text-4xl mb-4 ">Add Products</h1>
         </div>
         {/* onSubmit={handleSubmit(onSubmit)} */}
         <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="relative mb-6">
               <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">
                  Title
               </label>
               <input
                  type="text"
                  id="default-search"
                  className="block w-full h-11 px-5 py-2.5 leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none "
                  placeholder="name product..."
                  {...register("title", { required: true })}
               />
               {errors.title && (
                  <span className="text-red-600">{errors.title.message}</span>
               )}
            </div>
            <div className="relative mb-6">
               <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">
                  Price
               </label>
               <input
                  type="text"
                  id="default-search"
                  className="block w-full h-11 px-5 py-2.5 leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none "
                  placeholder="price..."
                  {...register("price", { required: true })}
               />
               {errors.price && (
                  <span className="text-red-600">{errors.price.message}</span>
               )}
            </div>
            <div className="relative mb-6">
               <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">
                  Images
               </label>
               <input
                  type="text"
                  id="default-search"
                  className="block w-full h-11 px-5 py-2.5 leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none "
                  placeholder="images.."
                  {...register("image", { required: true })}
               />
               {errors.image && (
                  <span className="text-red-600">{errors.image.message}</span>
               )}
            </div>
            <div className="relative mb-6">
               <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
                  Category
               </label>
               <select
                  id="category-select"
                  className="block w-full h-11 px-5 py-2.5 leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
                  {...register("category", {
                     required: "Category is required",
                  })}
               >
                  <option defaultValue="" disabled selected>
                     Category...
                  </option>
                  {categories.map((i: TCategories) => (
                     <option defaultValue={i.id}>{i.name}</option>
                  ))}
                  {/* Thêm các tùy chọn khác tại đây */}
               </select>
               {errors.category && (
                  <span className="text-red-600">
                     {errors.category.message}
                  </span>
               )}
            </div>

            <button
               type="submit"
               className="w-52 h-12 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 rounded-full shadow-xs text-white text-base font-semibold leading-6"
            >
               Submit
            </button>
         </form>
      </>
   );
};

export default AddProduct;
