import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { useContext } from "react";
import { categoryCT } from "../../context/CategoryContext";
import { TCategories } from "../../interface/categories";

const categorySchema = Joi.object({
   name: Joi.string().required(),
});

const AddCategory = () => {
   const navi = useNavigate();
   const { handleSubmitAdd } = useContext(categoryCT);
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<TCategories>({ resolver: joiResolver(categorySchema) });
   const onSubmit = async (data: TCategories) => {
      await handleSubmitAdd(data);
      navi("/admin/products-list");
      location.reload();
   };
   return (
      <>
         <div className="text-center p-10">
            <h1 className="font-bold text-4xl mb-4 ">Add Category</h1>
         </div>
         <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="relative mb-6">
               <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">
                  Category
               </label>
               <input
                  type="text"
                  id="default-search"
                  className="block w-full h-11 px-5 py-2.5 leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none "
                  placeholder="category.."
                  {...register("name", { required: true })}
               />
               {errors.name && (
                  <span className="text-red-600">{errors.name.message}</span>
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

export default AddCategory;
