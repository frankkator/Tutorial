import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination} from "swiper/modules";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
export default function ImageCarousel() {
       
       const carousel = [
              {
                     src: '',
                     alt: 'Image 1',
                     description: 'Life is beautiful'
              },
              {
                     src: '',
                     alt: 'Image 2',
                     description: 'Nature is amazing'
              },
              {
                     src: '',
                     alt: 'Image 3',
                     description: 'Sunset is breathtaking'
              },
       ];     

  

  return (
       <div className='relative w-full max-w-4xl mx-auto group'>
              <Swiper
              modules= {[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              navigation= {{  
                     prevEl: '.prev-btn',
                     nextEl: '.next-btn',
              }}
              pagination= {{
                     el: '.swiper-pagination',
                     clickable: false,
              }}
              className="w-full rounded-xl overflow-hidden"
       >

              {carousel.map((slide, index) => (
                     <SwiperSlide key={index}>
                     <div className="w-full h-98 relative">
              <img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-full object-cover"
              />
                     </div>
              </SwiperSlide>
              ))}
              </Swiper>


              <button className=".prev-btn absolute left-2 top-1/2 -translate-y-1/2">
              <BsChevronLeft size={20} />
              </button>
              <button className=".next-btn absolute right-2 top-1/2 -translate-y-1/2">
              <BsChevronRight size={30} />
              </button>

               <div className="custom-pagination absolute bottom-4 left-0 right-0 z-10 flex justify-center gap-2"></div>
       </div>
  )
}

       
