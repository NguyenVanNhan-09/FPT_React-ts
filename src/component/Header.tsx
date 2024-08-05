import { useContext, useState } from "react";
import { categoryCT } from "../context/CategoryContext";
import { TCategories } from "../interface/categories";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { cartCT } from "../context/CartContext";
import Example from "./cartExample";
import { Bounce, toast } from "react-toastify";

const Header = () => {
   const navi = useNavigate();
   const user = localStorage.getItem("user");
   const userName = user
      ? JSON.parse(localStorage.getItem("user")!).name
      : undefined;
   const { cartQty } = useContext(cartCT);
   const [showExample, setShowExample] = useState(false);
   const { categories } = useContext(categoryCT);
   const { register, handleSubmit } = useForm();
   const onSubmit = (data: any) => {
      const { keywords } = data;
      navi(`search?keywords=${keywords}`);
   };
   const handleClick = () => {
      setShowExample(!showExample);
   };
   const handleRemoveUser = () => {
      const isConfirm = confirm("Xác nhập đăng xuất !!!");
      if (isConfirm) {
         localStorage.removeItem("user");
         toast.success("đăng xuất thành công", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
         });
         navi("/login");
      } else {
         toast.warn("đăng xuất không thành công", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
         });
      }
   };
   return (
      <>
         <header className=" bg-gradient-to-r from-[#4E7C32] to-[#665345] font-[Poppins]">
            <div className="shadow-sm font-[sans-serif] min-h-[70px]  w-[1126px] max-w-full mx-auto">
               <div className="flex flex-wrap items-center justify-between sm:px-10 px-6 py-3 relative lg:gap-y-4 gap-y-6 gap-x-4 border-b border-white">
                  <form
                     onSubmit={handleSubmit(onSubmit)}
                     className="relative ml-[140px] bg-gray-100 flex border-2 border-transparent rounded-sm h-11 lg:w-2/4 "
                  >
                     <input
                        type="text"
                        placeholder="Tìm kiếm theo sản phẩm, nhãn hiệu và hơn thế nữa"
                        className="w-full outline-none text-[#333] text-sm pl-4 border-transparent"
                        {...register("keywords")}
                     />
                     <button
                        type="submit"
                        className="absolute right-3 top-2/4 translate-y-[-50%] "
                     >
                        <i className=" ti-search text-sm font-extrabold"></i>
                     </button>
                  </form>
                  <a href="#" className="flex items-center">
                     <span className="text-white pr-2">Vn</span>
                     <i className="ti-angle-down text-sm text-white"></i>
                  </a>
                  <div className="flex items-center space-x-8 max-md:ml-auto">
                     {user ? (
                        <>
                           <button
                              onClick={() => handleRemoveUser()}
                              className="flex items-center"
                           >
                              <i className="ti-user text-lg text-white pr-2 "></i>
                              <span className="text-white">{userName}</span>
                           </button>
                           <Link to={"/admin/home"} className="text-white">
                              Admin
                           </Link>
                        </>
                     ) : (
                        <>
                           <a href="/register" className="flex items-center">
                              <i className="ti-user text-lg text-white pr-2 "></i>
                              <span className="text-white">Tài khoản</span>
                           </a>
                        </>
                     )}
                     <button
                        onClick={() => handleClick()}
                        className="flex items-center relative"
                     >
                        <i className="ti-shopping-cart text-lg text-white pr-2"></i>
                        <span className="absolute rounded-full bg-red-400 w-[16px] h-[16px] text-center leading-[16px] top-0 left-[10px] text-[10px]">
                           {cartQty}
                        </span>
                        <span className="text-white">Giỏ hàng</span>
                     </button>
                     {showExample && (
                        <Example
                           change={showExample}
                           setChange={setShowExample}
                        />
                     )}
                  </div>
               </div>
               <div className="w-full py-5">
                  <ul className="flex w-full justify-between">
                     <li className="flex items-center">
                        <a href="/">
                           <span className="text-white text-[13.64px] pr-1">
                              Trang chủ
                           </span>
                           <i className="ti-angle-down text-[11px] text-white"></i>
                        </a>
                     </li>
                     <li className="flex items-center relative group">
                        <a href="#">
                           <span className="text-white text-[13.64px] pr-1">
                              Hộp trồng trọt
                           </span>
                           <i className="ti-angle-down text-[11px] text-white"></i>
                        </a>
                        <div className="absolute z-10 hidden top-[100%] min-w-[110px] min-h-[74px] bg-white rounded-sm shadow-lg group-hover:block">
                           <ul className="pl-7 pr-5 py-5 list-disc">
                              <li className="pb-3">Bộ hoàn chỉnh</li>
                           </ul>
                        </div>
                     </li>
                     <li className="flex items-center">
                        <a href="#">
                           <span className="text-white text-[13.64px] pr-1">
                              phân bón
                           </span>
                           <i className="ti-angle-down text-[11px] text-white"></i>
                        </a>
                     </li>
                     <li className="flex items-center">
                        <a href="#">
                           <span className="text-white text-[13.64px] pr-1">
                              Đất và chất nền
                           </span>
                           <i className="ti-angle-down text-[11px] text-white"></i>
                        </a>
                     </li>
                     <li className="flex items-center relative group">
                        <a href="/category">
                           <span className="text-white text-[13.64px] pr-1">
                              Danh mục
                           </span>
                           <i className="ti-angle-down text-[11px] text-white"></i>
                        </a>
                        <div className="absolute hidden top-[100%] min-w-[110px] min-h-[74px]  z-50 bg-white rounded-sm shadow-lg group-hover:block">
                           <ul className="pl-7 pr-5 py-5 list-disc">
                              {categories.map((item: TCategories) => (
                                 <li
                                    key={item.id}
                                    className="pb-3 w-full whitespace-nowrap"
                                 >
                                    <Link to={`/category/${item.id}`}>
                                       {item.name}
                                    </Link>
                                 </li>
                              ))}
                           </ul>
                        </div>
                     </li>
                     <li className="flex items-center">
                        <a href="#">
                           <span className="text-white text-[13.64px] pr-1">
                              Thủy lợi
                           </span>
                           <i className="ti-angle-down text-[11px] text-white"></i>
                        </a>
                     </li>
                     <li className="flex items-center">
                        <a href="#">
                           <span className="text-white text-[13.64px] pr-1">
                              Trồng và làm vườn
                           </span>
                           <i className="ti-angle-down text-[11px] text-white"></i>
                        </a>
                     </li>
                     <li className="flex items-center">
                        <a href="#">
                           <span className="text-white text-[13.64px] pr-1">
                              Thông gió và điều hòa không khí
                           </span>
                           <i className="ti-angle-down text-[11px] text-white"></i>
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
         </header>
      </>
   );
};

export default Header;
