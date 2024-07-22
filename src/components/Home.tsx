import { Link } from "react-router-dom";
import { useContext } from "react";
import { productCT } from "../context/productcontext";
import TProduct from "../interface/products";

const Home = () => {
   const { products, handleDelete } = useContext(productCT);
   return (
      <div className="relative overflow-x-auto">
         <div className="h-full w-full">
            <Link
               to={`/product-add`}
               className="ml-3 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
               type="button"
            >
               add product
            </Link>
         </div>
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
               {products.map((product: TProduct) => (
                  <tr
                     key={product.id}
                     className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                     <td className="px-6 py-4">{product.name}</td>
                     <td className="px-6 py-4">{product.price}</td>
                     <td className="px-6 py-4">{product.category}</td>
                     <td className="px-6 py-4">
                        <button
                           className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-red-500 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                           type="button"
                           onClick={() => handleDelete(Number(product.id))}
                        >
                           Delete
                        </button>
                        <Link
                           to={`/product-edit/${product.id}`}
                           className="ml-3 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                           type="button"
                        >
                           Edit
                        </Link>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
};

export default Home;
