import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { useContext } from "react";
import { categoryCT } from "../../context/CategoryContext";
import { TCategories } from "../../interface/categories";

const categorySchema = Joi.object({
   name: Joi.string().required(),
   image: Joi.string().required(),
});

const AddCategory = () => {
   const { handleSubmitAdd, categories, handleDelete } = useContext(categoryCT);
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<TCategories>({ resolver: joiResolver(categorySchema) });
   const onSubmit = async (data: TCategories) => {
      await handleSubmitAdd(data);
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
                  Name Category
               </label>
               <input
                  type="text"
                  id="default-search"
                  className="block w-full h-11 px-5 py-2.5 leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none "
                  placeholder="Name category.."
                  {...register("name", { required: true })}
               />
               {errors.name && (
                  <span className="text-red-600">{errors.name.message}</span>
               )}
            </div>
            <div className="relative mb-6">
               <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">
                  Images Category
               </label>
               <input
                  type="text"
                  id="default-search"
                  className="block w-full h-11 px-5 py-2.5 leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none "
                  placeholder="image.."
                  {...register("image", { required: true })}
               />
               {errors.image && (
                  <span className="text-red-600">{errors.image.message}</span>
               )}
            </div>

            <button
               type="submit"
               className="w-52 h-12 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 rounded-full shadow-xs text-white text-base font-semibold leading-6"
            >
               Submit
            </button>
         </form>

         <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
               <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                     <th scope="col" className="px-6 py-3">
                        STT
                     </th>
                     <th scope="col" className="px-6 py-3">
                        Name
                     </th>
                     <th scope="col" className="px-6 py-3">
                        Action
                     </th>
                  </tr>
               </thead>
               <tbody>
                  {categories.map((item: TCategories, index: any) => (
                     <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                        <td className="px-6 py-4">{index + 1}</td>
                        <td className="px-6 py-4">{item.name}</td>
                        <td className="px-6 py-4">
                           <button
                              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                              onClick={() => handleDelete(item.id)}
                           >
                              Delete
                           </button>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </>
   );
};

export default AddCategory;
