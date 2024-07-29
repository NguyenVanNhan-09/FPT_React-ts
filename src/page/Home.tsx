import { useContext } from "react";
import ContactEmail from "../component/ContactEmail";
import Product from "../component/Product";
import { productCT } from "../context/ProductsContext";
import { TProduct } from "../interface/products";

const Home = () => {
   const { products } = useContext(productCT);
   return (
      <main className="">
         <h3 className="text-[#505F4E] text-3xl mt-8 mb-4 w-[1210px] mx-auto max-w-full font-bold">
            Best sellers
         </h3>
         <div className="bg-white">
            <div className="w-[1210px] mx-auto max-w-full py-[50px]">
               <div className="lg:grid-cols-4 gap-8 grid ">
                  {products.map((product: TProduct) => (
                     <div className="col-span-1">
                        <a href="#" className="group block">
                           <img
                              src={product.image}
                              alt=""
                              className="h-full w-full object-contain sm:h-[250px] py-6 px-10"
                           />

                           <div className="mt-1.5">
                              <p className="text-gray-900 group-hover:underline group-hover:underline-offset-4">
                                 {product.title}
                              </p>
                              <div className="mt-3 flex justify-between items-center text-sm">
                                 <h3 className="text-xs text-gray-500 ">
                                    description
                                 </h3>

                                 <p className="text-gray-900 text-[12.76px]">
                                    ${product.price}
                                 </p>
                              </div>
                           </div>
                        </a>
                     </div>
                  ))}
                  {/* <div className="col-span-1 relative">
                     <span className="absolute py-1  px-2 bg-[#1E2832] text-white text-[10.94px] uppercase">
                        Sale
                     </span>
                     <a href="#" className="group block">
                        <img
                           src="../../src/assets/den.png"
                           alt=""
                           className="h-full w-full object-contain sm:h-[250px] py-6 px-10"
                        />

                        <div className="mt-1.5">
                           <p className="text-gray-900 group-hover:underline group-hover:underline-offset-4">
                              Töpfe
                           </p>
                           <div className="mt-3 flex justify-between items-center text-sm">
                              <h3 className="text-xs text-gray-500 ">
                                 5 by 5 pots for planting
                              </h3>

                              <p className="text-gray-900 line-through text-[12.76px]">
                                 $ 6130.00
                              </p>
                              <p className="text-[#FF6F61] text-[12.58px]">
                                 $ 6130.00
                              </p>
                           </div>
                        </div>
                     </a>
                  </div> */}
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
                     garten spaten
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
                        sand
                     </div>
                  </div>
                  <div className="col-span-1 relative cursor-pointer">
                     <img
                        src="../../src/assets/pd-7.png"
                        alt=""
                        className="w-full h-[277px]"
                     />
                     <div className="bg-gradient-to-r from-[#FFFFFF] absolute top-7 py-3 px-4 text-xl font-bold w-full">
                        pflanzer
                     </div>
                  </div>
                  <div className="col-span-1 relative cursor-pointer">
                     <img
                        src="../../src/assets/pd-8.png"
                        alt=""
                        className="w-full h-[277px]"
                     />
                     <div className="bg-gradient-to-r from-[#FFFFFF] absolute top-7 py-3 px-4 text-xl font-bold w-full">
                        schlammkuchen
                     </div>
                  </div>
                  <div className="col-span-1 relative cursor-pointer">
                     <img
                        src="../../src/assets/pd-9.png"
                        alt=""
                        className="w-full h-[277px]"
                     />
                     <div className="bg-gradient-to-r from-[#FFFFFF] absolute top-7 py-3 px-4 text-xl font-bold w-full">
                        klemmen
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <h3 className="text-[#505F4E] text-3xl pt-8 pb-4 w-[1210px] mx-auto max-w-full font-bold">
            Kategorien
         </h3>
         <div className="px-[120px] pt-[48px] pb-[103px] mx-auto grid grid-cols-4 gap-5 border-t-2 border-[#DFDCD8] ">
            <div className="col-span-1 rounded-md relative cursor-pointer">
               <img
                  src="../../src/assets/k-1.png "
                  alt=""
                  className="h-full w-full object-contain"
               />
               <div className="absolute top-4 right-3 items-end text-white">
                  <div className="text-lg font-bold">Beleuchtung</div>
                  <span className="text-xs">30 items</span>
               </div>
            </div>
            <div className="col-span-1 rounded-md relative cursor-pointer">
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
            </div>
         </div>
         <ContactEmail />
      </main>
   );
};

export default Home;
