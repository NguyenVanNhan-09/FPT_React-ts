import { useForm } from "react-hook-form";
import { TUser } from "../interface/users";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import instance from "../API";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Bounce, toast } from "react-toastify";

const userSchema = Joi.object({
   name: Joi.string().allow(""),
   email: Joi.string()
      .email({
         minDomainSegments: 2,
         tlds: { allow: ["com", "net", "vn", "edu"] },
      })
      .required(),
   password: Joi.string().required().min(6),
});

const Register = () => {
   const navi = useNavigate();
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<TUser>({
      resolver: joiResolver(userSchema),
   });
   const onSubmit = async (user: TUser) => {
      console.log(user);
      try {
         const { data } = await instance.post("/register", user);
         if (data.user) {
            toast.success("🦄 Wow so easy!", {
               position: "top-right",
               autoClose: 2000,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: false,
               draggable: true,
               progress: undefined,
               theme: "colored",
               transition: Bounce,
            });
            const isConfirm = confirm(
               "register successfully, go to login now ?"
            );
            if (isConfirm) {
               navi("/login");
            }
         }
      } catch (error) {
         if (axios.isAxiosError(error) && error.response) {
            const errorMessage = error.response.data; // Lấy thông báo lỗi từ máy chủ
            console.error(errorMessage);
            // Hiển thị thông báo lỗi cho người dùng
            alert(`Đã xảy ra lỗi: ${errorMessage}`);
         } else {
            console.error("Lỗi không xác định");
         }
      }
   };
   return (
      <>
         <div className="bg-gray-200 pt-8 pb-14">
            <div className="max-w-3xl mx-auto text-center mt-16">
               <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-2 pb-4 relative">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                     Đăng ký
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></span>
               </h1>
            </div>

            <form
               onSubmit={handleSubmit(onSubmit)}
               className="max-w-sm mx-auto mt-12 mb-12"
            >
               <div className="mb-5">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                     Tên
                  </label>
                  <input
                     type="text"
                     id="name"
                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     {...register("name")}
                  />
                  {errors.name && (
                     <span className="text-red-700">{errors.name.message}</span>
                  )}
               </div>
               <div className="mb-5">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                     Email
                  </label>
                  <input
                     type="email"
                     id="email"
                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     {...register("email")}
                  />
                  {errors.email && (
                     <span className="text-red-700">
                        {errors.email.message}
                     </span>
                  )}
               </div>
               <div className="mb-5">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                     Mật khẩu
                  </label>
                  <input
                     type="password"
                     id="password"
                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     {...register("password")}
                  />
                  {errors.password && (
                     <span className="text-red-700">
                        {errors.password.message}
                     </span>
                  )}
               </div>
               <div className="pb-4 ">
                  Bạn đã có tài khoản?
                  <a className="text-blue-700 pl-1" href="/login">
                     đăng nhập
                  </a>
               </div>
               <button
                  type="submit"
                  className="text-white flex bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
               >
                  Đăng ký
               </button>
            </form>
         </div>
      </>
   );
};

export default Register;
