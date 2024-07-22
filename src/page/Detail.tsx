import ContactEmail from "../component/ContactEmail";

const Detail = () => {
   return (
      <>
         <div className="bg-white pt-[100px]">
            <div className="font-sans max-w-[1100px] mx-auto ">
               <div className="p-4 lg:max-w-6xl max-w-2xl max-lg:mx-auto">
                  <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-8 max-lg:gap-16">
                     <div className="w-full lg:sticky top-0 text-center">
                        <div className="flex w-full justify-center mb-8">
                           <img
                              src="../../src/assets/thungracdetail-removebg-preview.png"
                              alt="Product"
                              className=" w-[355px] h-[355px] rounded-md object-cover object-top"
                           />
                        </div>

                        <div className="flex flex-wrap gap-4 justify-center mx-auto mt-4">
                           <img
                              src="../../src/assets/thungracdetail-removebg-preview.png"
                              alt="Product1"
                              className="w-16 cursor-pointer rounded-md outline"
                           />
                           <img
                              src="../../src/assets/thungracdetail-removebg-preview.png"
                              alt="Product2"
                              className="w-16 cursor-pointer rounded-md"
                           />
                           <img
                              src="../../src/assets/thungracdetail-removebg-preview.png"
                              alt="Product3"
                              className="w-16 cursor-pointer rounded-md"
                           />
                        </div>
                     </div>
                     <div>
                        <div className="lg:col-span-2">
                           <span className="text-sm text-[#4E7C32] uppercase font-bold">
                              Plant
                           </span>
                           <h2 className="text-[44px] font-bold text-[#1D2025]">
                              Square cultivation pots 0.27 to 2 litres
                           </h2>
                           {/* description */}
                           <div className="flex space-x-2 mt-4 text-[16px] text-[#68707D] ">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                           </div>
                           {/* Price */}
                           <div className="flex flex-wrap items-center gap-4 mt-8">
                              <p className="text-[#1D2025] text-3xl font-bold">
                                 $125.00
                              </p>
                              <span className="text-[#505F4E] text-base py-1 px-3 rounded-lg bg-[#FFEDE0] font-extrabold">
                                 50%
                              </span>
                           </div>
                           <div className="text-[#1D2025] text-base mt-3 font-bold">
                              $250.00
                           </div>
                           {/* Button */}
                           <div className="flex flex-wrap items-center gap-4 mt-8">
                              <div className="custom-number-input h-12 w-32">
                                 <div className="flex flex-row h-full w-full rounded-lg relative bg-transparent">
                                    <button
                                       data-action="increment"
                                       className=" bg-[#F7F8FD] text-[#505F4E] hover:text-gray-700 hover:bg-gray-400 h-full w-20  rounded-l cursor-pointer outline-none"
                                    >
                                       <span className="m-auto text-2xl font-bold">
                                          −
                                       </span>
                                    </button>
                                    <input
                                       type="number"
                                       className="focus:outline-none text-center w-full font-bold bg-[#F7F8FD] text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-[#505F4E]  outline-none"
                                       name="custom-input-number"
                                       value="3"
                                    ></input>
                                    <button
                                       data-action="increment"
                                       className="bg-[#F7F8FD] text-[#505F4E] hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                                    >
                                       <span className="m-auto text-2xl font-bold">
                                          +
                                       </span>
                                    </button>
                                 </div>
                              </div>
                              <button
                                 type="button"
                                 className="min-w-[200px] px-4 py-2.5 border border-[#4E7C32] bg-[#4E7C32] hover:opacity-85 text-white text-sm font-semibold rounded-lg"
                              >
                                 Add to cart
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="mt-20 max-w-4xl">
                     <div className="mt-8 z-10">
                        <h3 className="text-[30px]  text-[#4E7C32]">
                           Discription
                        </h3>
                        <p className="text-xl text-[#665345] mt-4">
                           Lorem Ipsum is simply dummy text of the printing and
                           typesetting industry. Lorem Ipsum has been the
                           industry's standard dummy text ever since the 1500s,
                           when an unknown printer took a galley of type and
                           scrambled i
                        </p>
                     </div>
                     <div className="mt-8 z-10">
                        <h3 className="text-[30px]  text-[#4E7C32]">
                           Discription
                        </h3>
                        <p className="text-xl text-[#665345] mt-4">
                           Lorem Ipsum is simply dummy text of the printing and
                           typesetting industry. Lorem Ipsum has been the
                           industry's standard dummy text ever since the 1500s,
                           when an unknown printer took a galley of type and
                           scrambled i
                        </p>
                     </div>
                  </div>
                  <div className="flex w-full justify-between mt-[55px]">
                     <div className="w-[50%]">
                        <div className="flex items-center">
                           <img
                              src="../../src/assets/thungracdetail-removebg-preview.png"
                              alt=""
                              className="w-[183px] h-[183px] cursor-pointer rounded-md"
                           />
                           <div className="flex flex-col items-center pl-4">
                              <div className="flex space-x-2 mt-4">
                                 <svg
                                    className="w-8 fill-[#505050]"
                                    viewBox="0 0 14 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                 >
                                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                 </svg>
                                 <svg
                                    className="w-8 fill-[#505050]"
                                    viewBox="0 0 14 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                 >
                                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                 </svg>
                                 <svg
                                    className="w-8 fill-[#505050]"
                                    viewBox="0 0 14 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                 >
                                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                 </svg>
                                 <svg
                                    className="w-8 fill-[#505050]"
                                    viewBox="0 0 14 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                 >
                                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                 </svg>
                                 <svg
                                    className="w-8 fill-[#505050]"
                                    viewBox="0 0 14 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                 >
                                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                 </svg>
                              </div>
                              <div className="flex items-center">
                                 <span className="text-[#4E7C32] text-[32.75px] pr-2">
                                    5.0
                                 </span>
                                 <span className="text-[#666666] text-[17.64px]">
                                    (8683)
                                 </span>
                              </div>
                           </div>
                        </div>
                        {/* ------------ */}
                        <div className="space-y-3 mt-4">
                           <div className="flex items-center">
                              <p className="text-sm text-gray-800 font-bold">
                                 1
                              </p>
                              <svg
                                 className="w-5 fill-black ml-1.5"
                                 viewBox="0 0 14 13"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                              </svg>
                              <div className="bg-[#D9D9D9]  rounded-md w-full h-2 ml-3">
                                 <div className="w-full h-full rounded-md bg-[#A2A0A0] "></div>
                              </div>
                              <p className="text-sm text-gray-800 font-bold ml-3">
                                 (388)
                              </p>
                           </div>

                           <div className="flex items-center">
                              <p className="text-sm text-gray-800 font-bold">
                                 2
                              </p>
                              <svg
                                 className="w-5 fill-black  ml-1.5"
                                 viewBox="0 0 14 13"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                              </svg>
                              <div className=" rounded-md w-full h-2 ml-3">
                                 <div className="w-1/6 h-full rounded-md bg-[#D9D9D9]"></div>
                              </div>
                              <p className="text-sm text-gray-800 font-bold ml-3"></p>
                           </div>

                           <div className="flex items-center">
                              <p className="text-sm text-gray-800 font-bold">
                                 3
                              </p>
                              <svg
                                 className="w-5 fill-black  ml-1.5"
                                 viewBox="0 0 14 13"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                              </svg>
                              <div className=" rounded-md w-full h-2 ml-3">
                                 <div className="w-1/6 h-full rounded-md bg-[#D9D9D9]"></div>
                              </div>
                              <p className="text-sm text-gray-800 font-bold ml-3"></p>
                           </div>

                           <div className="flex items-center">
                              <p className="text-sm text-gray-800 font-bold">
                                 4
                              </p>
                              <svg
                                 className="w-5 fill-black  ml-1.5"
                                 viewBox="0 0 14 13"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                              </svg>
                              <div className=" rounded-md w-full h-2 ml-3">
                                 <div className="w-1/6 h-full rounded-md bg-[#D9D9D9]"></div>
                              </div>
                              <p className="text-sm text-gray-800 font-bold ml-3"></p>
                           </div>

                           <div className="flex items-center">
                              <p className="text-sm text-gray-800 font-bold">
                                 5
                              </p>
                              <svg
                                 className="w-5 fill-black  ml-1.5"
                                 viewBox="0 0 14 13"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                              </svg>
                              <div className=" rounded-md w-full h-2 ml-3">
                                 <div className="w-1/6 h-full rounded-md bg-[#D9D9D9]"></div>
                              </div>
                              <p className="text-sm text-gray-800 font-bold ml-3"></p>
                           </div>
                        </div>
                     </div>
                     <div className="w-[20%]">
                        <button className=" py-2 px-6 bg-[#4E7C32] text-white rounded-xl">
                           Write reviews
                        </button>
                     </div>
                  </div>

                  <div className="grid gap-20 grid-rows-2 mt-12">
                     <div className="row-span-1">
                        <div className="grid gap-28 grid-cols-2">
                           <div className="col-span-1"></div>
                           <div className="col-span-1">
                              <div className="flex mb-2">
                                 <div className="text-[16.25px] text-[#4E7C32] pr-3">
                                    Aman gupta
                                 </div>
                                 {/* star */}
                                 <div className="flex items-center">
                                    <svg
                                       className="w-2 h-2 text-black ms-1"
                                       aria-hidden="true"
                                       xmlns="http://www.w3.org/2000/svg"
                                       fill="currentColor"
                                       viewBox="0 0 22 20"
                                    >
                                       <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg
                                       className="w-2 h-2 text-black ms-1"
                                       aria-hidden="true"
                                       xmlns="http://www.w3.org/2000/svg"
                                       fill="currentColor"
                                       viewBox="0 0 22 20"
                                    >
                                       <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg
                                       className="w-2 h-2 text-black ms-1"
                                       aria-hidden="true"
                                       xmlns="http://www.w3.org/2000/svg"
                                       fill="currentColor"
                                       viewBox="0 0 22 20"
                                    >
                                       <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg
                                       className="w-2 h-2 text-black ms-1"
                                       aria-hidden="true"
                                       xmlns="http://www.w3.org/2000/svg"
                                       fill="currentColor"
                                       viewBox="0 0 22 20"
                                    >
                                       <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg
                                       className="w-2 h-2 ms-1 text-black"
                                       aria-hidden="true"
                                       xmlns="http://www.w3.org/2000/svg"
                                       fill="currentColor"
                                       viewBox="0 0 22 20"
                                    >
                                       <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                 </div>
                              </div>
                              <div className="text-[11.08px]">
                                 I've been using this cleanser for about five or
                                 six months now and my acne is almost completely
                                 gone. I really struggled for years with my skin
                                 and tried everything possible but this is the
                                 only thing that managed to clear up my skin.
                                 100% recommend and will continue to use is for
                                 sure.
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="row-span-1">
                        <div className="grid gap-28 grid-cols-2">
                           <div className="col-span-1">
                              <div className="flex mb-2">
                                 <div className="text-[16.25px] text-[#4E7C32] pr-3">
                                    Aman gupta
                                 </div>
                                 {/* star */}
                                 <div className="flex items-center">
                                    <svg
                                       className="w-2 h-2 text-black ms-1"
                                       aria-hidden="true"
                                       xmlns="http://www.w3.org/2000/svg"
                                       fill="currentColor"
                                       viewBox="0 0 22 20"
                                    >
                                       <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg
                                       className="w-2 h-2 text-black ms-1"
                                       aria-hidden="true"
                                       xmlns="http://www.w3.org/2000/svg"
                                       fill="currentColor"
                                       viewBox="0 0 22 20"
                                    >
                                       <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg
                                       className="w-2 h-2 text-black ms-1"
                                       aria-hidden="true"
                                       xmlns="http://www.w3.org/2000/svg"
                                       fill="currentColor"
                                       viewBox="0 0 22 20"
                                    >
                                       <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg
                                       className="w-2 h-2 text-black ms-1"
                                       aria-hidden="true"
                                       xmlns="http://www.w3.org/2000/svg"
                                       fill="currentColor"
                                       viewBox="0 0 22 20"
                                    >
                                       <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg
                                       className="w-2 h-2 ms-1 text-black"
                                       aria-hidden="true"
                                       xmlns="http://www.w3.org/2000/svg"
                                       fill="currentColor"
                                       viewBox="0 0 22 20"
                                    >
                                       <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                 </div>
                              </div>
                              <div className="text-[11.08px]">
                                 I've been using this cleanser for about five or
                                 six months now and my acne is almost completely
                                 gone. I really struggled for years with my skin
                                 and tried everything possible but this is the
                                 only thing that managed to clear up my skin.
                                 100% recommend and will continue to use is for
                                 sure.
                              </div>
                           </div>
                           <div className="col-span-1">
                              <div className="flex mb-2">
                                 <div className="text-[16.25px] text-[#4E7C32] pr-3">
                                    Aman gupta
                                 </div>
                                 {/* star */}
                                 <div className="flex items-center">
                                    <svg
                                       className="w-2 h-2 text-black ms-1"
                                       aria-hidden="true"
                                       xmlns="http://www.w3.org/2000/svg"
                                       fill="currentColor"
                                       viewBox="0 0 22 20"
                                    >
                                       <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg
                                       className="w-2 h-2 text-black ms-1"
                                       aria-hidden="true"
                                       xmlns="http://www.w3.org/2000/svg"
                                       fill="currentColor"
                                       viewBox="0 0 22 20"
                                    >
                                       <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg
                                       className="w-2 h-2 text-black ms-1"
                                       aria-hidden="true"
                                       xmlns="http://www.w3.org/2000/svg"
                                       fill="currentColor"
                                       viewBox="0 0 22 20"
                                    >
                                       <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg
                                       className="w-2 h-2 text-black ms-1"
                                       aria-hidden="true"
                                       xmlns="http://www.w3.org/2000/svg"
                                       fill="currentColor"
                                       viewBox="0 0 22 20"
                                    >
                                       <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg
                                       className="w-2 h-2 ms-1 text-black"
                                       aria-hidden="true"
                                       xmlns="http://www.w3.org/2000/svg"
                                       fill="currentColor"
                                       viewBox="0 0 22 20"
                                    >
                                       <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                 </div>
                              </div>
                              <div className="text-[11.08px]">
                                 I've been using this cleanser for about five or
                                 six months now and my acne is almost completely
                                 gone. I really struggled for years with my skin
                                 and tried everything possible but this is the
                                 only thing that managed to clear up my skin.
                                 100% recommend and will continue to use is for
                                 sure.
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="flex justify-center mt-10 mb-14">
                     <button className="py-[3px] rounded-lg px-4 text-[12.15px] bg-[#4E7C32] text-white">
                        See all
                     </button>
                  </div>
               </div>
            </div>
            <ContactEmail />
         </div>
      </>
   );
};

export default Detail;
