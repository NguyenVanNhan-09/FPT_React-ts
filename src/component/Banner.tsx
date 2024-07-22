import { Button, Carousel, Typography } from "@material-tailwind/react";

export function CarouselDefault() {
   return (
      <Carousel className="h-[598px]">
         <div className="h-full w-full object-cover relative bg-gradient-to-r from-[#B5DCB0]">
            <img
               src="../../src/assets/banner-removebg-preview.png"
               alt="image 1"
               className="h-full w-full object-cover object-top"
            />
            <div className="absolute inset-0 grid left-52 top-[50%] translate-y-[-50%] bg-transparent max-w-[50%]">
               <div className="w-3/4 ">
                  <Typography
                     variant="h1"
                     color="white"
                     className="mb-4 text-[55px] md:text-4xl leading-4 w-full text-[#505F4E]"
                  >
                     Wir kümmern uns um Ihre schöner Garten und Haus
                  </Typography>
                  <Typography
                     variant="lead"
                     color="white"
                     className="mb-2 opacity-80 text-[15px] max-w-[520px] text-[#665345] mt-10"
                  >
                     Lorem Ipsum is simply dummy text of the printing and
                     typesetting industry. Lorem Ipsum has been the industry's
                     standard dummy text ever since the 1500s,
                  </Typography>
                  <div className="flex gap-2 mt-5">
                     <Button
                        size="lg"
                        color="white"
                        className="text-[#505F4E] border-[#505F4E] border-2"
                        variant="text"
                     >
                        Lern mehr
                     </Button>
                  </div>
               </div>
            </div>
         </div>
         <div className="h-full w-full object-cover relative bg-gradient-to-r from-[#B5DCB0]">
            <img
               src="../../src/assets/banner-removebg-preview.png"
               alt="image 1"
               className="h-full w-full object-cover object-top"
            />
            <div className="absolute inset-0 grid left-52 top-[50%] translate-y-[-50%] bg-transparent max-w-[50%]">
               <div className="w-3/4 ">
                  <Typography
                     variant="h1"
                     color="white"
                     className="mb-4 text-[55px] md:text-4xl leading-4 w-full text-[#505F4E]"
                  >
                     Wir kümmern uns um Ihre schöner Garten und Haus
                  </Typography>
                  <Typography
                     variant="lead"
                     color="white"
                     className="mb-2 opacity-80 text-[15px] max-w-[520px] text-[#665345] mt-10"
                  >
                     Lorem Ipsum is simply dummy text of the printing and
                     typesetting industry. Lorem Ipsum has been the industry's
                     standard dummy text ever since the 1500s,
                  </Typography>
                  <div className="flex gap-2 mt-5">
                     <Button
                        size="lg"
                        color="white"
                        className="text-[#505F4E] border-[#505F4E] border-2"
                        variant="text"
                     >
                        Lern mehr
                     </Button>
                  </div>
               </div>
            </div>
         </div>
         <div className="h-full w-full object-cover relative bg-gradient-to-r from-[#B5DCB0]">
            <img
               src="../../src/assets/banner-removebg-preview.png"
               alt="image 1"
               className="h-full w-full object-cover object-top"
            />
            <div className="absolute inset-0 grid left-52 top-[50%] translate-y-[-50%] bg-transparent max-w-[50%]">
               <div className="w-3/4 ">
                  <Typography
                     variant="h1"
                     color="white"
                     className="mb-4 text-[55px] md:text-4xl leading-4 w-full text-[#505F4E]"
                  >
                     Wir kümmern uns um Ihre schöner Garten und Haus
                  </Typography>
                  <Typography
                     variant="lead"
                     color="white"
                     className="mb-2 opacity-80 text-[15px] max-w-[520px] text-[#665345] mt-10"
                  >
                     Lorem Ipsum is simply dummy text of the printing and
                     typesetting industry. Lorem Ipsum has been the industry's
                     standard dummy text ever since the 1500s,
                  </Typography>
                  <div className="flex gap-2 mt-5">
                     <Button
                        size="lg"
                        color="white"
                        className="text-[#505F4E] border-[#505F4E] border-2"
                        variant="text"
                     >
                        Lern mehr
                     </Button>
                  </div>
               </div>
            </div>
         </div>
      </Carousel>
   );
}
