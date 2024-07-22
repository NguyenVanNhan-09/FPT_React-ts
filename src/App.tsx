import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { CarouselDefault } from "./component/Banner";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Home from "./page/Home";
import Category from "./page/Category";
import Detail from "./page/Detail";

function App() {
   const location = useLocation();
   const hideBanner =
      location.pathname.includes("/category") ||
      location.pathname.includes("/detail");
   return (
      <>
         <div className="bg-[#F8F4F0] flex flex-col justify-between min-h-[100vh]">
            <Header />
            {!hideBanner && <CarouselDefault />}
            <div className="">
               <Routes>
                  <Route path="/" element={<Navigate to="home" />} />
                  <Route path="home" element={<Home />} />
                  <Route path="category" element={<Category />} />
                  <Route path="detail" element={<Detail />} />
               </Routes>
            </div>
            <div className="shadow-[1000px_-240px_202px_50px_rgb(188,222,182)]">
               <Footer />
            </div>
         </div>
      </>
   );
}

export default App;
