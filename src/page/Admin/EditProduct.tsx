import { useNavigate, useParams } from "react-router";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { TProduct } from "../../interface/products";
import { productCT } from "../../context/ProductsContext";
import { useContext, useEffect, useState } from "react";
import ProductService from "../../service/products";
import { TCategories } from "../../interface/categories";
import { categoryCT } from "../../context/CategoryContext";

const productSchema = Joi.object({
   title: Joi.string().required().min(3),
   price: Joi.number().required().min(0),
   short_description: Joi.string(),
   long_description: Joi.string(),
   image: Joi.string(),
   category: Joi.string(),
});

const EditProduct = () => {
   const navi = useNavigate();
   const { id } = useParams();
   const { hanldeUpdate } = useContext(productCT);
   const { categories } = useContext(categoryCT);
   const productService = new ProductService();
   useEffect(() => {
      (async () => {
         const data = await productService.GetById(id as any);
         setProduct(data);
      })();
   }, [id]);
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<TProduct>({ resolver: joiResolver(productSchema) });
   const [product, setProduct] = useState<TProduct | null>(null);

   const onSubmit = async (data: TProduct) => {
      await hanldeUpdate(data, id);
      navi("/admin/products-list");
   };
   return (
      <>
         <div className="text-center p-10">
            <h1 className="font-bold text-4xl mb-4 ">Edit Products</h1>
         </div>
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
                  defaultValue={product?.title}
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
                  defaultValue={product?.price}
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
                  defaultValue={product?.image}
                  {...register("image", { required: true })}
               />
               {errors.image && (
                  <span className="text-red-600">{errors.image.message}</span>
               )}
            </div>
            <div className="relative mb-6">
               <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">
                  short description
               </label>
               <input
                  type="text"
                  id="default-search"
                  className="block w-full h-11 px-5 py-2.5 leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none "
                  placeholder="name product..."
                  defaultValue={product?.short_description}
                  {...register("short_description", { required: true })}
               />
               {errors.short_description && (
                  <span className="text-red-600">
                     {errors.short_description.message}
                  </span>
               )}
            </div>
            <div className="relative mb-6">
               <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">
                  long description
               </label>
               <input
                  type="text"
                  id="default-search"
                  className="block w-full h-11 px-5 py-2.5 leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none "
                  placeholder="name product..."
                  {...register("long_description", { required: true })}
               />
               {errors.long_description && (
                  <span className="text-red-600">
                     {errors.long_description.message}
                  </span>
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
                  {categories.map((category: TCategories) => (
                     <option
                        key={category.id}
                        value={category.id}
                        selected={
                           product?.category === category.id ? true : false
                        }
                     >
                        {category.name}
                     </option>
                  ))}
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

export default EditProduct;
