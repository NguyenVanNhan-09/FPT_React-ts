import { useContext } from "react";
import ContactEmail from "../component/ContactEmail";
import { productCT } from "../context/ProductsContext";
import { TProduct } from "../interface/products";
import { useParams } from "react-router";
import { cartCT } from "../context/CartContext";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
const Category = () => {
   const { addCartItem } = useContext(cartCT);
   const { id } = useParams();
   const { products } = useContext(productCT);

   return (
      <>
         <div className="bg-white">
            <div className="bg-gradient-to-r from-[#D2E8CD]">
               <div className="w-full max-w-[1126px] mx-auto">
                  {/* Phần 1 */}
                  <div className="py-[68px] text-[30px] font-extrabold text-[#505F4E]">
                     Chậu và hộp đựng
                  </div>
               </div>
            </div>
            <div className="w-full max-w-[1126px] mx-auto">
               {/* Phần 2 */}
               <div className="">
                  <div className="mb-28 mt-8">
                     <ul className="flex  justify-between">
                        <li className="flex py-2 px-4 items-center rounded-md bg-[#D2E8CD] cursor-pointer">
                           <img
                              src="../../src/assets/nav1-removebg-preview.png"
                              alt="image"
                              className="h-[44.92px] w-[72px] pr-2"
                           />
                           <span>Chậu và hộp đựng</span>
                        </li>

                        <li className="flex py-2 px-4 items-center rounded-md bg-[#D2E8CD] cursor-pointer">
                           <img
                              src="../../src/assets/nav2-removebg-preview.png"
                              alt="image"
                              className="h-[44.92px] w-[72px] pr-2"
                           />
                           <span> Chậu tròn</span>
                        </li>
                        <li className="flex py-2 px-4 items-center rounded-md bg-[#D2E8CD] cursor-pointer">
                           <img
                              src="../../src/assets/nav3.png"
                              alt="image"
                              className="h-[44.92px] w-[72px] pr-2"
                           />
                           <span>Đế lót ly</span>
                        </li>
                        <li className="flex py-2 px-4 items-center rounded-md bg-[#D2E8CD] cursor-pointer">
                           <img
                              src="../../src/assets/nav4-removebg-preview.png"
                              alt="image"
                              className="h-[44.92px] w-[72px] pr-2"
                           />
                           <span>Chậu trồng cây</span>
                        </li>
                     </ul>
                  </div>
               </div>
               {/* Select */}
               <div className="flex mb-6 shadow-[-1000px_210px_75px_100px_rgba(188,222,182,0.6)]">
                  <div className="flex items-center pr-8 bg-transparent">
                     <div className="pr-6 whitespace-nowrap bg-transparent">
                        Sắp xếp theo
                     </div>
                     <select
                        id="countries"
                        className="h-12  border border-[#BDBDBD] text-[#BDBDBD] bg-transparent text-base rounded-lg block w-full py-2.5 px-4 focus:outline-none min-w-[221.89px]"
                     >
                        <option selected>Mới nhất</option>
                        <option defaultValue="US">United States</option>
                        <option defaultValue="CA">Canada</option>
                        <option defaultValue="FR">France</option>
                        <option defaultValue="DE">Germany</option>
                     </select>
                  </div>
                  <div className="flex items-center bg-transparent">
                     <div className="pr-6 whitespace-nowrap bg-transparent">
                        Hiển thị :
                     </div>
                     <select
                        id="countries"
                        className="h-12 border border-[#BDBDBD] text-[#BDBDBD] bg-transparent text-base rounded-lg block w-full py-2.5 px-4 focus:outline-none min-w-[221.89px]"
                     >
                        <option selected>Mặc định</option>
                        <option defaultValue="US">United States</option>
                        <option defaultValue="CA">Canada</option>
                        <option defaultValue="FR">France</option>
                        <option defaultValue="DE">Germany</option>
                     </select>
                  </div>
               </div>
               <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-12 mb-8">
                  <div className="rounded-lg lg:col-span-2">
                     <div className="grid grid-cols-3 gap-8">
                        {products
                           .filter(
                              (product: TProduct) =>
                                 product.category === `${id}`
                           )
                           .map((product: TProduct) => (
                              <div className="col-span-1 p-3 mb-5 relative">
                                 <div className="group block">
                                    <img
                                       src={product.image}
                                       alt=""
                                       className="h-[200px] w-[200px] object-cover"
                                    />

                                    <div className="mt-1.5">
                                       <p className="text-gray-900 group-hover:underline group-hover:underline-offset-4">
                                          {product.title}
                                       </p>
                                       <div className="mt-1 flex text-sm">
                                          <p className="pr-2 text-[#505F4E] ">
                                             {product.price}
                                          </p>
                                          <p className=" line-through text-[#828282]">
                                             $ 6130.00
                                          </p>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100">
                                    <div className="flex shadow-xl">
                                       <button className="flex justify-center items-center w-[40.14px] h-[34px] bg-white">
                                          <img
                                             src="../../src/assets/hover-icon-1.png"
                                             alt=""
                                             className="w-[17px] h-[17px]"
                                          />
                                       </button>
                                       <button
                                          onClick={(event) => {
                                             event.stopPropagation();
                                             addCartItem(product);
                                          }}
                                          className="flex justify-center items-center w-[40.14px] h-[34px] bg-[#4E7C32] mx-3"
                                       >
                                          <img
                                             src="../../src/assets/hover-icon-2.png"
                                             alt=""
                                             className="w-[17px] h-[17px]"
                                          />
                                       </button>
                                       <button className="flex justify-center items-center w-[40.14px] h-[34px] bg-white">
                                          <img
                                             src="../../src/assets/hover-icon-3.png"
                                             alt=""
                                             className="w-[17px] h-[17px]"
                                          />
                                       </button>
                                    </div>
                                 </div>
                              </div>
                           ))}
                     </div>
                  </div>
                  <div className="ml-8">
                     <div className="text-[30px] text-[#505F4E] font-extrabold mb-5">
                        Thể loại
                     </div>
                     <div className="mb-5">
                        <ul className="pl-4">
                           <li className="flex items-center pb-3">
                              <input type="checkbox" className="w-4 h-4 mr-3" />
                              <span className="text-[15px]"> Chậu vuông</span>
                           </li>
                           <li className="flex items-center pb-3">
                              <input type="checkbox" className="w-4 h-4 mr-3" />
                              <span className="text-[15px]">Chậu tròn</span>
                           </li>
                           <li className="flex items-center pb-3">
                              <input type="checkbox" className="w-4 h-4 mr-3" />
                              <span className="text-[15px]">Đế lót ly</span>
                           </li>
                           <li className="flex items-center pb-3">
                              <input type="checkbox" className="w-4 h-4 mr-3" />
                              <span className="text-[15px]">
                                 Chậu trồng cây
                              </span>
                           </li>
                        </ul>
                     </div>
                     <div className="relative mb-5">
                        <img
                           src="../../src/assets/ccccc.png"
                           alt=""
                           className="w-[213px] h-[262px]"
                        />
                        <div className="absolute w-[213px] inset-0 bg-gray-700 bg-opacity-50"></div>
                        <div className="absolute top-8 left-7">
                           <div className="text-[18.9px] text-white max-w-[130px] font-extrabold">
                              Trồng loại cây yêu thích của riêng bạn
                           </div>
                        </div>
                        <div className="absolute bottom-8 left-7 flex items-center">
                           <div className="text-[15.04px] text-white pr-4">
                              Mua ngay
                           </div>
                           <i className="ti-arrow-right text-base text-white font-extrabold"></i>
                        </div>
                     </div>
                     <div className="mb-5 max-w-[213px]">
                        <div className="text-[#333333] text-[18.8px] font-bold">
                           Lọc theo giá
                        </div>
                        <div className="relative w-full h-2 bg-green-200 rounded-full overflow-hidden">
                           <div className="absolute top-0 left-0 h-full bg-green-700 w-[70%]"></div>
                        </div>
                        <div className="flex justify-between">
                           <div className="text-[#1E1E1E]">từ $0 đến $800</div>
                           <div className="text-[#1E1E1E]">lọc</div>
                        </div>
                     </div>
                     <div className="mb-5 max-w-[213px]">
                        <div className="text-[#333333] text-[18.8px] font-bold">
                           Lọc theo giá
                        </div>
                        <div className="relative w-full h-2 bg-green-200 rounded-full overflow-hidden">
                           <div className="absolute top-0 left-0 h-full bg-green-700 w-[70%]"></div>
                        </div>
                        <div className="flex justify-between">
                           <div className="text-[#1E1E1E]">2 mm x 50</div>
                           <div className="text-[#1E1E1E]">lọc</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <ContactEmail />
         </div>
      </>
   );
};

export default Category;
