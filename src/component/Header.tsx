const Header = () => {
   return (
      <>
         <header className=" bg-gradient-to-r from-[#4E7C32] to-[#665345] font-[Poppins]">
            <div className="shadow-sm font-[sans-serif] min-h-[70px]  w-[1126px] max-w-full mx-auto">
               <div className="flex flex-wrap items-center justify-between sm:px-10 px-6 py-3 relative lg:gap-y-4 gap-y-6 gap-x-4 border-b border-white">
                  <form className="relative ml-[140px] bg-gray-100 flex border-2 border-transparent rounded-sm h-11 lg:w-2/4 ">
                     <input
                        type="email"
                        placeholder="Suchen Sie nach Produkten, Marken und mehr"
                        className="w-full outline-none text-[#333] text-sm pl-4 border-transparent"
                     />
                     <button className="absolute right-3 top-2/4 translate-y-[-50%] ">
                        <i className=" ti-search text-sm font-extrabold"></i>
                     </button>
                  </form>
                  <a href="#" className="flex items-center">
                     <span className="text-white pr-2">En</span>
                     <i className="ti-angle-down text-sm text-white"></i>
                  </a>
                  <div className="flex items-center space-x-8 max-md:ml-auto">
                     <a href="#" className="flex items-center">
                        <i className="ti-user text-lg text-white pr-2 "></i>
                        <span className="text-white">Account</span>
                     </a>
                     <a href="#" className="flex items-center relative">
                        <i className="ti-shopping-cart text-lg text-white pr-2"></i>
                        <span className="absolute rounded-full bg-red-400 w-[16px] h-[16px] text-center leading-[16px] top-0 left-[10px] text-[10px]">
                           3
                        </span>
                        <span className="text-white">Cart</span>
                     </a>
                  </div>
               </div>
               <div className="w-full py-5">
                  <ul className="flex w-full justify-between">
                     <li className="flex items-center">
                        <a href="#">
                           <span className="text-white text-[13.64px] pr-1">
                              Beleuchtung
                           </span>
                           <i className="ti-angle-down text-[11px] text-white"></i>
                        </a>
                     </li>
                     <li className="flex items-center relative group">
                        <a href="#">
                           <span className="text-white text-[13.64px] pr-1">
                              Growbox
                           </span>
                           <i className="ti-angle-down text-[11px] text-white"></i>
                        </a>
                        <div className="absolute z-10 hidden top-[100%] min-w-[110px] min-h-[74px] bg-white rounded-sm shadow-lg group-hover:block">
                           <ul className="pl-7 pr-5 py-5 list-disc">
                              <li className="pb-3">Komplettsets</li>
                           </ul>
                        </div>
                     </li>
                     <li className="flex items-center">
                        <a href="#">
                           <span className="text-white text-[13.64px] pr-1">
                              Dünger
                           </span>
                           <i className="ti-angle-down text-[11px] text-white"></i>
                        </a>
                     </li>
                     <li className="flex items-center">
                        <a href="#">
                           <span className="text-white text-[13.64px] pr-1">
                              Erde & Substrate
                           </span>
                           <i className="ti-angle-down text-[11px] text-white"></i>
                        </a>
                     </li>
                     <li className="flex items-center relative group">
                        <a href="/category">
                           <span className="text-white text-[13.64px] pr-1">
                              Töpfe & Behälter
                           </span>
                           <i className="ti-angle-down text-[11px] text-white"></i>
                        </a>
                        <div className="absolute hidden z-10 top-[100%] min-w-[110px] min-h-[74px] bg-white rounded-sm shadow-lg group-hover:block">
                           <ul className="pl-7 pr-5 py-5 list-disc">
                              <li className="pb-3">Eckige Töpfe</li>
                              <li className="pb-3">Runde Töpfe</li>
                              <li className="pb-3">Untersetzer</li>
                              <li className="">Pflanzschalen</li>
                           </ul>
                        </div>
                     </li>
                     <li className="flex items-center">
                        <a href="#">
                           <span className="text-white text-[13.64px] pr-1">
                              Bewässerung
                           </span>
                           <i className="ti-angle-down text-[11px] text-white"></i>
                        </a>
                     </li>
                     <li className="flex items-center">
                        <a href="#">
                           <span className="text-white text-[13.64px] pr-1">
                              Pflanzen & Gärtnern
                           </span>
                           <i className="ti-angle-down text-[11px] text-white"></i>
                        </a>
                     </li>
                     <li className="flex items-center">
                        <a href="#">
                           <span className="text-white text-[13.64px] pr-1">
                              Lüftung & Klimaanlage
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
