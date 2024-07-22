const Product = () => {
   return (
      <>
         <a href="#" className="group block">
            <img
               src="../../src/assets/pd-2.png"
               alt=""
               className="h-full w-full object-contain sm:h-[250px] py-6 px-10"
            />

            <div className="mt-1.5">
               <p className="text-gray-900 group-hover:underline group-hover:underline-offset-4">
                  Töpfe
               </p>
               <div className="mt-3 flex justify-between text-sm">
                  <h3 className="text-xs text-gray-500 ">
                     5 by 5 pots for planting
                  </h3>

                  <p className="text-gray-900">$ 6130.00</p>
               </div>
            </div>
         </a>
      </>
   );
};

export default Product;
