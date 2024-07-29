import { Outlet, useLocation } from "react-router-dom";
import Header from "../component/Header";
import { CarouselDefault } from "../component/Banner";
import Footer from "../component/Footer";

const Client = () => {
   const location = useLocation();
   const hideBanner =
      location.pathname.includes("/category") ||
      location.pathname.includes("/detail") ||
      location.pathname.includes("/admin");
   const hideHeaderFooter = location.pathname.includes("/admin");
   return (
      <>
         <div className="bg-[#F8F4F0] flex flex-col justify-between min-h-[100vh]">
            {!hideHeaderFooter && <Header />}
            {!hideBanner && <CarouselDefault />}
            <Outlet />
            <div className="shadow-[1000px_-240px_202px_50px_rgb(188,222,182)]">
               {!hideHeaderFooter && <Footer />}
            </div>
         </div>
      </>
   );
};

export default Client;
