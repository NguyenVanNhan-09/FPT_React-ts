import { useContext } from "react";
import { cartCT } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
import axios from "axios";
import Joi from "joi";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";

const schema = Joi.object({
   name: Joi.string().min(3).required().messages({
      "string.empty": "Tên là bắt buộc",
      "string.min": "Tên phải có ít nhất 3 ký tự",
   }),
   email: Joi.string()
      .email({
         minDomainSegments: 2,
         tlds: { allow: ["com", "net", "vn", "edu"] },
      })
      .required(),
   phone: Joi.string(),
});
const Checkout = () => {
   const navi = useNavigate();
   const {
      cartItems,
      removeCartItem,
      totalPrice,
      increaseQty,
      decreaQty,
      clearCart,
   } = useContext(cartCT);

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({
      resolver: joiResolver(schema),
   });

   const onSubmit = async (data: any) => {
      if (cartItems.length === 0) {
         toast.warn("Không có sản phẩm trong giỏ hàng !!!", {
            position: "top-center",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
         });
         return;
      }

      try {
         await axios.post("http://localhost:3000/cart", {
            ...data,
            items: cartItems,
            total: totalPrice,
         });

         // Xóa giỏ hàng sau khi đặt hàng
         clearCart();

         // Chuyển hướng về trang chủ
         navi("/");
      } catch (error) {
         console.error("Có lỗi xảy ra khi đặt hàng: ", error);
         toast.error("Đã xảy ra lỗi khi đặt hàng. Vui lòng thử lại.", {
            position: "top-center",
            autoClose: 2500,
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
         <div className="bg-white w-full flex justify-center pt-28 pb-40">
            <div className="font-sans max-w-5xl max-md:max-w-xl mx-autopy-4 z-10">
               <h1 className="text-3xl font-bold text-gray-800 text-center z-10">
                  Giỏ hàng
               </h1>

               <div className="grid md:grid-cols-3 gap-8 mt-16 z-10">
                  <div className="md:col-span-2 space-y-4">
                     {cartItems.map((item: any) => (
                        <>
                           <div className="grid grid-cols-3 items-start gap-4">
                              <div className="col-span-2 flex items-start gap-4">
                                 <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0 bg-gray-100 p-2 rounded-md">
                                    <img
                                       src={item.image}
                                       className="w-full h-full object-contain"
                                    />
                                 </div>
                                 <div className="flex flex-col">
                                    <h3 className="text-base font-bold text-gray-800">
                                       {item.title}
                                    </h3>
                                    <p className="text-xs font-semibold text-gray-500 mt-0.5">
                                       Size: MD
                                    </p>

                                    <button
                                       type="button"
                                       className="mt-6 font-semibold text-red-500 text-xs flex items-center gap-1 shrink-0"
                                       onClick={() => removeCartItem(item.id)}
                                    >
                                       <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="w-4 fill-current inline"
                                          viewBox="0 0 24 24"
                                       >
                                          <path
                                             d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                                             data-original="#000000"
                                          ></path>
                                          <path
                                             d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                                             data-original="#000000"
                                          ></path>
                                       </svg>
                                       REMOVE
                                    </button>
                                 </div>
                              </div>

                              <div className="flex flex-col items-end">
                                 <h4 className="text-lg max-sm:text-base font-bold text-gray-800">
                                    {item.price} vnđ
                                 </h4>

                                 <button
                                    type="button"
                                    className="mt-6 flex items-center px-3 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md"
                                 >
                                    <svg
                                       xmlns="http://www.w3.org/2000/svg"
                                       className="w-2.5 fill-current"
                                       viewBox="0 0 124 124"
                                       onClick={() => decreaQty(item.id)}
                                    >
                                       <path
                                          d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                                          data-original="#000000"
                                       ></path>
                                    </svg>

                                    <span className="mx-3 font-bold">
                                       {item.qty}
                                    </span>
                                    <svg
                                       xmlns="http://www.w3.org/2000/svg"
                                       className="w-2.5 fill-current"
                                       viewBox="0 0 42 42"
                                       onClick={() => increaseQty(item.id)}
                                    >
                                       <path
                                          d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                                          data-original="#000000"
                                       ></path>
                                    </svg>
                                 </button>
                              </div>
                           </div>

                           <hr className="border-gray-300" />
                        </>
                     ))}
                  </div>

                  <div className="bg-gray-100 rounded-md p-4 h-max">
                     <h3 className="text-lg max-sm:text-base font-bold text-gray-800 border-b border-gray-300 pb-2">
                        Tóm tắt theo thứ tự
                     </h3>

                     <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
                        <div className="grid gap-y-4">
                           <div className="relative flex flex-col items-center">
                              <input
                                 type="text"
                                 {...register("name")}
                                 placeholder="Tên"
                                 className={`px-4 py-2.5 bg-white text-gray-800 rounded-md w-full text-sm border-b outline-none ${
                                    errors.name
                                       ? "border-red-500"
                                       : "focus:border-gray-800"
                                 }`}
                              />
                              {errors.name && (
                                 <p className="text-red-500 text-xs mt-1">
                                    Bạn cần nhập đúng name
                                 </p>
                              )}
                           </div>

                           <div className="relative flex flex-col items-center">
                              <input
                                 type="email"
                                 {...register("email")}
                                 placeholder="Email"
                                 className={`px-4 py-2.5 bg-white text-gray-800 rounded-md w-full text-sm border-b outline-none ${
                                    errors.email
                                       ? "border-red-500"
                                       : "focus:border-gray-800"
                                 }`}
                              />
                              {errors.email && (
                                 <p className="text-red-500 text-xs mt-1">
                                    Bạn cần nhập đúng name email
                                 </p>
                              )}
                           </div>

                           <div className="relative flex flex-col items-center">
                              <input
                                 type="text"
                                 {...register("phone")}
                                 placeholder="Số điện thoại"
                                 className={`px-4 py-2.5 bg-white text-gray-800 rounded-md w-full text-sm border-b outline-none ${
                                    errors.phone
                                       ? "border-red-500"
                                       : "focus:border-gray-800"
                                 }`}
                              />
                              {errors.phone && (
                                 <p className="text-red-500 text-xs mt-1">
                                    Bạn cần nhập đúng số điện thoại
                                 </p>
                              )}
                           </div>
                        </div>
                        <div className="flex justify-between pt-3">
                           <div className="">Total</div>
                           <span className="">{totalPrice}vnd</span>
                        </div>
                        <button
                           type="submit"
                           className="text-sm mt-3 px-4 py-2.5 w-full font-semibold tracking-wide bg-gray-800 hover:bg-gray-900 text-white rounded-md"
                        >
                           Đặt hàng
                        </button>
                        <button
                           type="button"
                           onClick={() => navi("/")}
                           className="text-sm mt-3 px-4 py-2.5 w-full font-semibold tracking-wide bg-gray-800 hover:bg-gray-900 text-white rounded-md"
                        >
                           Tiếp tục mua hàng
                        </button>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Checkout;
