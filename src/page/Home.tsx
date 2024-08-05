import { useContext } from "react";
import ContactEmail from "../component/ContactEmail";
import { productCT } from "../context/ProductsContext";
import { TProduct } from "../interface/products";
import { categoryCT } from "../context/CategoryContext";
import { TCategories } from "../interface/categories";
import { Link } from "react-router-dom";

const Home = () => {
   const { products } = useContext(productCT);
   const { categories } = useContext(categoryCT);
   return (
      <main className="">
         <h3 className="text-[#505F4E] text-3xl mt-8 mb-4 w-[1210px] mx-auto max-w-full font-bold">
            Bán chạy nhất
         </h3>
         <div className="bg-white">
            <div className="w-[1210px] mx-auto max-w-full py-[50px]">
               <div className="lg:grid-cols-4 gap-8 grid ">
                  {products.map((product: TProduct) => (
                     <div className="col-span-1">
                        <Link
                           to={`product-detail/${product.id}`}
                           className="group block"
                        >
                           <img
                              src={product.image}
                              alt=""
                              className="h-full w-full object-cover sm:h-[250px] py-6 px-10"
                           />

                           <div className="mt-1.5">
                              <p className="text-gray-900 group-hover:underline group-hover:underline-offset-4">
                                 {product.title}
                              </p>
                              <div className="mt-3 flex justify-between items-center text-sm">
                                 <h3 className="text-xs text-gray-500 ">
                                    {product.short_description}
                                 </h3>

                                 <p className="text-gray-900 text-[12.76px]">
                                    ${product.price}
                                 </p>
                              </div>
                           </div>
                        </Link>
                     </div>
                  ))}
               </div>
            </div>
         </div>
         <div className="py-[60px] px-64">
            <div className="grid grid-cols-7 gap-3 max-h-[565px]">
               <div className="col-span-3 relative cursor-pointer">
                  <img
                     src="../../src/assets/pd-5.png"
                     alt=""
                     className="h-full"
                  />
                  <div className="bg-gradient-to-r from-[#FFFFFF] absolute top-7 py-3 px-4 text-xl font-bold w-full">
                     xẻng làm vườn
                  </div>
               </div>
               <div className="col-span-4 grid grid-cols-2 grid-rows-2 gap-3">
                  <div className="col-span-1 relative cursor-pointer">
                     <img
                        src="../../src/assets/pd-6.png"
                        alt=""
                        className="w-full h-[277px]"
                     />
                     <div className="bg-gradient-to-r from-[#FFFFFF] absolute top-7 py-3 px-4 text-xl font-bold w-full">
                        Cát
                     </div>
                  </div>
                  <div className="col-span-1 relative cursor-pointer">
                     <img
                        src="../../src/assets/pd-7.png"
                        alt=""
                        className="w-full h-[277px]"
                     />
                     <div className="bg-gradient-to-r from-[#FFFFFF] absolute top-7 py-3 px-4 text-xl font-bold w-full">
                        Chậu
                     </div>
                  </div>
                  <div className="col-span-1 relative cursor-pointer">
                     <img
                        src="../../src/assets/pd-8.png"
                        alt=""
                        className="w-full h-[277px]"
                     />
                     <div className="bg-gradient-to-r from-[#FFFFFF] absolute top-7 py-3 px-4 text-xl font-bold w-full">
                        Bánh bùn
                     </div>
                  </div>
                  <div className="col-span-1 relative cursor-pointer">
                     <img
                        src="../../src/assets/pd-9.png"
                        alt=""
                        className="w-full h-[277px]"
                     />
                     <div className="bg-gradient-to-r from-[#FFFFFF] absolute top-7 py-3 px-4 text-xl font-bold w-full">
                        Cái kẹp
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <h3 className="text-[#505F4E] text-3xl pt-8 pb-4 w-[1210px] mx-auto max-w-full font-bold">
            Kategorien
         </h3>
         <div className="px-[120px] pt-[48px] pb-[103px] mx-auto grid grid-cols-4 gap-5 border-t-2 border-[#DFDCD8] ">
            {categories.map((item: TCategories) => {
               const productCount = products.filter(
                  (product: TProduct) => product.category === item.id
               ).length;
               return (
                  <Link
                     to={`/category/${item.id}`}
                     className="col-span-1 rounded-md relative cursor-pointer"
                  >
                     <img
                        src={item.image}
                        alt=""
                        className="h-full w-full min-w-[303px] min-h-[368px] object-cover"
                     />
                     <div className="absolute top-4 right-3 items-end text-white">
                        <div className="text-lg font-bold">{item.name}</div>
                        <span className="text-xs">{productCount} sản phẩm</span>
                     </div>
                  </Link>
               );
            })}

            {/* <div className="col-span-1 rounded-md relative cursor-pointer">
               <img
                  src="../../src/assets/k-2-ud-2.png"
                  alt=""
                  className="h-full w-full"
               />
               <div className="absolute top-4 right-3 items-end text-white">
                  <div className="text-lg font-bold">Dünger</div>
                  <span className="text-xs">20 items</span>
               </div>
            </div>
            <div className="col-span-1 rounded-md relative cursor-pointer">
               <img
                  src="../../src/assets/k3-ud-2.png"
                  alt=""
                  className="h-full w-full"
               />
               <div className="absolute top-4 right-3 items-end text-white">
                  <div className="text-lg font-bold">Erde & Substrate</div>
                  <span className="text-xs">20 items</span>
               </div>
            </div>
            <div className="col-span-1 rounded-md relative cursor-pointer">
               <img
                  src="../../src/assets/k4-ud.png"
                  alt=""
                  className="h-full w-full"
               />
               <div className="absolute top-4 right-3 items-end text-white">
                  <div className="text-lg font-bold">Bewässerung</div>
                  <span className="text-xs">20 items</span>
               </div>
            </div>
            <div className="col-span-1 rounded-md relative cursor-pointer">
               <img
                  src="../../src/assets/k-5-ud.png"
                  alt=""
                  className="h-full w-full"
               />
               <div className="absolute top-4 right-3 items-end text-white">
                  <div className="text-lg font-bold">Töpfe & Behälter</div>
                  <span className="text-xs">20 items</span>
               </div>
            </div>
            <div className="col-span-1 rounded-md relative cursor-pointer">
               <img
                  src="../../src/assets/k-6.png"
                  alt=""
                  className="h-full w-full"
               />
               <div className="absolute top-4 right-3 items-end text-white">
                  <div className="text-lg font-bold">Growbox</div>
                  <span className="text-xs">20 items</span>
               </div>
            </div>
            <div className="col-span-1 rounded-md relative cursor-pointer">
               <img
                  src="../../src/assets/k-7.png"
                  alt=""
                  className="h-full w-full"
               />
               <div className="absolute top-4 right-3 items-end text-white">
                  <div className="text-lg font-bold">Pflanzen & Gärtnern</div>
                  <span className="text-xs">30 items</span>
               </div>
            </div>
            <div className="col-span-1 rounded-md relative cursor-pointer">
               <img
                  src="../../src/assets/k-8.png"
                  alt=""
                  className="h-full w-full"
               />
               <div className="absolute top-4 right-3 items-end text-white">
                  <div className="text-lg font-bold">Lüftung & Klimaanlage</div>
                  <span className="text-xs">20 items</span>
               </div>
            </div> */}
         </div>
         <ContactEmail />
      </main>
   );
};

export default Home;
