import { useEffect, useState } from "react";
import TProduct from "./interface/products";
import instance from "./API";
import { useForm } from "react-hook-form";
import axios from "axios";

function App() {
   const [products, setProducts] = useState<TProduct[]>([]);
   const [flag, setFlag] = useState<String | Number>(0);
   const { register, handleSubmit, reset } = useForm<TProduct>();

   useEffect(() => {
      (async () => {
         const { data } = await instance.get("/products");
         setProducts(data);
      })();
   }, []);

   const handleDelete = (id: any) => {
      (async () => {
         try {
            if (confirm("Are you sure you want to delete")) {
               await instance.delete(`/products/${id}`);
               setProducts(products.filter((item) => item.id !== id));
            }
         } catch (error) {
            console.log(error);
         }
      })();
   };

   const handleCreate = (product: TProduct) => {
      (async () => {
         try {
            const { data } = await instance.post("/products", product);
            setProducts([...products, data]);
            reset();
         } catch (error) {
            console.log(error);
         }
      })();
   };
   const onSubmitUpdate = async (formData: any) => {
      // console.log(data);
      try {
         const { data } = await axios.put(
            "http://localhost:3000/products/" + flag,
            formData
         );
         console.log(flag);
         const newproduct = products.map((product: TProduct) => {
            if (product.id == flag) {
               product = data;
            }
            return product;
         });
         setProducts(newproduct);
         setFlag(0);
         reset();
      } catch (error) {
         console.log(error);
      }
   };
   const onEdit = (id: number | string) => {
      setFlag(id);
      const product = products.filter((p: TProduct) => p.id === id);
      reset({
         name: product[0].name,
         image: product[0].image,
         price: product[0].price,
         category: product[0].category,
      });
   };

   return (
      <>
         <form action="" onSubmit={handleSubmit(handleCreate)}>
            <label htmlFor="">name</label>
            <input {...register("name")} type="text" />
            <label htmlFor="">price</label>
            <input {...register("price")} type="text" />
            <label htmlFor="">category</label>
            <input {...register("category")} type="text" />
            <button type="submit">Submit</button>
         </form>
         <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
               <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                     <th scope="col" className="px-6 py-3">
                        Product name
                     </th>
                     <th scope="col" className="px-6 py-3">
                        Price
                     </th>
                     <th scope="col" className="px-6 py-3">
                        Category
                     </th>
                     <th scope="col" className="px-6 py-3">
                        Action
                     </th>
                  </tr>
               </thead>
               <tbody>
                  {products.map((item) =>
                     item.id === flag ? (
                        <>
                           <tr key={item.id}>
                              <td colSpan={5}>
                                 <form onSubmit={handleSubmit(onSubmitUpdate)}>
                                    <input
                                       type="text"
                                       {...register("name")}
                                       placeholder="Tên sản phẩm"
                                    />
                                    <input
                                       type="text"
                                       {...register("image")}
                                       placeholder="Ảnh sản phẩm"
                                    />
                                    <input
                                       type="number"
                                       {...register("price")}
                                       placeholder="Giá sản phẩm"
                                    />
                                    <input
                                       type="text"
                                       {...register("category")}
                                       placeholder="Danh mục"
                                    />
                                    <button type="submit">Update</button>
                                    <button
                                       type="button"
                                       onClick={() => setFlag(0)}
                                    >
                                       Hủy
                                    </button>
                                 </form>
                              </td>
                           </tr>
                        </>
                     ) : (
                        <tr
                           key={item.id}
                           className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                        >
                           <td className="px-6 py-4">{item.name}</td>
                           <td className="px-6 py-4">{item.price}</td>
                           <td className="px-6 py-4">{item.category}</td>
                           <td className="px-6 py-4">
                              <button
                                 className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-red-500 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                                 type="button"
                                 onClick={() => handleDelete(item.id)}
                              >
                                 Delete
                              </button>
                              <button
                                 className="ml-3 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                                 type="button"
                                 onClick={() => onEdit(item.id)}
                              >
                                 Edit
                              </button>
                           </td>
                        </tr>
                     )
                  )}
               </tbody>
            </table>
         </div>
      </>
   );
}

export default App;
