import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { TProduct } from "../interface/products";
import instance from "../API";

const Search = () => {
   const [search] = useSearchParams();
   const [productSearch, setProductSearch] = useState<TProduct[]>([]);
   const keyword = search.get("keywords");

   useEffect(() => {
      (async () => {
         const { data } = await instance.get(`products?title_like=${keyword}`);
         console.log(data);
         setProductSearch(data);
      })();
   }, [search]); // Include `search` in the dependency array

   return (
      <>
         <div className="w-full max-w-[1126px] mx-auto">
            <h2 className="py-10 text-2xl font-bold text-[#527636]">
               Tìm kiếm theo từ khóa: {keyword}
            </h2>

            <div className="grid grid-cols-5 gap-7">
               {/* {productSearch ? productSearch.map((item)=> ()) :} */}
               {productSearch.map((item: TProduct) => (
                  <div className="col-span-1 p-3 mb-5 relative">
                     <Link
                        to={`/product-detail/${item?.id}`}
                        className="group block"
                     >
                        <img
                           src={item?.image}
                           alt=""
                           className="h-[200px] w-[200px] object-contain"
                        />

                        <div className="mt-1.5">
                           <p className="text-gray-900 group-hover:underline group-hover:underline-offset-4">
                              {item?.title}
                           </p>
                           <div className="mt-1 flex text-sm">
                              <p className="pr-2 text-[#505F4E] ">
                                 {item?.price}
                              </p>
                              <p className=" line-through text-[#828282]">
                                 $ 6130.00
                              </p>
                           </div>
                        </div>
                     </Link>
                  </div>
               ))}
            </div>
         </div>
      </>
   );
};

export default Search;
