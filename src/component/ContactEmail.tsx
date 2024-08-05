const ContactEmail = () => {
   return (
      <div className="w-[888.22px] max-w-full mx-auto pb-[95px]">
         <div className="text-[40px] font-extrabold text-[#505F4E]">
            Đăng ký một cái gì đó *
         </div>
         <div className="text-[40px] font-extrabold text-[#505F4E]">
            _ Bản tin của chúng tôi
         </div>
         <div className="flex justify-between gap-10 mt-[53px]">
            <div className="w-[30%] pl-[40px] text-[14.04px]">
               Nhận thông tin cập nhật hàng tuần về sản phẩm của chúng tôi qua
               email của bạn✌️
            </div>
            <form action="" className="w-[70%] relative">
               <div className="ti-email text-[#6C777C] text-xl absolute top-[50%] translate-y-[-50%] left-3 py-3 px-4 bg-[#F8F8F8]"></div>
               <input
                  type="text"
                  className="w-full py-5 pl-[80px] text-[14.44px] shadow-md"
                  placeholder="youremail123@gmail.com"
               />
               <button className="absolute top-[50%] right-0 py-4 px-6 bg-[#656C66] text-white ">
                  Đăng ký
               </button>
            </form>
         </div>
      </div>
   );
};

export default ContactEmail;
